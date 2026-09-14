import type { Product } from "@/lib/types/product";

export const calderas_restauradas: Product[] = [
    {
        id: "cr-1",
        sku: "REST-BAXI-ECO4S",
        name: "Caldera BAXI Eco 4S restaurada",
        description: "Caldera revisada y restaurada de la gama BAXI Eco 4S, lista para uso con garantía de funcionamiento.",
        shortDescription: "Caldera BAXI restaurada",
        brand: "BAXI",
        category: "calderas_restauradas",
        price: 1750000,
        available: true,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
        tags: ["Caldera", "Restaurada", "BAXI"],
        stock: 2,
        featured: false,
        specs: {
            powerKw: 24,
            gasType: "GN",
            service: "doble",
            technology: "convencional",
        },
    },
];
