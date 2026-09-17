Quiero que reorganices la arquitectura de datos del catálogo de productos de mi proyecto Next.js + TypeScript.

IMPORTANTE:

- Antes de modificar archivos, inspeccioná la estructura actual del proyecto y los archivos relacionados con productos.
- No reemplaces ni rompas funcionalidad existente.
- No cambies componentes de UI salvo que sea estrictamente necesario para adaptar imports.
- No agregues librerías nuevas.
- No uses `any`.
- Mantené TypeScript estricto.
- Aprovechá los tipos y servicios que ya existen en el proyecto.
- El objetivo es solamente reorganizar y mejorar la arquitectura de los datos del catálogo.
- Actualmente los productos son datos estáticos.
- En el futuro estos datos podrán venir desde Prisma/PostgreSQL.
- Los componentes del frontend NO deben depender directamente de cómo están almacenados los productos.

==================================================
OBJETIVO
========

Pasar de una estructura donde todos los productos están en un único archivo:

src/data/products.ts

a una estructura separada por categoría:

src/
├── types/
│ └── product.ts
│
├── data/
│ ├── products/
│ │ ├── index.ts
│ │ ├── calderas.ts
│ │ ├── repuestos.ts
│ │ ├── radiadores.ts
│ │ ├── termostatos.ts
│ │ ├── accesorios.ts
│ │ └── ventilacion.ts
│ │
│ ├── categories.ts
│ ├── brands.ts
│ └── index.ts
│
├── lib/
│ └── products/
│ └── product-service.ts
│
└── components/
└── products/

==================================================

1. TYPES
   ==================================================

Usar el archivo existente:

src/lib/types/product.ts

o, si el proyecto ya tiene centralizados los tipos en:

src/types/product.ts

NO crear otro archivo duplicado si ya existe uno equivalente.

Antes de crear un nuevo archivo, determinar cuál es la ubicación actual correcta y mantener una única fuente de verdad.

El tipo `Product` debe soportar:

- id
- name
- description
- shortDescription
- price
- brand
- category
- image
- images
- available
- sku
- tags
- stock
- specs
- featured

Definir tipos estrictos para:

```ts
export type ProductCategory =
  | "calderas"
  | "calderas_restauradas"
  | "repuestos_genericos"
  | "termostatos"
  | "radiadores"
  | "ventilacion"
  | "accesorios";
```

Definir:

```ts
export type ProductBrand = "BAXI" | "PEISA" | "GENÉRICO";
```

Definir:

```ts
export type GasType = "GN" | "GL" | "GN/GL";
```

Definir:

```ts
export type ProductService = "simple" | "doble";
```

Definir:

```ts
export type ProductTechnology = "convencional" | "condensación";
```

Definir `ProductSpecs`:

```ts
export interface ProductSpecs {
  powerKw?: number;

  gasType?: GasType;

  service?: ProductService;

  technology?: ProductTechnology;

  liters?: number;

  elementCount?: number;

  compatibleModels?: string[];

  voltage?: string;

  connection?: string;

  pressureBar?: number;

  heightMm?: number;

  widthMm?: number;

  depthMm?: number;

  diameterMm?: string;

  lengthMm?: number;

  ventilationType?: "coaxial" | "dividida";
}
```

El `Product` debe quedar conceptualmente así:

```ts
export interface Product {
  id: string;
  name: string;

  description: string;
  shortDescription?: string;

  price: number;

  brand: ProductBrand;
  category: ProductCategory;

  image: string;
  images?: string[];

  available: boolean;

  sku: string;

  tags?: string[];

  stock?: number;

  specs?: ProductSpecs;

  featured?: boolean;
}
```

================================================== 2. PRODUCT FILTERS
==================

Definir o adaptar `ProductFilters`.

Debe permitir:

```ts
export interface ProductFilters {
  search?: string;

  brand?: ProductBrand;

  category?: ProductCategory;

  technology?: ProductTechnology;

  gasType?: GasType;

  service?: ProductService;

  powerKw?: number;

  minPrice?: number;

  maxPrice?: number;

  available?: boolean;
}
```

No usar:

```ts
category?: string;
brand?: string;
```

cuando pueda utilizarse el tipo correspondiente.

================================================== 3. CATEGORÍAS
=============

Revisar el archivo existente:

src/data/categories.ts

Corregir los IDs para que sean consistentes y estables.

NO usar:

```ts
id: "calderas Restauradas";
```

Usar:

```ts
id: "calderas_restauradas";
```

La lista debe incluir:

```ts
export const categories = [
  {
    id: "calderas",
    name: "Calderas",
  },
  {
    id: "calderas_restauradas",
    name: "Calderas Restauradas",
  },
  {
    id: "repuestos_genericos",
    name: "Repuestos Genéricos",
  },
  {
    id: "termostatos",
    name: "Termostatos",
  },
  {
    id: "radiadores",
    name: "Radiadores",
  },
  {
    id: "ventilacion",
    name: "Ventilación",
  },
  {
    id: "accesorios",
    name: "Accesorios",
  },
] as const;
```

IMPORTANTE:

No dejar `intercambiadores` como categoría principal si conceptualmente corresponde a repuestos.

Los intercambiadores pueden tener:

```ts
category: "repuestos_genericos";
```

y posteriormente utilizar:

```ts
tags: ["Intercambiador", ...]
```

o implementar `subcategory` solamente si realmente se necesita.

Mantener las funciones existentes:

- getCategoryById
- getCategoryName
- isValidCategory

y adaptarlas si es necesario.

================================================== 4. MARCAS
=========

Mantener:

src/data/brands.ts

La estructura debe seguir usando:

```ts
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
```

Mantener:

- BrandId
- getBrandById
- getBrandName
- isValidBrand

No duplicar estos tipos en otros archivos.

================================================== 5. SEPARAR LOS PRODUCTOS
========================

Eliminar la dependencia conceptual del antiguo:

src/data/products.ts

y separar los datos por categoría.

Crear:

src/data/products/calderas.ts
src/data/products/repuestos.ts
src/data/products/radiadores.ts
src/data/products/termostatos.ts
src/data/products/accesorios.ts
src/data/products/ventilacion.ts

Cada archivo debe contener únicamente productos de esa categoría.

Ejemplo:

```ts
import type { Product } from "@/lib/types/product";

export const calderas: Product[] = [
  {
    ...
  },
];
```

Usar el alias real del proyecto si la ubicación de los tipos es diferente.

================================================== 6. REASIGNAR LOS PRODUCTOS EXISTENTES
=====================================

Mover TODOS los productos actuales al archivo correspondiente.

Ejemplo:

Calderas:

- BAXI Eco 4S 24F
- BAXI Eco Nova 24F
- BAXI Luna 3 Comfort 240 FI
- BAXI Duo Tec Compact 24
- PEISA Prima Tec 24 DS F
- PEISA Diva Tecno 24 DS F
- PEISA Summa Condens 24
- PEISA Diva Duo 32
- etc.

Repuestos:

- vaso de expansión
- flujostatos
- sondas
- presostatos
- electrodos
- válvulas
- bombas
- intercambiadores
- etc.

Termostatos:

- PEISA Digital
- PEISA Inalámbrico
- PEISA Digital Programable
- PEISA Touch
- PEISA Zentraly Wi-Fi
- PEISA Zentraly Wi-Fi Mesa
- BAXI Connect
- etc.

Radiadores:

- PEISA BR 500
- PEISA Tropical
- BAXI Dubal
- BAXI Astral
- BAXI Kiral
- etc.

Ventilación:

- kits coaxiales
- extensiones
- codos
- terminales
- ventilación para condensación
- etc.

Accesorios:

- cualquier producto que corresponda conceptualmente a esta categoría.

NO perder ningún producto durante la migración.

================================================== 7. PRODUCTS INDEX
=================

Crear:

src/data/products/index.ts

Debe exportar las categorías:

```ts
export { calderas } from "./calderas";
export { repuestos } from "./repuestos";
export { radiadores } from "./radiadores";
export { termostatos } from "./termostatos";
export { accesorios } from "./accesorios";
export { ventilacion } from "./ventilacion";
```

================================================== 8. DATA INDEX
=============

Mantener un único punto de entrada:

src/data/index.ts

Debe centralizar los exports necesarios.

Ejemplo:

```ts
export * from "./products";

export { categories, getCategoryById, getCategoryName, isValidCategory } from "./categories";

export type { CategoryId } from "./categories";

export { brands, getBrandById, getBrandName, isValidBrand } from "./brands";

export type { BrandId } from "./brands";
```

================================================== 9. PRODUCT SERVICE
==================

Mantener:

src/lib/products/product-service.ts

Este archivo es la única capa que combina y consulta productos.

Importar las categorías separadas:

```ts
import { calderas } from "@/data/products/calderas";
import { repuestos } from "@/data/products/repuestos";
import { radiadores } from "@/data/products/radiadores";
import { termostatos } from "@/data/products/termostatos";
import { accesorios } from "@/data/products/accesorios";
import { ventilacion } from "@/data/products/ventilacion";
```

Crear internamente:

```ts
const products: Product[] = [
  ...calderas,
  ...repuestos,
  ...radiadores,
  ...termostatos,
  ...accesorios,
  ...ventilacion,
];
```

Los componentes NO deben importar este array directamente.

================================================== 10. API DEL PRODUCT SERVICE
===========================

Mantener estas funciones:

```ts
getProducts();

getProductById(id);

getProductsByCategory(category);

getProductsByBrand(brand);

filterProducts(filters);
```

Si alguna no existe actualmente, crearla.

El frontend debe consumir estas funciones y no acceder directamente a los archivos de datos.

================================================== 11. FILTRADO
============

`filterProducts()` debe permitir combinar filtros.

Ejemplo:

```ts
filterProducts({
  brand: "BAXI",
  category: "calderas",
  technology: "condensación",
  powerKw: 24,
});
```

Debe devolver solamente los productos que cumplan todos los criterios.

También permitir:

```ts
filterProducts({
  category: "radiadores",
});
```

```ts
filterProducts({
  category: "repuestos_genericos",
  brand: "PEISA",
});
```

```ts
filterProducts({
  category: "ventilacion",
  technology: "condensación",
});
```

No incorporar todavía librerías externas de búsqueda o filtros.

Para el catálogo estático utilizar `.filter()` y lógica TypeScript.

================================================== 12. SEARCH
==========

El campo `search` debe buscar dentro de:

- name
- description
- shortDescription
- brand
- category
- tags
- compatibleModels

Normalizar el texto para búsqueda case-insensitive.

Si tiene sentido, eliminar diferencias básicas de mayúsculas/minúsculas.

================================================== 13. IMÁGENES
============

No cambiar arbitrariamente las imágenes existentes.

Mantener soporte para:

```ts
image: string;
images?: string[];
```

Preferir rutas locales:

```ts
/products/calderas/baxi-eco-4s-24f.webp
```

en lugar de depender de URLs externas.

NO descargar automáticamente imágenes desde sitios externos durante esta tarea.

Solamente reorganizar las rutas existentes si ya son locales.

================================================== 14. COMPONENTES
===============

Buscar todos los componentes que actualmente hagan algo como:

```ts
import { products } from "@/data/products";
```

o cualquier import equivalente.

Reemplazarlo por:

```ts
import { getProducts, getProductById, filterProducts } from "@/lib/products/product-service";
```

No cambiar la interfaz visual.

No reescribir componentes completos si solamente es necesario modificar imports o llamadas de datos.

================================================== 15. COMPATIBILIDAD
==================

Si existe código que todavía necesita importar:

```ts
@/data/products
```

NO romperlo inmediatamente.

Crear compatibilidad temporal únicamente si es necesaria.

Por ejemplo, podría existir un archivo:

src/data/products.ts

que reexporte desde la nueva estructura.

Pero antes de mantenerlo, verificar si realmente existen imports dependientes.

Si no existen dependencias, eliminar el archivo antiguo para evitar duplicidad.

Debe existir UNA sola fuente de datos.

================================================== 16. ARQUITECTURA FUTURA
=======================

La arquitectura debe quedar preparada para cambiar:

```text
data estática
```

por:

```text
Prisma / PostgreSQL
```

en el futuro.

La UI debería depender únicamente de:

```text
product-service.ts
```

y de los tipos de producto.

No importar Prisma dentro de componentes.

No importar Prisma dentro de `data/products/*.ts`.

Los archivos:

```text
data/products/*.ts
```

son solamente mocks/datos estáticos.

================================================== 17. RESULTADO ESPERADO
======================

La arquitectura final debe ser:

src/
├── lib/
│ ├── types/
│ │ └── product.ts
│ │
│ └── products/
│ └── product-service.ts
│
├── data/
│ ├── products/
│ │ ├── index.ts
│ │ ├── calderas.ts
│ │ ├── repuestos.ts
│ │ ├── radiadores.ts
│ │ ├── termostatos.ts
│ │ ├── accesorios.ts
│ │ └── ventilacion.ts
│ │
│ ├── categories.ts
│ ├── brands.ts
│ └── index.ts
│
└── components/
└── products/

Adaptar las rutas si la estructura actual del proyecto difiere.

================================================== 18. VALIDACIÓN FINAL
====================

Al terminar:

1. Ejecutar TypeScript/check de tipos del proyecto.
2. Verificar que no existan imports rotos.
3. Verificar que ningún producto haya desaparecido.
4. Verificar que ningún producto esté duplicado.
5. Verificar que todos los productos tengan una categoría válida.
6. Verificar que todas las marcas sean válidas.
7. Verificar que los filtros funcionen.
8. Verificar que la búsqueda funcione.
9. Verificar que las páginas actuales de productos sigan funcionando.
10. Verificar que no existan tipos duplicados.

IMPORTANTE:
No hagas una refactorización general del proyecto.
Limitate a la arquitectura de datos de productos y a los cambios estrictamente necesarios para adaptar los consumidores existentes.

Al finalizar, mostrar un resumen de:

- archivos creados
- archivos modificados
- archivos eliminados
- cambios realizados
- posibles problemas encontrados
