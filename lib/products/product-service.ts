/**
 * Servicio de acceso a datos de productos.
 * Mantiene la API actual intacta y delega la fuente de datos en un repository.
 */

import type { Product, ProductBrand, ProductCategory, ProductFilters } from "@/lib/types/product";
import type { ProductRepository } from "./product-repository";
import { StaticProductRepository } from "./static-product-repository";
import { GoogleSheetsProductRepository } from "./google-sheets-repository";

function getEnvValue(key: string, fallback = ""): string {
  if (typeof process === "undefined" || !process.env) {
    return fallback;
  }

  return process.env[key] ?? fallback;
}

function resolveRepository(): ProductRepository {
  const source = (getEnvValue("PRODUCT_DATA_SOURCE", "static") || "static").trim().toLowerCase();

  if (source === "google-sheets") {
    return new GoogleSheetsProductRepository();
  }

  return new StaticProductRepository();
}

const repository = resolveRepository();

export function getProducts(): Product[] {
  return repository.getProducts();
}

export function getProductById(id: string): Product | undefined {
  return repository.getProductById(id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return (
    repository.getProductsByCategory?.(category) ??
    getProducts().filter((product) => product.category === category)
  );
}

export function getProductsByBrand(brand: ProductBrand): Product[] {
  return (
    repository.getProductsByBrand?.(brand) ??
    getProducts().filter((product) => product.brand === brand)
  );
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = getProducts().filter((product) => product.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getAllCategories(): ProductCategory[] {
  return Array.from(new Set(getProducts().map((product) => product.category)));
}

export function getAllBrands(): ProductBrand[] {
  return Array.from(new Set(getProducts().map((product) => product.brand)));
}

export function filterProducts(filters: ProductFilters): Product[] {
  return getProducts().filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }

    if (filters.technology && product.specs?.technology !== filters.technology) {
      return false;
    }

    if (filters.gasType && product.specs?.gasType !== filters.gasType) {
      return false;
    }

    if (filters.service && product.specs?.service !== filters.service) {
      return false;
    }

    if (filters.powerKw !== undefined && product.specs?.powerKw !== filters.powerKw) {
      return false;
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText = [
        product.name,
        product.description,
        product.shortDescription,
        product.brand,
        product.category,
        product.code,
        ...(product.tags ?? []),
        ...(product.specs?.compatibleModels ?? []),
      ]
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
}

export function searchProducts(query: string): Product[] {
  return filterProducts({ search: query });
}

export function getProductCount(): number {
  return getProducts().length;
}

export function getAvailableProducts(): Product[] {
  return getProducts().filter((product) => product.available);
}

export function getUnavailableProducts(): Product[] {
  return getProducts().filter((product) => !product.available);
}
