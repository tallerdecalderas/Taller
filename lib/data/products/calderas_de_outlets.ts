import type { Product } from "@/types/product";
import { createProducts } from "@/lib/createProducts";

type ProductInput = Omit<Product, "id">;

const rawCalderasDeOutlets: ProductInput[] = [
  {
    code: "REST-BAXI-ECO4S",
    name: "Caldera BAXI Eco 4S de outlets",
    description:
      "Caldera revisada y lista para uso de la gama BAXI Eco 4S, con garantía de funcionamiento.",
    shortDescription: "Caldera BAXI de outlets",
    brand: "BAXI",
    category: "calderas_de_outlets",
    price: 1750000,
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
];

export const calderas_de_outlets: Product[] = rawCalderasDeOutlets.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));