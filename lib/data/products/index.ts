import type { Product } from "@/types/product";
import { calderas } from "./calderas";
import { calderas_de_outlets } from "./calderas_de_outlets";
import { repuestos } from "./repuestos";
import { radiadores } from "./radiadores";
import { termostatos } from "./termostatos";
import { accesorios } from "./accesorios";
import { ventilacion } from "./ventilacion";
import { repuestosGenericos } from "./repuestos_genericos";

export { calderas } from "./calderas";
export { calderas_de_outlets } from "./calderas_de_outlets";
export { repuestos } from "./repuestos";
export { radiadores } from "./radiadores";
export { termostatos } from "./termostatos";
export { accesorios } from "./accesorios";
export { ventilacion } from "./ventilacion";
export { repuestosGenericos } from "./repuestos_genericos";

export const products: Product[] = [
  ...calderas,
  ...calderas_de_outlets,
  ...repuestos,
  ...radiadores,
  ...termostatos,
  ...accesorios,
  ...ventilacion,
  ...repuestosGenericos,
];
