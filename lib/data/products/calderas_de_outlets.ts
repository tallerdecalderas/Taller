import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

const rawCalderasDeOutlets: ProductInput[] = [
    {
    code: "PEISA-DIVA-DUO-32",
    name: "Caldera PEISA Diva Duo 32",
    description:
      "Caldera mural PEISA Diva Duo de 32.000 kcal/h para calefacción y agua caliente sanitaria. Equipo compacto con tiro forzado.",
    shortDescription: "Caldera PEISA Diva Duo 32.000 kcal/h",
    brand: "PEISA",
    category: "calderas_de_outlets",
    price: 4186019,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_737116-MLA42900359115_072020-P.webp",
    tags: ["Diva Duo", "32.000 kcal/h", "Doble servicio", "Tiro forzado"],
    specs: {
      powerKw: 32,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
  },
  {
    code: "BAXI-DUOTEC-24",
    name: "Caldera BAXI Duo Tec Compact 24",
    description:
      "Caldera BAXI Duo Tec Compact 24 de doble servicio para calefacción y agua caliente sanitaria. Equipo mural compacto de alto rendimiento.",
    shortDescription: "Caldera BAXI Duo Tec Compact 24",
    brand: "BAXI",
    category: "calderas_de_outlets",
    price: 3775614,
    image: "https://www.rapigascalefaccion.com.ar/calderas/baxi-eco-4s-24f-main.jpg",
    tags: ["Duo Tec", "24 kW", "Doble servicio", "Mural"],
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "condensación",
    },
  },
  {
    code: "BAXI-LUNA3-240FI",
    name: "Caldera BAXI Luna 3 Comfort 240 FI",
    description:
      "Caldera mural BAXI Luna 3 Comfort 240 FI de doble servicio. Equipo compacto con control electrónico, modulación de llama y producción de agua caliente sanitaria.",
    shortDescription: "Caldera BAXI Luna 3 Comfort 240 FI",
    brand: "BAXI",
    category: "calderas_de_outlets",
    price: 2570000,
    image:
      "https://ru-baxi.com/image/cache/catalog/bax3/0/ge-cache-catalog-produkts-kotel-nastennyy-gazovyy-ba-i-luna-3-comfort-240-fi-cse45624358-3-1500-1500-400x400.webp",
    tags: ["Luna 3", "24 kW", "Doble servicio", "Confort"],
    specs: {
      powerKw: 24,
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "BAXI-ECO4S-24F",
    name: "Caldera BAXI Eco 4S 24F",
    description:
      "Caldera mural a gas BAXI Eco 4S 24F de doble servicio para calefacción y agua caliente sanitaria. Sistema de tiro forzado, control electrónico y formato compacto.",
    shortDescription: "Caldera BAXI mural 24 kW de doble servicio",
    brand: "BAXI",
    category: "calderas_de_outlets",
    price: 2220800,
    image: "https://www.rapigascalefaccion.com.ar/calderas/baxi-eco-4s-24f-main.jpg",
    tags: ["Caldera", "24 kW", "Doble servicio", "Tiro forzado", "Calefacción"],
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "calderas_de_outlets",
    name: "Caldera Peisa Condensacion Summa 33",
    description:
      "Perfecta para aquellos que buscan eficiencia y comodidad en su hogar. Con su sistema de calentamiento forzado, esta caldera garantiza un funcionamiento silencioso y un rendimiento óptimo en la producción de agua caliente y calefacción. Su diseño de pared y color blanco se adaptan a cualquier ambiente, brindando un aspecto moderno y elegante. Además, cuenta con una pantalla digital y termostato incorporado, lo que facilita su control y ajuste de temperatura. Con la Caldera Peisa Summa 24 Dual Condensación 24000 Cal, disfrutarás de un hogar cálido y confortable en todo momento.sada y lista para uso de la gama BAXI Eco 4S, con garantía de funcionamiento.",
    shortDescription: "Caldera Peisa Condensacion Summa 33 de outlets",
    brand: "PEISA",
    category: "calderas_de_outlets",
    price: 1750000,
    image:
      "https://www.climatecnica.com/caldera-mural-peisa-summa-condens.72.1365.html?srsltid=AU7gw4UnCs7iY_BecQEzXYF-lnU9ndtKIO2TTLSVClsK9Up8rwfu0kkF",
    tags: ["Caldera", "Outlet", "PEISA"],
    featured: false,
    specs: {
      powerKw: 33,
      gasType: "GN",
      service: "Doble servicio",
      technology: "condensación",
    },
  },
];

export const calderas_de_outlets: Product[] = rawCalderasDeOutlets.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
