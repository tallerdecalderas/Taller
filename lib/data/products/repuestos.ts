import type { Product } from "@/lib/types/product";

export const repuestos: Product[] = [
    {
        id: "9",
        sku: "REP-VASO-EXP-8L",
        name: "Vaso de expansión 8 litros",
        description:
            "Vaso de expansión para circuitos de calefacción y calderas. Capacidad nominal de 8 litros. Repuesto utilizado en diferentes modelos y configuraciones.",
        shortDescription: "Vaso de expansión universal 8 litros",
        brand: "GENÉRICO",
        category: "repuestos_genericos",
        price: 95000,
        stock: 8,
        available: true,
        image:
            "https://pub-877ef76587e44bd1b01fb2b3b725282b.r2.dev/productos/299.93.0066/wm_removed_5472b779.jpg",
        tags: ["Vaso de expansión", "8 litros", "Calderas", "Calefacción"],
        specs: {
            liters: 8,
        },
    },
    {
        id: "10",
        sku: "REP-FLUJOSTATO-UNI",
        name: "Flujostato universal para caldera",
        description:
            "Flujostato de reemplazo para distintos modelos de calderas. Utilizado para detectar circulación de agua y habilitar la demanda de agua caliente sanitaria.",
        shortDescription: "Flujostato universal para varias calderas",
        brand: "GENÉRICO",
        category: "repuestos_genericos",
        price: 49000,
        stock: 15,
        available: true,
        image:
            "https://s.alicdn.com/%40sc04/kf/H1d629388ca764d4d9cf0d2298be494d0B/Ferroli-Beretta-Immergas-Gas-Boilers-Spare-Parts-Plastic-Water-Flow-Sensor-Switch-Pressure-Relief-Port-Replacement-for-Water.png",
        tags: ["Flujostato", "Universal", "ACS"],
        specs: {
            compatibleModels: ["BAXI Eco 4S", "BAXI Eco Nova", "PEISA Prima Tec"],
        },
    },
    {
        id: "11",
        sku: "BAXI-FLUJO-ECO4S",
        name: "Flujostato BAXI Eco 4S / Eco 5",
        description:
            "Flujostato de repuesto para calderas BAXI Eco 4S y modelos compatibles. Componente utilizado para detectar circulación de agua sanitaria.",
        shortDescription: "Flujostato BAXI Eco 4S / Eco 5",
        brand: "BAXI",
        category: "repuestos_genericos",
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
    {
        id: "12",
        sku: "REP-BOMBA-15-60",
        name: "Bomba circuladora 15-60",
        description:
            "Bomba circuladora de 3 velocidades para sistemas de calefacción y como repuesto para distintas calderas murales.",
        shortDescription: "Bomba circuladora 15-60 para caldera",
        brand: "GENÉRICO",
        category: "repuestos_genericos",
        price: 210000,
        stock: 4,
        available: true,
        image:
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
        tags: ["Bomba", "Circuladora", "15-60", "Calefacción"],
        specs: {
            compatibleModels: ["BAXI Eco 4S", "BAXI Duo Tec", "PEISA Prima Tec", "PEISA Diva"],
        },
    },
    {
        id: "13",
        sku: "REP-VALV-SEG-3BAR",
        name: "Válvula de seguridad 3 bar",
        description:
            "Válvula de seguridad para circuitos de calefacción. Diseñada para aliviar la presión cuando el sistema supera el valor nominal de 3 bar.",
        shortDescription: "Válvula de seguridad 3 bar para caldera",
        brand: "GENÉRICO",
        category: "repuestos_genericos",
        price: 35000,
        stock: 10,
        available: true,
        image:
            "https://cdn.manomano.com/images/images_products/36570406/P/135315951_1.jpg",
        tags: ["Válvula", "Seguridad", "3 bar", "Caldera"],
    },
    {
        id: "14",
        sku: "REP-PURGADOR-12",
        name: "Purgador automático de aire 1/2\"",
        description:
            "Purgador automático de aire de 1/2 pulgadas para circuitos cerrados de calefacción. Permite eliminar automáticamente el aire acumulado en la instalación.",
        shortDescription: "Purgador automático 1/2 para calefacción",
        brand: "GENÉRICO",
        category: "repuestos_genericos",
        price: 17800,
        stock: 20,
        available: true,
        image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
        tags: ["Purgador", "1/2", "Calefacción", "Aire"],
    },
];
