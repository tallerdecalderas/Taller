import type { Product } from "@/types/product";
import { StaticProductRepository } from "./static-product-repository";
import { fetchPublicSheetRows, isPublicSheetConfigured } from "./public-sheet-client";
import { mapSheetRowToProduct } from "./product-row-mapper";

export class PublicSheetProductRepository {
  private readonly fallbackRepository = new StaticProductRepository();
  private productsPromise?: Promise<Product[]>;

  async getProducts(): Promise<Product[]> {
    this.productsPromise ??= this.loadProducts();
    return this.productsPromise;
  }

  private async loadProducts(): Promise<Product[]> {
    if (!isPublicSheetConfigured()) {
      return this.fallbackRepository.getProducts();
    }

    try {
      const rows = await fetchPublicSheetRows();
      const products: Product[] = [];
      const productIds = new Set<string>();

      rows.forEach((row, index) => {
        const product = mapSheetRowToProduct(row);

        if (!product) {
          console.warn(`Google Sheets: se ignoró la fila ${index + 2} por datos inválidos.`);
          return;
        }

        if (productIds.has(product.id)) {
          console.warn(`Google Sheets: se ignoró el ID duplicado "${product.id}" en la fila ${index + 2}.`);
          return;
        }

        productIds.add(product.id);
        products.push(product);
      });

      return products.length > 0 ? products : this.fallbackRepository.getProducts();
    } catch (error) {
      console.warn("Google Sheets público falló; se usa el catálogo estático.", error);
      return this.fallbackRepository.getProducts();
    }
  }
}
