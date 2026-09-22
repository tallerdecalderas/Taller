import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

export const rawRadiadores: ProductInput[] = [];

export const radiadores: Product[] = rawRadiadores.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
