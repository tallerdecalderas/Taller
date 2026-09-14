import type { Product } from "@/lib/types/product";

export const accesorios: Product[] = [
    {
        id: "acc-1",
        sku: "ACC-TERM-ADAPT",
        name: "Adaptador para termostato",
        description: "Accesorio universal para adaptación y conexión de termostatos en sistemas de calefacción.",
        shortDescription: "Adaptador universal para termostato",
        brand: "GENÉRICO",
        category: "accesorios",
        price: 18000,
        available: true,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        tags: ["Accesorio", "Termostato", "Adaptador"],
        stock: 25,
    },
];
