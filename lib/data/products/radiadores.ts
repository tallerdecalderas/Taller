import type { Product } from "@/lib/types/product";

export const radiadores: Product[] = [
    {
        id: "r-1",
        sku: "RAD-PEISA-BR500",
        name: "Radiador PEISA BR 500",
        description: "Radiador de aluminio para calefacción con buen rendimiento térmico y diseño compacto.",
        shortDescription: "Radiador PEISA BR 500",
        brand: "PEISA",
        category: "radiadores",
        price: 430000,
        available: true,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
        tags: ["Radiador", "Aluminio", "Calefacción"],
        stock: 9,
        featured: false,
    },
];
