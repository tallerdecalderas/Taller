import type { Product, ProductBrand, ProductCategory, ProductSpecs } from "@/types/product";

export type GoogleSheetRow = Record<string, string | undefined>;

export function hasGoogleSheetsConfiguration(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_ID &&
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY,
  );
}

export function getGoogleSheetsRowDefaults(): Record<string, string> {
  return {
    PRODUCT_DATA_SOURCE: process.env.PRODUCT_DATA_SOURCE ?? "static",
    GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID ?? "",
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "",
  };
}

function parseOptionalNumber(value?: string): number | undefined {
  if (!value || value.trim() === "") return undefined;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseCommaSeparatedValues(value?: string): string[] | undefined {
  if (!value || value.trim() === "") return undefined;

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function mapGoogleSheetRowToProduct(row: GoogleSheetRow): Product | null {
  const id = row.id?.trim();
  const code = row.code?.trim();
  const name = row.name?.trim();
  const description = row.description?.trim();
  const brand = row.brand as ProductBrand | undefined;
  const category = row.category as ProductCategory | undefined;

  if (!id || !code || !name || !description || !brand || !category) {
    return null;
  }

  const normalizedPrice = parseOptionalNumber(row.price);
  if (normalizedPrice === undefined) {
    return null;
  }

  const specs: ProductSpecs = {
    powerKw: parseOptionalNumber(row.powerKw),
    gasType: row.gasType as ProductSpecs["gasType"],
    service: row.service as ProductSpecs["service"],
    technology: row.technology as ProductSpecs["technology"],
    liters: parseOptionalNumber(row.liters),
    elementCount: parseOptionalNumber(row.elementCount),
    compatibleModels: parseCommaSeparatedValues(row.compatibleModels),
    voltage: row.voltage?.trim() || undefined,
    connection: row.connection?.trim() || undefined,
    pressureBar: parseOptionalNumber(row.pressureBar),
    heightMm: parseOptionalNumber(row.heightMm),
    widthMm: parseOptionalNumber(row.widthMm),
    depthMm: parseOptionalNumber(row.depthMm),
    diameterMm: row.diameterMm?.trim() || undefined,
    lengthMm: parseOptionalNumber(row.lengthMm),
    ventilationType: row.ventilationType as ProductSpecs["ventilationType"],
  };

  const product: Product = {
    id,
    code,
    name,
    description,
    shortDescription: row.shortDescription?.trim() || undefined,
    price: normalizedPrice,
    brand,
    category,
    image: row.image?.trim() || "/placeholder-product.png",
    images: row.images
      ?.split(";")
      .map((item) => item.trim())
      .filter(Boolean),
    tags: parseCommaSeparatedValues(row.tags),
    featured: row.featured?.trim().toLowerCase() === "true",
    specs,
  };

  return product;
}

export function getGoogleSheetsRows(): GoogleSheetRow[] {
  if (!hasGoogleSheetsConfiguration()) {
    return [];
  }

  // Este cliente queda preparado para Google Sheets API, pero la aplicación
  // sigue usando el repositorio estático por defecto. La autenticación real y
  // la extracción de filas se activarán cuando PRODUCT_DATA_SOURCE="google-sheets".
  return [];
}
