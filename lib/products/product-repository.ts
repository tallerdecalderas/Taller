import type { Product, ProductBrand, ProductCategory } from "@/types/product";

export interface ProductRepository {
  getProducts(): Product[];
  getProductById(id: string): Product | undefined;
  getProductsByCategory?(category: ProductCategory): Product[];
  getProductsByBrand?(brand: ProductBrand): Product[];
}
