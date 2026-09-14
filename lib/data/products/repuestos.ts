import type { Product } from "@/lib/types/product";

export const repuestos: Product[] = [
        {
        id: "11",
        code: "BAXI-FLUJO-ECO4S",
        name: "Flujostato BAXI Eco 4S / Eco 5",
        description:
            "Flujostato de repuesto para calderas BAXI Eco 4S y modelos compatibles. Componente utilizado para detectar circulación de agua sanitaria.",
        shortDescription: "Flujostato BAXI Eco 4S / Eco 5",
        brand: "BAXI",
        category: "repuestos",
        price: 158400,
        stock: 5,
        available: true,
        image:
            "https://s.alicdn.com/%40sc04/kf/H1d629388ca764d4d9cf0d2298be494d0B/Ferroli-Beretta-Immergas-Gas-Boilers-Spare-Parts-Plastic-Water-Flow-Sensor-Switch-Pressure-Relief-Port-Replacement-for-Water.png",
        tags: ["Flujostato", "Eco 4S", "Eco 5", "Repuesto original"],
        specs: {
            compatibleModels: ["BAXI Eco 4S", "BAXI Eco 5"],
        },
    },
];
