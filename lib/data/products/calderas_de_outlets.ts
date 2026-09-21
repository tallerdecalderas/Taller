import type { Product } from "@/types/product";

type ProductInput = Omit<Product, "id" | "code">;

const rawCalderasDeOutlets: ProductInput[] = [
  {
    name: "Caldera BAXI Eco 4S de outlets",
    description:
      "Caldera revisada y lista para uso de la gama BAXI Eco 4S, con garantía de funcionamiento.",
    shortDescription: "Caldera BAXI de outlets",
    brand: "BAXI",
    category: "calderas_de_outlets",
    price: 1500000,
    available: true,
    image: "https://airfeel.cl/wp-content/uploads/2023/09/CALDERA-BAXI-ECO-4S-24-F.jpg",
    tags: ["Caldera", "Outlet", "BAXI"],
    stock: 2,
    featured: false,
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
  },
  {
    name: "Caldera Peisa Condensacion Summa 24 de outlets",
    description:
      "Perfecta para aquellos que buscan eficiencia y comodidad en su hogar. Con su sistema de calentamiento forzado, esta caldera garantiza un funcionamiento silencioso y un rendimiento óptimo en la producción de agua caliente y calefacción. Su diseño de pared y color blanco se adaptan a cualquier ambiente, brindando un aspecto moderno y elegante. Además, cuenta con una pantalla digital y termostato incorporado, lo que facilita su control y ajuste de temperatura. Con la Caldera Peisa Summa 24 Dual Condensación 24000 Cal, disfrutarás de un hogar cálido y confortable en todo momento.sada y lista para uso de la gama BAXI Eco 4S, con garantía de funcionamiento.",
    shortDescription: "Caldera Peisa Condensacion Summa 24 de outlets",
    brand: "PEISA",
    category: "calderas_de_outlets",
    price: 1750000,
    available: true,
    image: "https://www.climatecnica.com/caldera-mural-peisa-summa-condens.72.1365.html?srsltid=AU7gw4UnCs7iY_BecQEzXYF-lnU9ndtKIO2TTLSVClsK9Up8rwfu0kkF",
    tags: ["Caldera", "Outlet", "PEISA"],
    stock: 1,
    featured: false,
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "condensación",
    },
  },
];

export const calderas_de_outlets: Product[] = rawCalderasDeOutlets.map((p, i) => ({
  id: `${p.category}-${i}`,
  code: `${p.category}-${i}`,
  ...p
}));