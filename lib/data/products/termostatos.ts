import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

const rawTermostatos: ProductInput[] = [
  {
    name: "Termostato PEISA Digital",
    description:
      "Termostato digital PEISA para control de calefacción residencial y comercial. Permite configurar la temperatura ambiente y ajustar diferentes parámetros de funcionamiento.",
    shortDescription: "Termostato digital PEISA para calefacción",
    price: 85000,
    category: "termostatos",
    brand: "PEISA",
    image: "https://peisa.nyc3.digitaloceanspaces.com/media/53/termostato-digital-peisa.jpg",
    code: "PEISA-TERM-DIGITAL",
    tags: ["PEISA", "Termostato", "Digital", "Calefacción"],
    featured: false,
  },
  {
    name: "Termostato PEISA Zentraly Wi-Fi",
    description:
      "Termostato PEISA Zentraly con conectividad Wi-Fi y Bluetooth. Permite monitorear y modificar en tiempo real el funcionamiento de la caldera mediante la aplicación Zentraly.",
    shortDescription: "Termostato PEISA Wi-Fi con control desde app",
    price: 185000,
    category: "termostatos",
    brand: "PEISA",
    image:
      "https://peisa.nyc3.digitaloceanspaces.com/media/208/fichas-de-productos_termostato-wifi-zentraly_Mesa-de-trabajo-1-copia-13.jpg",
    code: "PEISA-ZENTRALY-WIFI",
    tags: ["PEISA", "Zentraly", "Wi-Fi", "Bluetooth", "OpenTherm", "Calefacción inteligente"],
    featured: true,
  },
  {
    name: "Termostato PEISA Zentraly Wi-Fi de Mesa",
    description:
      "Termostato inalámbrico Wi-Fi de mesa PEISA Zentraly para monitoreo y control remoto de la caldera. Compatible con comunicación OpenTherm y funcionamiento ON-OFF.",
    shortDescription: "Termostato PEISA Zentraly inalámbrico Wi-Fi",
    price: 195000,
    category: "termostatos",
    brand: "PEISA",
    image:
      "https://peisa.nyc3.digitaloceanspaces.com/media/338/zentraly-de-mesa_555x652-con-cable.jpg",
    code: "PEISA-ZENTRALY-MESA",
    tags: ["PEISA", "Zentraly", "Wi-Fi", "Inalámbrico", "OpenTherm"],
    featured: true,
  },
];

export const termostatos: Product[] = rawTermostatos.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
