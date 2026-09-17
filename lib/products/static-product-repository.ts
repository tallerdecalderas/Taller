import { products as staticProducts } from "@/lib/data/products";
import type { Product, ProductBrand, ProductCategory } from "@/types/product";
import type { ProductRepository } from "./product-repository";

export class StaticProductRepository implements ProductRepository {
  getProducts(): Product[] {
    return [...staticProducts];
  }

  getProductById(id: string): Product | undefined {
    return staticProducts.find((product) => product.id === id);
  }

  getProductsByCategory(category: ProductCategory): Product[] {
    return staticProducts.filter((product) => product.category === category);
  }

  getProductsByBrand(brand: ProductBrand): Product[] {
    return staticProducts.filter((product) => product.brand === brand);
  }
}
