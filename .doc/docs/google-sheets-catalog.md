# Catálogo con Google Sheets

Este proyecto usa por defecto un catálogo estático para que la app funcione sin depender de servicios externos.

## Fuente de datos

La fuente se define con la variable:

```bash
PRODUCT_DATA_SOURCE=static
```

Valores permitidos:

- `static`: usa los productos locales del proyecto
- `google-sheets`: intenta leer el catálogo desde Google Sheets

## Variables necesarias para Google Sheets

```bash
PRODUCT_DATA_SOURCE=google-sheets
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

> La clave privada debe incluir los saltos de línea reales del JSON del servicio.

## Formato esperado de la hoja

La estructura recomendada es:

| Columna          | Tipo    | Ejemplo                  |
| ---------------- | ------- | ------------------------ |
| id               | string  | 1                        |
| sku              | string  | CAL-001                  |
| name             | string  | Caldera Baxi             |
| description      | string  | Descripción del producto |
| shortDescription | string  | Breve detalle            |
| price            | number  | 450000                   |
| brand            | string  | BAXI                     |
| category         | string  | calderas                 |
| image            | string  | /images/producto.jpg     |
| images           | string  | /a.jpg;/b.jpg            |
| available        | boolean | true                     |
| stock            | number  | 12                       |
| tags             | string  | clima,gas,caldera        |
| featured         | boolean | true                     |
| powerKw          | number  | 24                       |
| gasType          | string  | GN                       |
| service          | string  | simple                   |
| technology       | string  | condensación             |
| liters           | number  | 35                       |
| elementCount     | number  | 4                        |
| compatibleModels | string  | Modelo A, Modelo B       |
| voltage          | string  | 220V                     |
| connection       | string  | gas                      |
| pressureBar      | number  | 2                        |
| heightMm         | number  | 700                      |
| widthMm          | number  | 400                      |
| depthMm          | number  | 350                      |
| diameterMm       | string  | 180                      |
| lengthMm         | number  | 600                      |
| ventilationType  | string  | coaxial                  |

## Comportamiento de seguridad

- El proyecto no rompe la app si Google Sheets no está configurado.
- Si la fuente falla, vuelve automáticamente al catálogo estático.
- La configuración se debe mantener en variables de entorno del servidor.
