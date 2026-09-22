import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

export const rawAccesorios: ProductInput[] = [];

export const accesorios: Product[] = rawAccesorios.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
