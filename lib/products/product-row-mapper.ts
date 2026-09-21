/**
 * Mapea filas de una planilla (Google Sheets) al tipo `Product`.
 *
 * Es compartido por todos los orígenes basados en hoja:
 * - `google-sheets-client.ts` (API con service account)
 * - `public-sheet-client.ts` (hoja pública por CSV)
 *
 * Las claves de la fila deben venir normalizadas con `normalizeHeader()`.
 */

import { brands } from "@/lib/data/brands";
import { categories } from "@/lib/data/categories";
import { normalizeHeader } from "@/lib/products/csv";
import type {
  GasType,
  Product,
  ProductBrand,
  ProductCategory,
  ProductService,
  ProductSpecs,
  ProductTechnology,
} from "@/types/product";

export type ProductSheetRow = Record<string, string | undefined>;

const TRUE_VALUES = new Set(["true", "1", "si", "yes", "verdadero", "x", "s"]);
const FALSE_VALUES = new Set(["false", "0", "no", "falso", "n"]);
const VENTILATION_TYPES: ProductSpecs["ventilationType"][] = ["coaxial", "dividida"];

function buildAliasMap<T extends string>(entries: { id: T; name: string }[]): Map<string, T> {
  const map = new Map<string, T>();

  for (const entry of entries) {
    map.set(normalizeHeader(entry.id), entry.id);
    map.set(normalizeHeader(entry.name), entry.id);
  }

  return map;
}

const CATEGORY_ALIASES = buildAliasMap<ProductCategory>(
  categories.map((category) => ({ id: category.id, name: category.name })),
);
CATEGORY_ALIASES.set("repuestos", "repuestos");
CATEGORY_ALIASES.set("repuestosoriginales", "repuestos");

const BRAND_ALIASES = buildAliasMap<ProductBrand>(
  brands.map((brand) => ({ id: brand.id, name: brand.name })),
);
BRAND_ALIASES.set("generico", "GENÉRICO");
BRAND_ALIASES.set("genericos", "GENÉRICO");

function readField(row: ProductSheetRow, key: string): string | undefined {
  const value = row[key];

  if (value === undefined) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function normalizeNumberSeparators(value: string): string {
  const hasDot = value.includes(".");
  const hasComma = value.includes(",");

  if (hasDot && hasComma) {
    const lastDot = value.lastIndexOf(".");
    const lastComma = value.lastIndexOf(",");
    const decimalIndex = Math.max(lastDot, lastComma);
    const integerPart = value.slice(0, decimalIndex).replace(/[.,]/g, "");
    const decimalPart = value.slice(decimalIndex + 1).replace(/[.,]/g, "");
    return `${integerPart}.${decimalPart}`;
  }

  if (hasComma) {
    return /^\d{1,3}(,\d{3})+$/.test(value) ? value.replace(/,/g, "") : value.replace(",", ".");
  }

  if (hasDot) {
    return /^\d{1,3}(\.\d{3})+$/.test(value) ? value.replace(/\./g, "") : value;
  }

  return value;
}

export function parseNumberValue(raw?: string): number | undefined {
  if (!raw) {
    return undefined;
  }

  const cleaned = raw.replace(/[^\d.,-]/g, "");
  if (!cleaned) {
    return undefined;
  }

  const parsed = Number(normalizeNumberSeparators(cleaned));
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function parseOptionalBoolean(raw?: string): boolean | undefined {
  if (raw === undefined) {
    return undefined;
  }

  const value = normalizeHeader(raw);

  if (TRUE_VALUES.has(value)) {
    return true;
  }

  if (FALSE_VALUES.has(value)) {
    return false;
  }

  return undefined;
}

export function parseList(raw: string | undefined, separator: string): string[] | undefined {
  if (!raw) {
    return undefined;
  }

  const parts = raw
    .split(separator)
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length > 0 ? parts : undefined;
}

function resolveCategory(raw?: string): ProductCategory | undefined {
  return raw ? CATEGORY_ALIASES.get(normalizeHeader(raw)) : undefined;
}

function resolveBrand(raw?: string): ProductBrand | undefined {
  return raw ? BRAND_ALIASES.get(normalizeHeader(raw)) : undefined;
}

function resolveGasType(raw?: string): GasType | undefined {
  if (!raw) {
    return undefined;
  }

  const value = raw.trim().toUpperCase().replace(/\s/g, "");

  if (value === "GN") return "GN";
  if (value === "GL") return "GL";
  if (value === "GN/GL" || value === "GL/GN") return "GN/GL";

  return undefined;
}

function resolveService(raw?: string): ProductService | undefined {
  if (!raw) {
    return undefined;
  }

  const value = normalizeHeader(raw);

  if (value.includes("doble")) return "Doble servicio";
  if (value.includes("solo") || value.includes("calefaccion")) return "Solo calefacción";

  return undefined;
}

function resolveTechnology(raw?: string): ProductTechnology | undefined {
  if (!raw) {
    return undefined;
  }

  const value = normalizeHeader(raw);

  if (value.includes("condens")) return "condensación";
  if (value.includes("convencional")) return "convencional";

  return undefined;
}

function resolveVentilationType(raw?: string): ProductSpecs["ventilationType"] {
  if (!raw) {
    return undefined;
  }

  const value = normalizeHeader(raw);
  return VENTILATION_TYPES.find((type) => type !== undefined && value.includes(type));
}

function buildSpecs(row: ProductSheetRow): ProductSpecs | undefined {
  const specs: ProductSpecs = {
    powerKw: parseNumberValue(readField(row, "powerkw")),
    gasType: resolveGasType(readField(row, "gastype")),
    service: resolveService(readField(row, "service")),
    technology: resolveTechnology(readField(row, "technology")),
    liters: parseNumberValue(readField(row, "liters")),
    elementCount: parseNumberValue(readField(row, "elementcount")),
    compatibleModels: parseList(readField(row, "compatiblemodels"), ","),
    voltage: readField(row, "voltage"),
    connection: readField(row, "connection"),
    pressureBar: parseNumberValue(readField(row, "pressurebar")),
    heightMm: parseNumberValue(readField(row, "heightmm")),
    widthMm: parseNumberValue(readField(row, "widthmm")),
    depthMm: parseNumberValue(readField(row, "depthmm")),
    diameterMm: readField(row, "diametermm"),
    lengthMm: parseNumberValue(readField(row, "lengthmm")),
    ventilationType: resolveVentilationType(readField(row, "ventilationtype")),
  };

  const hasSpecs = Object.values(specs).some((value) => value !== undefined);
  return hasSpecs ? specs : undefined;
}

export function mapSheetRowToProduct(row: ProductSheetRow): Product | null {
  const id = readField(row, "id");
  const code = readField(row, "code") ?? readField(row, "sku");
  const name = readField(row, "name");
  const description = readField(row, "description");
  const price = parseNumberValue(readField(row, "price"));
  const brand = resolveBrand(readField(row, "brand"));
  const category = resolveCategory(readField(row, "category"));

  if (!id || !code || !name || !description || price === undefined || !brand || !category) {
    return null;
  }

  return {
    id,
    code,
    name,
    description,
    shortDescription: readField(row, "shortdescription"),
    price,
    brand,
    category,
    image: readField(row, "image") ?? "/placeholder-product.png",
    images: parseList(readField(row, "images"), ";"),
    available: parseOptionalBoolean(readField(row, "available")) ?? false,
    stock: parseNumberValue(readField(row, "stock")),
    tags: parseList(readField(row, "tags"), ","),
    featured: parseOptionalBoolean(readField(row, "featured")) ?? false,
    specs: buildSpecs(row),
  };
}
