import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

const rawCalderas: ProductInput[] = [
  {
    code: "ARISTON-HSX-24-DUAL",
    name: "Caldera Ariston HS-X 24 Dual + Kit de Humo",
    description:
      "Caldera Ariston HS-X 24 Dual de doble servicio y tiro forzado, diseñada para calefacción y producción de agua caliente sanitaria. Cuenta con pantalla digital, funcionamiento silencioso y dos intercambiadores, incluyendo un intercambiador de placas de acero inoxidable para agua sanitaria. Su sistema de tiro forzado permite una instalación con kit de humo y ofrece un funcionamiento eficiente y estable. Es compatible con sistemas de termorregulación mediante sondas de temperatura y con energía solar térmica para agua caliente sanitaria.",
    shortDescription: "Caldera Ariston HS-X 24 Dual de tiro forzado con kit de humo",
    brand: "ARISTON",
    category: "calderas",
    price: 2190000,
    image: "https://www.climatecnica.com/",
    tags: ["Caldera", "Outlet", "ARISTON", "Tiro Forzado", "Doble Servicio"],
    featured: false,
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
  },
  {
    code: "BAXI-ECONOVA-24F",
    name: "Caldera BAXI Eco Nova 24F",
    description:
      "Caldera mural BAXI Eco Nova 24F de doble servicio. Diseñada para calefacción y producción de agua caliente sanitaria con tiro forzado y control electrónico.",
    shortDescription: "Caldera BAXI Eco Nova 24F doble servicio",
    brand: "BAXI",
    category: "calderas",
    price: 2080900,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_Rx2EdgvFJgvpit6Wnrz4pLeCEjZL/jlY-NEliqgMb_3lYgoH3Ae/public/calderas/baxi-eco-nova-24f-main.webp",
    tags: ["Eco Nova", "24 kW", "Doble servicio", "Tiro forzado"],
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "PEISA-PRIMA-TEC-24",
    name: "Caldera PEISA Prima Tec 24 DS F",
    description:
      "Caldera mural PEISA Prima Tec 24 DS F de doble servicio para calefacción y agua caliente sanitaria. Cuenta con pantalla digital, intercambiador de placas y cámara estanca.",
    shortDescription: "Caldera PEISA Prima Tec 24 doble servicio",
    brand: "PEISA",
    category: "calderas",
    price: 2540403,
    image: "https://abelson.com.ar/12895-medium_default/peisa-prima-tec-24-ds-f-gn-10001683.jpg",
    tags: ["Prima Tec", "24 kW", "Doble servicio", "Gas natural"],
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "PEISA-DIVA-TECNO-24",
    name: "Caldera PEISA Diva Tecno 24 DS F",
    description:
      "Caldera mural PEISA Diva Tecno 24 DS F de doble servicio para calefacción y agua caliente sanitaria. Equipada con intercambiador de placas y control electrónico.",
    shortDescription: "Caldera PEISA Diva Tecno 24",
    brand: "PEISA",
    category: "calderas",
    price: 1780000,
    image: "https://www.climatecnica.com/img.7195.fl.caldera-peisa-diva-tecno.jpg",
    tags: ["Diva Tecno", "24 kW", "Doble servicio", "Tiro forzado"],
    specs: {
      powerKw: 24,
      gasType: "GN",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "PEISA-SUMMA-24",
    name: "Caldera PEISA Summa Condens 24",
    description:
      "Caldera PEISA Summa Condens 24 de condensación para calefacción y agua caliente sanitaria. Cuenta con pantalla digital, intercambiador de placas y combustión electrónica.",
    shortDescription: "Caldera PEISA Summa Condens 24",
    brand: "PEISA",
    category: "calderas",
    price: 3448307,
    image:
      "https://abelson.com.ar/15499-home_default/peisa-summa-condensacion-24-kw-tf-gn-gl-10001493.jpg",
    tags: ["Summa Condens", "24 kW", "Condensación", "Doble servicio"],
    specs: {
      powerKw: 24,
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "condensación",
    },
  },
  {
    code: "PEISA-PRIMA-TEC 32", // placeholder, no es SKU oficial
    name: "Caldera Prima Tec 32 DS F",
    shortDescription: "Caldera mural a gas, doble servicio o solo calefacción",
    description:
      "Caldera mural a gas pensada para calefacción y agua caliente, disponible en versión doble servicio o solo calefacción para adaptarse a cualquier tipo de vivienda. Es la primera caldera del mercado argentino con eficiencia energética Clase A certificada por ENERGAS. Incorpora encendido electrónico con detección de llama por ionización, válvula de gas con modulación electrónica, bomba circuladora de 3 velocidades y vaso de expansión incorporados, y es compatible con el termostato Wi-Fi Zentraly mediante protocolo OpenTherm. Incluye 5 años de garantía.",
    price: 2700000, // TODO: precio no publicado, completar con lista del distribuidor
    brand: "PEISA",
    category: "calderas",
    image: "https://abelson.com.ar/12895-medium_default/peisa-prima-tec-24-ds-f-gn-10001683.jpg",
    tags: ["prima-tec","doble-servicio","32.000-kcal/h"],
    specs: {
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "convencional",
    },
    featured: true,
  },
  {
    code: "PEISA-SUMMA-CONDENS",
    name: "Caldera PEISA Summa Condens 33",
    shortDescription: "Caldera mural de condensación, doble servicio, hasta 108% de rendimiento",
    description:
      "Caldera mural con tecnología de condensación para calefacción y agua caliente sanitaria, con un rendimiento de hasta 108% y hasta un 20% de ahorro energético frente a una caldera convencional. Su amplia modulación 1:10 favorece la eficiencia y permite combinarla con energía solar térmica. Cuenta con aislación termo-acústica, intercambiador de placas para el agua sanitaria, cámara de combustión estanca y evacuación de humos forzada, además de ser compatible con sonda externa y termostato de ambiente.",
    price: 0, // TODO: precio no publicado, completar con lista del distribuidor
    brand: "PEISA",
    category: "calderas",
    image: "https://peisa.com.ar/files/productos//gSHtbEHItaRa3jCO7iby6QaSFYGuHRSmySSQiuwI.png",
    tags: [
      "hogareña",
      "mural",
      "condensación",
      "doble-servicio",
      "108%-eficiencia",
      "compatible-solar",
      "nuevo",
    ],
    specs: {
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "condensación",
      compatibleModels: ["24 Kcal/h", "28 Kcal/h", "33 Kcal/h"],
    },
    featured: true,
  },

  // ============================
  // CALDERAS CENTRALES (de potencia / de pie)
  // ============================
  {
    name: "Caldera XP 60, 80, 100 y 120",
    shortDescription: "Caldera de pie de media potencia, de 58.000 a 120.000 Kcal/h",
    description:
      "Caldera de pie de media potencia para sistemas centrales de calefacción y agua caliente, con capacidades que van de 58.000 a 120.000 Kcal/h según el modelo. Es la única de su categoría con cuerpo de fundición, lo que le da mayor durabilidad y caudal, y se entrega lista para instalar con el quemador incluido. Funciona con cualquier tipo de gas, trabaja a tiro natural, alcanza un rendimiento del 90%, cuenta con detector de anomalías de tiraje y es apta para instalarse en batería.",
    brand: "PEISA",
    category: "calderas",
    image: "https://peisa.nyc3.digitaloceanspaces.com/media/214/caldera-xp_galeria-14.png",
    images: [
      "https://peisa.nyc3.digitaloceanspaces.com/media/214/caldera-xp_galeria-14.png",
      "https://peisa.nyc3.digitaloceanspaces.com/media/215/Caldera-XP_prodbigxp.jpg",
    ],
    code: "PEISA-XP",
    tags: ["central", "de-pie", "media-potencia", "tiro-natural", "fundición", "en-batería"],
    specs: {
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "convencional",
      compatibleModels: [
        "XP60 (58.000 Kcal/h)",
        "XP80 (78.000 Kcal/h)",
        "XP100 (99.000 Kcal/h)",
        "XP120 (120.000 Kcal/h)",
      ],
    },
  },

  // ============================
  // OTRAS CALDERAS (destacada en home, no listada en el bloque "hogareñas" de /productos)
  // ============================
  {
    name: "Caldera Diva S Condensación",
    shortDescription: "Caldera mural de condensación compacta, 24 y 35 kW, hasta 108%",
    description:
      "Caldera mural de condensación doble servicio, disponible en 24 y 35 kW, con un rendimiento de hasta 108% y un consumo energético reducido gracias a trabajar con gases a menor temperatura, lo que también disminuye la emisión de gases contaminantes. Es hasta un 35% más compacta que otras calderas de tecnología similar y entrega entre 14 y 21 litros por minuto de agua caliente. Cuenta con intercambiador de calor radial de acero inoxidable y válvula de gas completamente electrónica con control retroactivo de la combustión.",
    price: 0, // TODO: precio no publicado, completar con lista del distribuidor
    brand: "PEISA",
    category: "calderas",
    image: "https://peisa.com.ar/files/productos//calderas-5-anioscaldera-diva-s.png",
    images: [
      "https://peisa.nyc3.digitaloceanspaces.com/media/48/divacondensaciongaleria02-5.jpg",
      "https://peisa.nyc3.digitaloceanspaces.com/media/27/divacondensaciongaleria01.jpg",
      "https://peisa.nyc3.digitaloceanspaces.com/media/28/divacondensaciongaleria03.jpg",
      "https://peisa.nyc3.digitaloceanspaces.com/media/26/prodbigdivas.jpg",
      "https://peisa.nyc3.digitaloceanspaces.com/media/63/caldera-diva-s.jpg",
      "https://peisa.nyc3.digitaloceanspaces.com/media/64/caldera-diva-s2.jpg",
    ],
    code: "PEISA-DIVA-S-CONDENSACION",
    tags: ["hogareña", "mural", "condensación", "compacta", "108%-eficiencia", "destacado"],
    specs: {
      gasType: "GN/GL",
      service: "Doble servicio",
      technology: "condensación",
      compatibleModels: ["24 KW GN-GL", "35 KW GN-GL"],
    },
    featured: true,
  },
];

export const calderas: Product[] = rawCalderas.map((p, i) => ({
  id: p.code === "ARISTON-HSX-24-DUAL" ? "calderas-ariston-hsx-24-dual" : `${p.category}-${i}`,
  ...p,
}));
