/**
 * Centralización de exports de datos
 */

export {
    products,
    calderas,
    calderas_restauradas,
    repuestos,
    radiadores,
    termostatos,
    accesorios,
    ventilacion,
} from "./products";

export {
    categories,
    getCategoryById,
    getCategoryName,
    isValidCategory,
} from "./categories";
export type { CategoryId } from "./categories";

export {
    brands,
    getBrandById,
    getBrandName,
    isValidBrand,
} from "./brands";
export type { BrandId } from "./brands";
