import type { Product, ProductInput } from "@/types/product";

const rawVentilacion: ProductInput[] = [ 
    // ─────────────── COAXIAL 60/100 ───────────────
  {
    name: "Tubo Coaxial Caldaia Ø60/100 Por Metro - Tramos de 1 a 5 metros",
    description:
      "Tubo coaxial Caldaia 60/100. Valor por metro. Disponible en tramos de 1, 2, 3, 4 y 5 metros.",
    shortDescription: "Tubo coaxial 60/100, precio por metro (tramos de 1 a 5 m).",
    price: 110000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/tubo-coaxial1-97830a94ce5ef8057c16884964219566-640-0.webp",

    code: "CLG-VENT-001",
   
    tags: ["caldaia", "coaxial", "60/100", "tubo", "por metro"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Terminal Anti Viento Horizontal Ø60/100 - Para Caldera Caldaia",
    description:
      "Terminal anti viento horizontal para tubo coaxial 60/100. Plástico. Color gris.",
    shortDescription: "Terminal anti viento horizontal 60/100, plástico gris.",
    price: 42000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/terminal-antiviento-horizontal-coaxial-3a8ec6d7b0e1fb420d17818128650163-640-0.webp",

    code: "CLG-VENT-002",
    tags: ["caldaia", "coaxial", "60/100", "terminal", "anti viento", "horizontal"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Terminal Anti Viento Vertical Ø60/100 - Para Caldera Caldaia",
    description:
      "Terminal anti viento vertical para tubo coaxial 60/100. Metálico. Color negro.",
    shortDescription: "Terminal anti viento vertical 60/100, metálico negro.",
    price: 220000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/terminal-antiviento-vertical-coaxial-95243242a65db1f98717818131237189-640-0.webp",

    code: "CLG-VENT-003",
    tags: ["caldaia", "coaxial", "60/100", "terminal", "anti viento", "vertical"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Kit Ventilación Salida Vertical Ø60/100 Con Brida - Para Caldera Caldaia",
    description:
      "Kit completo para conectar la caldera de forma vertical al tubo coaxial 60/100. Marca Caldaia.",
    shortDescription: "Kit de salida vertical con brida para tubo coaxial 60/100.",
    price: 145000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/kit-salida-vertical1-eba67a65997636f29416884959711862-640-0.webp",

    code: "CLG-VENT-004",
    tags: ["caldaia", "coaxial", "60/100", "kit", "salida vertical", "brida"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Kit Codo 90° Ø60/100 Con Brida - Para Caldera Caldaia",
    description:
      "Kit completo - Codo a 90° para conectar caldera con tubo coaxial 60/100. Incluye brida. Marca Caldaia.",
    shortDescription: "Kit codo a 90° con brida para tubo coaxial 60/100.",
    price: 145000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/kit-codo-90-brida-b76a4a47e8a2e2fd0517861171968989-640-0.webp",

    code: "CLG-VENT-005",
    tags: ["caldaia", "coaxial", "60/100", "kit", "codo 90", "brida"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Kit Codo 90° Ø60/100 Sin Brida - Para Caldera Caldaia",
    description:
      "Kit completo codo a 90° para unir conducto coaxial 60/100. Sin brida. Marca Caldaia.",
    shortDescription: "Kit codo a 90° sin brida para conducto coaxial 60/100.",
    price: 145000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/kit-codo-90-adc3b697110f2fd1b317861168853848-640-0.webp",

    code: "CLG-VENT-006",
    tags: ["caldaia", "coaxial", "60/100", "kit", "codo 90", "sin brida"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Kit Codo 45° Ø60/100 Sin Brida - Para Caldera Caldaia",
    description:
      "Kit completo codo a 45° para unir conducto coaxial 60/100. Sin brida. Marca Caldaia.",
    shortDescription: "Kit codo a 45° sin brida para conducto coaxial 60/100.",
    price: 145000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/kit-codo-45-085d827b053965fd8a17861173845660-640-0.webp",

    code: "CLG-VENT-007",
    tags: ["caldaia", "coaxial", "60/100", "kit", "codo 45", "sin brida"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Kit Humos Caldaia Coaxial 60/100 Tiro Balanceado Forzado - Codo a 90° + Tubo Coaxial",
    description:
      "Kit salida de humos Caldaia coaxial Ø60/100 para calderas de tiro balanceado forzado. Incluye: codo coaxial a 90° con brida completo; tubo coaxial Ø60/100 con terminal anti viento horizontal; 2 cubre muro.",
    shortDescription:
      "Kit de salida de humos coaxial 60/100 con codo 90°, tubo, terminal y 2 cubre muro.",
    price: 225000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/kit-salida-humos1-ba062ebba418a0aec016884957365513-640-0.webp",

    code: "CLG-VENT-008",
    tags: ["caldaia", "coaxial", "60/100", "kit", "humos", "tiro balanceado forzado"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
  {
    name: "Cubre muro para caño coaxial 100 mm 4\" (unidad)",
    description:
      "Cubre muro de goma para caño coaxial por 100 mm (4\"). Precio por 1 unidad. Color: gris o blanco, según disponibilidad.",
    shortDescription: "Cubre muro de goma para caño coaxial de 100 mm (por unidad).",
    price: 14000,
    brand: "GENÉRICO",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/cubre-muro-caldera-8b1e6c1aa10799752b17216622424061-640-0.webp",

    code: "CLG-VENT-009",
    tags: ["coaxial", "100 mm", "cubre muro", "goma"],
    specs: { ventilationType: "coaxial", diameterMm: "100" },
  },
  {
    name: "Abrazadera para caño coaxial 100 mm c/guarnición",
    description:
      "Abrazadera para caño de ventilación coaxial de 100 mm. Incluye guarnición (goma) y tornillos.",
    shortDescription: "Abrazadera para caño coaxial de 100 mm con guarnición y tornillos.",
    price: 32000,
    brand: "GENÉRICO",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/1kwma08u-a5407417131f838b0417429302962283-640-0.webp",

    code: "CLG-VENT-010",
    tags: ["coaxial", "100 mm", "abrazadera", "guarnición"],
    specs: { ventilationType: "coaxial", diameterMm: "100" },
  },
  {
    name: "Triángulo Centrador Para Tubo Coaxial Ø60/100 - Separador de tubo coaxial",
    description: "Triángulo de alambre centrador para tubo coaxial 60/100.",
    shortDescription: "Triángulo centrador / separador de alambre para tubo coaxial 60/100.",
    price: 7000,
    brand: "GENÉRICO",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/triangulo1-982bf087ffc458590b16884966141433-640-0.webp",

    code: "CLG-VENT-011",
   
    tags: ["coaxial", "60/100", "centrador", "separador"],
    specs: { ventilationType: "coaxial", diameterMm: "60/100" },
  },
 
  // ─────────────── ALUMINIO Ø60 / Ø80 ───────────────
  {
    name: "Cupla de aluminio Ø60 - Para unir tubo aluminio de 60mm",
    description: "Cupla para unir tubo de aluminio de 60 mm. Hembra-Hembra.",
    shortDescription: "Cupla hembra-hembra para tubo de aluminio de 60 mm.",
    price: 19000,
    brand: "GENÉRICO",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/cupla-60-2-cb06eda70d8adb903317818114079751-640-0.webp",

    code: "CLG-VENT-012",
    tags: ["aluminio", "60 mm", "cupla", "hembra-hembra"],
    specs: { diameterMm: "60", connection: "Hembra-Hembra" },
  },
  {
    name: "Cupla de aluminio Ø80 - Para unir tubo aluminio de 80 mm",
    description: "Cupla para unir tubo de aluminio de 80 mm. Hembra-Hembra.",
    shortDescription: "Cupla hembra-hembra para tubo de aluminio de 80 mm.",
    price: 35500,
    brand: "GENÉRICO",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/cupla-80-f41fe4e4f5e89d2aa917861169801121-640-0.webp",

    code: "CLG-VENT-013",
    tags: ["aluminio", "80 mm", "cupla", "hembra-hembra"],
    specs: { diameterMm: "80", connection: "Hembra-Hembra" },
  },
  {
    name: "Curva 90° Ø80 H-H Pintada Blanca - Para Caldera Caldaia",
    description:
      "Curva a 90° para tubo de aluminio de diámetro 80 mm. Hembra-Hembra. Pintada en blanco. Marca Caldaia.",
    shortDescription: "Curva a 90° hembra-hembra, pintada blanca, para tubo de aluminio de 80 mm.",
    price: 85000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/curva-90-80-b4d0b954587dd9796e17861175666754-640-0.webp",

    code: "CLG-VENT-014",
    tags: ["caldaia", "aluminio", "80 mm", "curva 90", "hembra-hembra", "blanca"],
    specs: { diameterMm: "80", connection: "Hembra-Hembra" },
  },
  {
    name: "Tubo Aluminio Caldaia Ø80 Por Metro - Tramos de 1 a 5 metros",
    description:
      "Tubo de aluminio Caldaia de 80 mm. Valor por metro. Disponible en tramos de 1, 2, 3, 4 y 5 metros.",
    shortDescription: "Tubo de aluminio de 80 mm, precio por metro (tramos de 1 a 5 m).",
    price: 75000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/tubo-aluminio1-6c4d430a046bd29ccc16884965258195-640-0.webp",

    code: "CLG-VENT-015",
    tags: ["caldaia", "aluminio", "80 mm", "tubo", "por metro"],
    specs: { diameterMm: "80" },
  },
  {
    name: "Terminal Anti Viento Horizontal Ø80 - Para Caldera Caldaia",
    description:
      "Terminal anti viento horizontal para tubo de aluminio de 80 mm. Metálico. Acero inoxidable.",
    shortDescription: "Terminal anti viento horizontal 80 mm, acero inoxidable.",
    price: 57000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/terminal-antiviento-horizontal-80-ceb17cb407eebebd0e17818127932976-640-0.webp",

    code: "CLG-VENT-016",
    tags: ["caldaia", "aluminio", "80 mm", "terminal", "anti viento", "horizontal", "acero inoxidable"],
    specs: { diameterMm: "80" },
  },
  {
    name: "Terminal Anti Viento Vertical Ø80 - Para Caldera Caldaia",
    description:
      "Terminal anti viento vertical para tubo de aluminio de 80 mm. Metálico. Color negro.",
    shortDescription: "Terminal anti viento vertical 80 mm, metálico negro.",
    price: 145000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/terminal-antiviento-vertical-80-caldaia-dfea622d4206c4f04d17818131661619-640-0.webp",

    code: "CLG-VENT-017",
    tags: ["caldaia", "aluminio", "80 mm", "terminal", "anti viento", "vertical"],
    specs: { diameterMm: "80" },
  },
  {
    name: "Kit Ventilación Salida Vertical Caldaia Ø80 Tubo Aluminio",
    description:
      "Kit completo para conectar la caldera de forma vertical al tubo de aluminio de diámetro 80 mm. Marca Caldaia.",
    shortDescription: "Kit de salida vertical para tubo de aluminio de 80 mm.",
    price: 165000,
    brand: "CALDAIA",
    category: "ventilacion",
    image:
      "https://acdn-us.mitiendanube.com/stores/003/365/635/products/vertical-801-edbac48b49e1e574e716884961152627-640-0.webp",

    code: "CLG-VENT-018",
    tags: ["caldaia", "aluminio", "80 mm", "kit", "salida vertical"],
    specs: { diameterMm: "80" },
  },
];

export const ventilacion: Product[] = rawVentilacion.map((product, index) => ({
  id: `${product.category}-${index}`,
  ...product,
}));
