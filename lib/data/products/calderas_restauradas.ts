import type { Product } from "@/lib/types/product";

export const calderas_restauradas: Product[] = [
    {
        id: "cr-1",
        code: "REST-BAXI-ECO4S",
        name: "Caldera BAXI Eco 4S restaurada",
        description: "Caldera revisada y restaurada de la gama BAXI Eco 4S, lista para uso con garantía de funcionamiento.",
        shortDescription: "Caldera BAXI restaurada",
        brand: "BAXI",
        category: "calderas_restauradas",
        price: 1750000,
        available: true,
        image: "https://airfeel.cl/wp-content/uploads/2023/09/CALDERA-BAXI-ECO-4S-24-F.jpg",
        tags: ["Caldera", "Restaurada", "BAXI"],
        stock: 2,
        featured: false,
        specs: {
            powerKw: 24,
            gasType: "GN",
            service: "Doble servicio",
            technology: "convencional",
        },
    },
];
