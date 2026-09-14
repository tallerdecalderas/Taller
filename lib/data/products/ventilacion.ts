import type { Product } from "@/lib/types/product";

export const ventilacion: Product[] = [
    {
        id: "vent-1",
        sku: "VENT-COAX-80",
        name: "Kit de ventilación coaxial 80 mm",
        description: "Kit de ventilación para calderas y sistemas de condensación con conducto coaxial.",
        shortDescription: "Kit coaxial para ventilación",
        brand: "GENÉRICO",
        category: "ventilacion",
        price: 210000,
        available: true,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        tags: ["Ventilación", "Coaxial", "Condensación"],
        stock: 12,
        specs: {
            ventilationType: "coaxial",
            diameterMm: "80",
        },
    },
];
