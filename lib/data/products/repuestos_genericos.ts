import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";
const rawRepuestosGenericos: ProductInput[] = [
  {
    code: "REP-VASO-EXP-8L",
    name: "Vaso de expansión 8 litros",
    description:
      "Vaso de expansión para circuitos de calefacción y calderas. Capacidad nominal de 8 litros. Repuesto utilizado en diferentes modelos y configuraciones.",
    shortDescription: "Vaso de expansión universal 8 litros",
    brand: "GENÉRICO",
    category: "repuestos_genericos",
    price: 95000,
    image:
      "https://pub-877ef76587e44bd1b01fb2b3b725282b.r2.dev/productos/299.93.0066/wm_removed_5472b779.jpg",
    tags: ["Vaso de expansión", "8 litros", "Calderas", "Calefacción"],
    specs: {
      liters: 8,
    },
  },
  {
    code: "REP-FLUJOSTATO-UNI",
    name: "Flujostato universal para caldera",
    description:
      "Flujostato de reemplazo para distintos modelos de calderas. Utilizado para detectar circulación de agua y habilitar la demanda de agua caliente sanitaria.",
    shortDescription: "Flujostato universal para varias calderas",
    brand: "GENÉRICO",
    category: "repuestos_genericos",
    price: 49000,
    image:
      "https://s.alicdn.com/%40sc04/kf/H1d629388ca764d4d9cf0d2298be494d0B/Ferroli-Beretta-Immergas-Gas-Boilers-Spare-Parts-Plastic-Water-Flow-Sensor-Switch-Pressure-Relief-Port-Replacement-for-Water.png",
    tags: ["Flujostato", "Universal", "ACS"],
    specs: {
      compatibleModels: ["BAXI Eco 4S", "BAXI Eco Nova", "PEISA Prima Tec"],
    },
  },
];

export const repuestos_genericos: Product[] = rawRepuestosGenericos.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
