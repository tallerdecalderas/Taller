/**
 * Lee el catálogo desde una hoja de Google **pública**, sin API ni credenciales.
 *
 * Usa los endpoints públicos de exportación CSV:
 * - `export?format=csv` (hoja compartida como "cualquiera con el enlace")
 * - `gviz/tq?tqx=out=csv` (permite elegir la pestaña por nombre)
 *
 * El fetch se ejecuta en el servidor (no en el navegador) para evitar CORS.
 * En producción se resuelve una sola vez, en build.
 */

import { parseCsvRecords } from "@/lib/products/csv";
import type { ProductSheetRow } from "./product-row-mapper";

const SHEET_BASE_URL = "https://docs.google.com/spreadsheets/d";
const FETCH_TIMEOUT_MS = 15_000;

function readEnv(key: string): string | undefined {
  const value = process.env[key];

  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function normalizeSheetId(value: string): string {
  const match = value.match(/\/spreadsheets\/d\/([^/]+)/);
  return match?.[1] ?? value;
}

export function isPublicSheetConfigured(): boolean {
  return Boolean(readEnv("PUBLIC_SHEET_CSV_URL") ?? readEnv("PUBLIC_SHEET_ID"));
}

export function buildPublicSheetCsvUrl(): string | undefined {
  const override = readEnv("PUBLIC_SHEET_CSV_URL");

  if (override) {
    return override;
  }

  const rawSheetId = readEnv("PUBLIC_SHEET_ID");

  if (!rawSheetId) {
    return undefined;
  }

  const sheetId = normalizeSheetId(rawSheetId);

  const gid = readEnv("PUBLIC_SHEET_GID");
  const sheetName = readEnv("PUBLIC_SHEET_NAME");

  if (gid) {
    return `${SHEET_BASE_URL}/${sheetId}/export?format=csv&gid=${encodeURIComponent(gid)}`;
  }

  if (sheetName) {
    return `${SHEET_BASE_URL}/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  }

  return `${SHEET_BASE_URL}/${sheetId}/export?format=csv`;
}

export async function fetchPublicSheetRows(): Promise<ProductSheetRow[]> {
  const url = buildPublicSheetCsvUrl();

  if (!url) {
    throw new Error("No hay una hoja pública configurada (PUBLIC_SHEET_ID o PUBLIC_SHEET_CSV_URL).");
  }

  const isProduction = process.env.NODE_ENV === "production";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      cache: isProduction ? "force-cache" : "no-store",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        Accept: "text/csv,text/plain;q=0.9,*/*;q=0.8",
      },
    });

    if (!response.ok) {
      throw new Error(`Google Sheets respondió con estado ${response.status}.`);
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (contentType.includes("text/html")) {
      throw new Error(
        "La hoja no es pública. Compartila como 'Cualquiera con el enlace: Lector'.",
      );
    }

    const csv = await response.text();

    if (csv.trim() === "") {
      return [];
    }

    return parseCsvRecords(csv);
  } finally {
    clearTimeout(timeout);
  }
}
