# Catálogo de productos

El catálogo puede venir de tres orígenes, controlados por `PRODUCT_DATA_SOURCE`:

| Valor           | Origen                           | Credenciales    | Cuándo se lee         |
| --------------- | -------------------------------- | --------------- | --------------------- |
| `static`        | Archivos locales del proyecto    | No              | Siempre               |
| `public-sheet`  | Hoja de Google **pública** (CSV) | No              | En build (producción) |
| `google-sheets` | Google Sheets **API**            | Service account | — (no implementado)   |

Si el origen elegido no está configurado, falla o no devuelve filas válidas, la app **cae automáticamente al catálogo estático** para nunca romperse.

---

## Opción 1 — Hoja pública sin API (recomendada)

No usa la API de Google ni credenciales. Sólo requiere que la hoja esté pública.

### Configuración

```bash
PRODUCT_DATA_SOURCE=public-sheet
PUBLIC_SHEET_ID=<id de la planilla o URL completa>
```

Variables opcionales:

| Variable               | Descripción                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `PUBLIC_SHEET_NAME`    | Nombre de la pestaña a leer (ej. `Productos`).                      |
| `PUBLIC_SHEET_GID`     | `gid` de la pestaña. Si se define, tiene prioridad sobre el nombre. |
| `PUBLIC_SHEET_CSV_URL` | URL CSV completa. Ignora todas las anteriores.                      |

El ID es lo que aparece entre `/d/` y `/edit` en la URL de la planilla. También se acepta la URL completa:

```
https://docs.google.com/spreadsheets/d/1lZVBhk2XAXsZFa9x-DQ7ryLLXA4bjs7_6ZePpiX6mIs/edit
                                       └────────────────── PUBLIC_SHEET_ID ──────────────────┘
```

### Requisitos de la hoja

- Compartida como **"Cualquiera con el enlace: Lector"** (o publicada en la web).
- La **primera pestaña** contiene los datos (o usá `PUBLIC_SHEET_NAME` / `PUBLIC_SHEET_GID`).

### Cómo se lee

- El `fetch` se hace **en el servidor**, no en el navegador, para evitar problemas de CORS.
- En producción se lee **una sola vez, en build**: el catálogo queda incluido en el HTML.
  Para actualizar los datos hay que **volver a compilar / redeployar**.
- En desarrollo se relee en cada request, así que los cambios se ven al recargar.

### Endpoints usados

- `https://docs.google.com/spreadsheets/d/{ID}/export?format=csv`
- `https://docs.google.com/spreadsheets/d/{ID}/gviz/tq?tqx=out:csv&sheet={NOMBRE}`

---

## Opción 2 — Google Sheets API (service account)

```bash
PRODUCT_DATA_SOURCE=google-sheets
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

> Esta lectura todavía **no está implementada**; el cliente queda preparado y el repositorio cae al catálogo estático.

---

## Formato esperado de la hoja

La fila 1 son los **encabezados** y cada fila siguiente es un producto. Pegá exactamente esta cabecera:

```
id,code,name,description,shortDescription,price,brand,category,image,images,available,stock,tags,featured,powerKw,gasType,service,technology,liters,elementCount,compatibleModels,voltage,connection,pressureBar,heightMm,widthMm,depthMm,diameterMm,lengthMm,ventilationType
```

| Columna            | Tipo    | Ejemplo                               | Obligatoria  |
| ------------------ | ------- | ------------------------------------- | ------------ |
| `id`               | string  | `1`                                   | Sí           |
| `code`             | string  | `BAXI-ECO4S-24F`                      | Sí (o `sku`) |
| `name`             | string  | `Caldera BAXI Eco 4S 24F`             | Sí           |
| `description`      | string  | `Caldera mural a gas...`              | Sí           |
| `shortDescription` | string  | `Caldera BAXI mural 24 kW`            | No           |
| `price`            | number  | `2220800`                             | Sí           |
| `brand`            | enum    | `BAXI` / `PEISA` / `GENÉRICO`         | Sí           |
| `category`         | enum    | `calderas`                            | Sí           |
| `image`            | string  | `https://.../foto.jpg`                | No           |
| `images`           | lista   | `https://...a.jpg;https://...b.jpg`   | No           |
| `available`        | boolean | `true`                                | No           |
| `stock`            | number  | `12`                                  | No           |
| `tags`             | lista   | `clima,gas,caldera`                   | No           |
| `featured`         | boolean | `true`                                | No           |
| `powerKw`          | number  | `24`                                  | No           |
| `gasType`          | enum    | `GN` / `GL` / `GN/GL`                 | No           |
| `service`          | enum    | `Solo calefacción` / `Doble servicio` | No           |
| `technology`       | enum    | `convencional` / `condensación`       | No           |
| `liters`           | number  | `35`                                  | No           |
| `elementCount`     | number  | `4`                                   | No           |
| `compatibleModels` | lista   | `BAXI Eco 4S,BAXI Eco 5`              | No           |
| `voltage`          | string  | `220V`                                | No           |
| `connection`       | string  | `gas`                                 | No           |
| `pressureBar`      | number  | `2`                                   | No           |
| `heightMm`         | number  | `700`                                 | No           |
| `widthMm`          | number  | `400`                                 | No           |
| `depthMm`          | number  | `350`                                 | No           |
| `diameterMm`       | string  | `180`                                 | No           |
| `lengthMm`         | number  | `600`                                 | No           |
| `ventilationType`  | enum    | `coaxial` / `dividida`                | No           |

### Reglas de interpretación

- **Encabezados**: se comparan sin importar mayúsculas, acentos, espacios ni `_`/`-`. Las columnas desconocidas se ignoran.
- **Listas**:
  - `images`: separadas por `;`
  - `tags` y `compatibleModels`: separadas por `,`
- **Booleanos** (`available`, `featured`): `true/false`, `si/no`, `1/0`.
- **Números**: se aceptan separadores de miles (`2.220.800` o `2,220,800`) y símbolos como `$`.
- **Categorías válidas**: `calderas`, `calderas_restauradas`, `repuestos_genericos`, `repuestos`, `termostatos`, `radiadores`, `ventilacion`, `accesorios`.
- **Marcas válidas**: `BAXI`, `PEISA`, `GENÉRICO` (también se acepta `Genéricos`).
- **Filas inválidas**: si falta `id`, `code`, `name`, `description`, `price`, una marca o categoría válida, la fila se **ignora** y se registra una advertencia con su número de fila.
- **Ids duplicados**: se conserva la primera aparición.

---

## Comportamiento de seguridad

- La app no se rompe si la hoja no está configurada, no es pública o está vacía.
- Ante cualquier error de lectura, se usa el catálogo estático.
- La configuración vive en variables de entorno del servidor; la URL de la hoja nunca se envía al navegador.

---

## Archivos relevantes

| Archivo                                   | Rol                                               |
| ----------------------------------------- | ------------------------------------------------- |
| `lib/products/csv.ts`                     | Parser CSV propio + normalización de encabezados. |
| `lib/products/product-row-mapper.ts`      | Fila → `Product` (validación y parseo de tipos).  |
| `lib/products/public-sheet-client.ts`     | Arma la URL pública y hace el fetch.              |
| `lib/products/public-sheet-repository.ts` | Orquesta lectura + fallback estático.             |
| `lib/products/product-filters.ts`         | Filtros puros (servidor y cliente).               |
| `lib/products/product-service.ts`         | API async del catálogo.                           |

</content>
