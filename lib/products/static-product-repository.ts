import { products as staticProducts } from "@/lib/data/products";
import type { Product, ProductBrand, ProductCategory } from "@/types/product";
import { applyProductPrices } from "@/utils/productPrices";
import type { ProductRepository } from "./product-repository";

export class StaticProductRepository implements ProductRepository {
  getProducts(): Product[] {
    return applyProductPrices(staticProducts);
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
