import type { Product } from "@/types/product";
import { products } from "@/lib/data/products";

export type ProductPrice = {
  id: string;
  code?: string;
  name: string;
  price: number;
};

// Solo se cargan aquí los precios que deben sobrescribir al precio del catálogo.
const priceOverrides: Record<string, number> = {
  "BAXI-ECONOVA-24F": 1500000,
};

export const productPrices: ProductPrice[] = products.map((product) => ({
  id: product.id,
  code: product.code,
  name: product.name,
  price:
    priceOverrides[product.id] ??
    (product.code ? priceOverrides[product.code] : undefined) ??
    product.price,
}));

export function applyProductPrices(products: Product[]): Product[] {
  return products.map((product) => ({
    ...product,
    price:
      productPrices.find(
        (productPrice) => productPrice.id === product.id || productPrice.code === product.code,
      )?.price ??
      priceOverrides[product.id] ??
      (product.code ? priceOverrides[product.code] : undefined) ??
      product.price,
  }));
}
