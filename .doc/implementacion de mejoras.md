Quiero preparar la arquitectura del catálogo de productos para una futura integración con Google Sheets mediante Google Cloud / Google Sheets API.

IMPORTANTE:
Esta tarea NO debe romper ni reemplazar la implementación actual.

La aplicación actualmente funciona correctamente utilizando datos estáticos de productos en TypeScript.

Quiero que el proyecto siga funcionando EXACTAMENTE igual después de esta tarea.

NO eliminar los archivos de datos estáticos actuales si todavía son utilizados por la aplicación.

NO cambiar el comportamiento visual del frontend.

NO reemplazar todavía los datos estáticos por Google Sheets.

NO hacer que la aplicación dependa actualmente de Google Cloud para poder funcionar.

El objetivo es dejar TODA LA INFRAESTRUCTURA PREPARADA para que en el futuro pueda activar Google Sheets cambiando configuración/variables de entorno, sin tener que rehacer la arquitectura del catálogo.

==================================================

1. OBJETIVO ARQUITECTÓNICO
   ==================================================

Actualmente:

```text
Datos estáticos TypeScript
        ↓
Product Service
        ↓
Componentes
        ↓
UI
```

Quiero dejar preparado:

```text
                     ┌─────────────────────┐
                     │ Fuente de productos │
                     └──────────┬──────────┘
                                │
                 ┌──────────────┴──────────────┐
                 │                             │
                 ↓                             ↓
        Datos estáticos              Google Sheets API
        (actual)                     (futuro)
                 │                             │
                 └──────────────┬──────────────┘
                                ↓
                       Product Service
                                ↓
                               UI
```

La UI NO debe saber si los datos vienen de TypeScript o Google Sheets.

==================================================
2. MANTENER DATOS ESTÁTICOS
===========================

NO borrar los archivos actuales de:

src/data/products/

si actualmente contienen productos funcionales.

Mantenerlos como fuente actual de datos.

La aplicación debe seguir funcionando sin Google Cloud configurado.

Los archivos pueden continuar siendo:

```text
src/data/products/
├── calderas.ts
├── repuestos.ts
├── radiadores.ts
├── termostatos.ts
├── accesorios.ts
└── ventilacion.ts
```

No eliminar productos.

No modificar innecesariamente los datos actuales.

==================================================
3. TIPOS
========

Mantener la implementación actual de:

Product
ProductSpecs
ProductFilters
ProductBrand
ProductCategory
GasType
ProductService
ProductTechnology

No duplicar estos tipos.

La integración futura con Google Sheets deberá convertir sus filas al tipo:

```ts
Product
```

Por lo tanto:

Google Sheets Row
↓
Product

Debe existir una capa de transformación/normalización.

==================================================
4. CREAR CAPA DE DATOS
======================

Dentro de:

src/lib/products/

crear una arquitectura preparada para múltiples fuentes.

Por ejemplo:

```text
src/lib/products/
├── product-service.ts
├── product-repository.ts
├── static-product-repository.ts
├── google-sheets-repository.ts
└── google-sheets-client.ts
```

Adaptar los nombres si la arquitectura existente sugiere una mejor nomenclatura.

==================================================
5. PRODUCT REPOSITORY
=====================

Crear una interfaz que defina cómo se obtienen productos.

Por ejemplo:

```ts
export interface ProductRepository {
  getProducts(): Promise<Product[]>;

  getProductById(
    id: string
  ): Promise<Product | undefined>;
}
```

Si es necesario, agregar métodos para búsquedas/filtros.

IMPORTANTE:

La UI y `product-service.ts` deben depender de la abstracción `ProductRepository`, no directamente de Google Sheets.

==================================================
6. STATIC PRODUCT REPOSITORY
============================

Crear:

```text
static-product-repository.ts
```

Este repository debe utilizar los datos actuales:

```text
data/products/calderas.ts
data/products/repuestos.ts
data/products/radiadores.ts
data/products/termostatos.ts
data/products/accesorios.ts
data/products/ventilacion.ts
```

Debe implementar:

```ts
ProductRepository
```

Ejemplo conceptual:

```ts
export class StaticProductRepository
  implements ProductRepository
{
  async getProducts(): Promise<Product[]> {
    return products;
  }

  async getProductById(
    id: string
  ): Promise<Product | undefined> {
    return products.find(
      (product) => product.id === id
    );
  }
}
```

==================================================
7. GOOGLE SHEETS REPOSITORY
===========================

Crear:

```text
google-sheets-repository.ts
```

Implementar también:

```ts
ProductRepository
```

IMPORTANTE:

Este repository debe quedar preparado pero NO debe utilizarse por defecto todavía.

Si Google Cloud no está configurado, la aplicación debe continuar utilizando:

```text
StaticProductRepository
```

No generar errores de runtime simplemente porque Google Sheets todavía no está configurado.

==================================================
8. GOOGLE SHEETS CLIENT
=======================

Crear una abstracción separada:

```text
google-sheets-client.ts
```

Responsabilidad:

* autenticarse con Google
* conectarse a Google Sheets API
* obtener filas
* devolver datos crudos

NO debe contener lógica específica de UI.

NO debe convertir directamente a componentes.

Debe quedar separada la responsabilidad:

Google Sheets Client
↓
raw rows
↓
Google Sheets Repository
↓
Product[]

````

==================================================
9. GOOGLE CLOUD
==================================================

Preparar la integración utilizando Google Sheets API.

No hardcodear credenciales.

Utilizar variables de entorno.

Preparar las siguientes variables:

```env
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
````

También se puede agregar:

```env
PRODUCT_DATA_SOURCE=static
```

Valores permitidos:

```text
static
google-sheets
```

IMPORTANTE:

El valor por defecto debe ser:

```env
PRODUCT_DATA_SOURCE=static
```

De esa manera la aplicación continúa funcionando como actualmente.

==================================================
10. VARIABLES DE ENTORNO
========================

Actualizar `.env.example`.

Agregar:

```env
# Product data source
PRODUCT_DATA_SOURCE=static

# Google Sheets
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

NO agregar valores reales.

NO guardar credenciales reales dentro del repositorio.

NO utilizar variables con prefijo:

```text
NEXT_PUBLIC_
```

para credenciales de Google.

==================================================
11. SELECCIÓN DE REPOSITORY
===========================

Crear una función/factory centralizada.

Por ejemplo:

```text
product-repository.ts
```

o dentro de `product-service.ts`.

Conceptualmente:

```ts
function createProductRepository(): ProductRepository {
  const source =
    process.env.PRODUCT_DATA_SOURCE ?? "static";

  if (source === "google-sheets") {
    return new GoogleSheetsProductRepository();
  }

  return new StaticProductRepository();
}
```

IMPORTANTE:

Actualmente debe utilizar:

```text
static
```

No activar Google Sheets automáticamente.

==================================================
12. PRODUCT SERVICE
===================

Mantener:

```text
src/lib/products/product-service.ts
```

pero hacer que utilice el repository.

La UI seguirá llamando:

```ts
getProducts()

getProductById()

filterProducts()
```

El servicio no debería importar directamente:

```text
calderas.ts
repuestos.ts
radiadores.ts
```

ni importar directamente Google APIs.

Su dependencia debe ser:

```text
ProductRepository
```

==================================================
13. FILTROS
===========

Mantener los filtros actuales.

Los filtros deben trabajar sobre:

```ts
Product[]
```

independientemente de si los datos vienen de:

```text
StaticProductRepository
```

o:

```text
GoogleSheetsProductRepository
```

No duplicar la lógica de filtrado.

==================================================
14. GOOGLE SHEETS DATA MODEL
============================

Preparar la estructura esperada de Google Sheets.

La hoja principal debe ser:

```text
Productos
```

La primera fila contiene los headers.

Usar estos campos:

```text
id
sku
name
description
shortDescription
brand
category
price
stock
available
image
images
tags
featured
powerKw
gasType
service
technology
liters
elementCount
compatibleModels
voltage
connection
pressureBar
heightMm
widthMm
depthMm
diameterMm
lengthMm
ventilationType
```

No es necesario crear el Google Sheet ahora.

Solamente preparar el código para soportar este formato.

==================================================
15. CONVERSIÓN DE GOOGLE SHEETS
===============================

Crear una función específica para convertir una fila de Google Sheets:

```ts
mapGoogleSheetRowToProduct(...)
```

Ejemplo conceptual:

```ts
function mapGoogleSheetRowToProduct(
  row: Record<string, string>
): Product {
  return {
    id: row.id,
    sku: row.sku,
    name: row.name,
    description: row.description,
    shortDescription: row.shortDescription || undefined,

    brand: row.brand as ProductBrand,
    category: row.category as ProductCategory,

    price: Number(row.price),
    stock: Number(row.stock),

    available: row.available === "true",

    image: row.image,

    tags: parseCommaSeparatedValues(row.tags),

    specs: {
      powerKw: parseOptionalNumber(row.powerKw),
      liters: parseOptionalNumber(row.liters),
      elementCount: parseOptionalNumber(
        row.elementCount
      ),
      compatibleModels:
        parseCommaSeparatedValues(
          row.compatibleModels
        ),
    },

    featured: row.featured === "true",
  };
}
```

NO hacer conversiones directamente dentro de los componentes.

==================================================
16. VALIDACIÓN
==============

La información proveniente de Google Sheets debe validarse antes de transformarse a `Product`.

No confiar ciegamente en los datos de la hoja.

Si una fila no cumple los requisitos mínimos:

* registrar el error
* ignorar la fila inválida
* evitar que toda la aplicación falle

Si el proyecto ya utiliza alguna librería de validación, reutilizarla.

NO agregar una librería nueva sin necesidad.

==================================================
17. CACHE
=========

Preparar la integración para utilizar cache/revalidación de Next.js cuando Google Sheets esté activo.

NO hacer requests a Google Sheets desde componentes cliente.

La consulta a Google Sheets debe ocurrir server-side.

Preparar el repository para permitir posteriormente una estrategia como:

```ts
fetch(..., {
  next: {
    revalidate: 300,
  },
});
```

No es necesario activar una política agresiva de cache ahora si la fuente actual sigue siendo estática.

==================================================
18. SEGURIDAD
=============

Google Sheets debe ser utilizado exclusivamente desde código server-side.

Nunca:

```ts
"use client";
```

con acceso a:

```text
GOOGLE_PRIVATE_KEY
GOOGLE_SERVICE_ACCOUNT_EMAIL
```

No exponer credenciales al navegador.

No utilizar:

```text
NEXT_PUBLIC_GOOGLE_PRIVATE_KEY
```

ni similares.

==================================================
19. MANEJO DE ERROR Y FALLBACK
==============================

Cuando en el futuro:

```env
PRODUCT_DATA_SOURCE=google-sheets
```

y Google Sheets falle, implementar una estrategia segura.

Preferentemente:

1. intentar Google Sheets;
2. registrar el error;
3. utilizar los datos estáticos como fallback si están disponibles.

NO hacer que una caída temporal de Google Cloud deje toda la página sin productos.

El fallback debe quedar claramente documentado.

==================================================
20. NO ACTIVAR GOOGLE SHEETS AHORA
==================================

MUY IMPORTANTE:

Al terminar esta implementación, la aplicación debe continuar utilizando:

```env
PRODUCT_DATA_SOURCE=static
```

No modificar automáticamente `.env.local` con credenciales.

No intentar autenticarse contra Google durante el desarrollo si no existen credenciales.

No agregar una dependencia obligatoria de Google que provoque errores simplemente por no tener configurada la cuenta.

La aplicación debe funcionar inmediatamente después de la refactorización.

==================================================
21. GOOGLE CLOUD SETUP DOCUMENTATION
====================================

Crear un archivo:

```text
docs/google-sheets-catalog.md
```

Explicar paso a paso cómo activar la integración posteriormente:

1. Crear proyecto en Google Cloud.
2. Habilitar Google Sheets API.
3. Crear Service Account.
4. Crear las credenciales.
5. Compartir el Google Sheet con el email de la Service Account.
6. Obtener el Spreadsheet ID.
7. Configurar:

```env
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

8. Cambiar:

```env
PRODUCT_DATA_SOURCE=google-sheets
```

9. Reiniciar/redeployar la aplicación.

La documentación debe dejar claro que las credenciales son server-side.

==================================================
22. DOCUMENTACIÓN DEL FORMATO DE LA HOJA
========================================

En:

```text
docs/google-sheets-catalog.md
```

documentar también el formato esperado de la hoja.

Ejemplo:

```text
id
sku
name
description
shortDescription
brand
category
price
stock
available
image
images
tags
featured
powerKw
gasType
service
technology
liters
elementCount
compatibleModels
voltage
connection
pressureBar
heightMm
widthMm
depthMm
diameterMm
lengthMm
ventilationType
```

Explicar ejemplos de valores:

```text
brand:
BAXI
PEISA
GENÉRICO

category:
calderas
calderas_restauradas
repuestos_genericos
termostatos
radiadores
ventilacion
accesorios
```

==================================================
23. COMPATIBILIDAD CON EL CÓDIGO ACTUAL
=======================================

Buscar todos los componentes que actualmente consumen productos.

Verificar que continúen funcionando.

No reescribir la UI.

No cambiar diseño.

No cambiar rutas.

No cambiar comportamiento del carrito.

No cambiar la lógica de WhatsApp.

No romper filtros.

No eliminar funcionalidades existentes.

==================================================
24. ARCHIVOS ESPERADOS
======================

La estructura final debería ser aproximadamente:

src/
├── lib/
│   ├── types/
│   │   └── product.ts
│   │
│   └── products/
│       ├── product-service.ts
│       ├── product-repository.ts
│       ├── static-product-repository.ts
│       ├── google-sheets-repository.ts
│       └── google-sheets-client.ts
│
├── data/
│   ├── products/
│   │   ├── index.ts
│   │   ├── calderas.ts
│   │   ├── repuestos.ts
│   │   ├── radiadores.ts
│   │   ├── termostatos.ts
│   │   ├── accesorios.ts
│   │   └── ventilacion.ts
│   │
│   ├── categories.ts
│   └── brands.ts
│
docs/
└── google-sheets-catalog.md

.env.example

````

Adaptar esta estructura si el proyecto ya tiene una organización equivalente.

NO duplicar archivos solamente para seguir literalmente este esquema.

==================================================
25. DEPENDENCIAS
==================================================

Antes de instalar cualquier dependencia, comprobar si el proyecto ya tiene una librería adecuada.

Para Google Sheets utilizar una solución mantenida y compatible con el runtime actual de Next.js.

La dependencia de Google Sheets debe utilizarse exclusivamente server-side.

No instalar librerías innecesarias.

==================================================
26. CHECK FINAL
==================================================

Antes de terminar:

1. Ejecutar typecheck.
2. Verificar lint si el proyecto lo utiliza.
3. Verificar que el frontend inicia correctamente.
4. Verificar que el catálogo actual continúa funcionando.
5. Verificar que los filtros funcionan.
6. Verificar que la búsqueda funciona.
7. Verificar que el carrito funciona.
8. Verificar que los datos siguen viniendo de los archivos estáticos.
9. Verificar que Google Sheets NO se está llamando mientras:
   PRODUCT_DATA_SOURCE=static
10. Verificar que no existen credenciales hardcodeadas.
11. Verificar que no hay secretos expuestos al cliente.
12. Verificar que no existen imports duplicados de Product.
13. Verificar que los datos estáticos siguen siendo recuperables.
14. Verificar que GoogleSheetsProductRepository puede compilar aunque no existan credenciales reales.
15. Verificar que la futura activación pueda hacerse solamente mediante variables de entorno.

==================================================
CRITERIO PRINCIPAL
==================================================

La prioridad es:

FUNCIONALIDAD ACTUAL > REFACTORIZACIÓN > FUTURA INTEGRACIÓN

No sacrificar una funcionalidad que actualmente funciona para preparar Google Sheets.

Al finalizar, mostrar:

- archivos creados
- archivos modificados
- archivos que no fueron tocados
- arquitectura implementada
- cómo se activa Google Sheets en el futuro
- cómo funciona actualmente el fallback estático
- dependencias agregadas, si las hubiera
- posibles problemas o decisiones técnicas

Ese enfoque es el que usaría. **No estás conectando Google Sheets todavía; estás dejando preparado el "enchufe"**.

Y hay una ventaja importante: cuando llegue el momento de usar Sheets, solamente tendrías que configurar:

```env
PRODUCT_DATA_SOURCE=google-sheets
GOOGLE_SHEETS_ID=...
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
````

y el resto de la aplicación debería seguir consumiendo:

```ts
getProducts()
getProductById()
filterProducts()
```

sin enterarse de dónde vienen los datos.
