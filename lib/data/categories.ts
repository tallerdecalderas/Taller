/**
 * Categorías de productos disponibles
 * Este archivo centraliza todas las categorías del catálogo
 * Se usa para filtrado, validación de datos y opciones en UI
 */

export const categories = [
    {
        id: "calderas",
        name: "Calderas",
        icon: "boiler",
    },
    {
        id: "calderas_restauradas",
        name: "Calderas Restauradas",
        icon: "recycle",
    },
    {
        id: "repuestos_genericos",
        name: "Repuestos Genéricos",
        icon: "parts",
    },
    {
        id: "termostatos",
        name: "Termostatos",
        icon: "thermostat",
    },
    {
        id: "radiadores",
        name: "Radiadores",
        icon: "radiator",
    },
    {
        id: "ventilacion",
        name: "Ventilación",
        icon: "ventilation",
    },
    {
        id: "accesorios",
        name: "Accesorios",
        icon: "accessories",
    },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

/**
 * Obtener categoría por ID
 */
export function getCategoryById(id: string) {
    return categories.find((cat) => cat.id === id);
}

/**
 * Obtener nombre de categoría
 */
export function getCategoryName(id: string): string {
    return getCategoryById(id)?.name ?? id;
}

/**
 * Validar si un ID de categoría es válido
 */
export function isValidCategory(id: string): id is CategoryId {
    return categories.some((cat) => cat.id === id);
}
