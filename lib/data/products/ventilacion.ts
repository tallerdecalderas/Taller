import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

export const rawVentilacion: ProductInput[] = [];

export const ventilacion: Product[] = rawVentilacion.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
