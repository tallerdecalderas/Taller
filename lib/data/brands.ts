/**
 * Marcas de productos disponibles
 * Este archivo centraliza todas las marcas del catálogo
 * Se usa para filtrado, validación de datos y opciones en UI
 */

export const brands = [
    {
        id: "BAXI",
        name: "BAXI",
    },
    {
        id: "PEISA",
        name: "PEISA",
    },
    {
        id: "GENÉRICO",
        name: "Genéricos",
    },
] as const;

export type BrandId = (typeof brands)[number]["id"];

/**
 * Obtener marca por ID
 */
export function getBrandById(id: string) {
    return brands.find((brand) => brand.id === id);
}

/**
 * Obtener nombre de marca
 */
export function getBrandName(id: string): string {
    return getBrandById(id)?.name ?? id;
}

/**
 * Validar si un ID de marca es válido
 */
export function isValidBrand(id: string): id is BrandId {
    return brands.some((brand) => brand.id === id);
}
