import type { Product, ProductBrand, ProductCategory } from "@/types/product";

export interface ProductRepository {
  getProducts(): Product[];
  getProductById(id: string): Product | undefined;
  getProductsByCategory?(category: ProductCategory): Product[];
  getProductsByBrand?(brand: ProductBrand): Product[];
}

/**
 * Repositorio asíncrono, usado por orígenes que requieren I/O (hojas de cálculo).
 * Siempre expone el catálogo completo; los filtros se resuelven en el servicio.
 */
export interface AsyncProductRepository {
  getProducts(): Promise<Product[]>;
}
