import type { Product, ProductBrand, ProductCategory } from "@/lib/types/product";
import { StaticProductRepository } from "./static-product-repository";
import type { ProductRepository } from "./product-repository";
import {
  getGoogleSheetsRows,
  hasGoogleSheetsConfiguration,
  mapGoogleSheetRowToProduct,
} from "./google-sheets-client";

export class GoogleSheetsProductRepository implements ProductRepository {
  private readonly fallbackRepository = new StaticProductRepository();

  getProducts(): Product[] {
    if (!hasGoogleSheetsConfiguration()) {
      return this.fallbackRepository.getProducts();
    }

    try {
      const rows = getGoogleSheetsRows();
      const products = rows
        .map((row) => mapGoogleSheetRowToProduct(row))
        .filter((product): product is Product => Boolean(product));

      if (products.length > 0) {
        return products;
      }

      return this.fallbackRepository.getProducts();
    } catch (error) {
      console.warn("Google Sheets catalog failed; using static fallback.", error);
      return this.fallbackRepository.getProducts();
    }
  }

  getProductById(id: string): Product | undefined {
    return this.getProducts().find((product) => product.id === id);
  }

  getProductsByCategory(category: ProductCategory): Product[] {
    return this.getProducts().filter((product) => product.category === category);
  }

  getProductsByBrand(brand: ProductBrand): Product[] {
    return this.getProducts().filter((product) => product.brand === brand);
  }
}
