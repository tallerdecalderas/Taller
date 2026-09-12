# Instrucciones del Proyecto

Este archivo es la fuente de verdad para que Claude (Claude Code u otro asistente) entienda el contexto y las reglas del proyecto antes de escribir código.

## Contexto del proyecto
Sitio web empresarial construido en **Next.js**, cuya única función es de **frontend**. No hay backend propio, no hay base de datos, no se persisten datos del usuario. El sitio tiene dos secciones principales:
1. **Inicio** — landing institucional de la empresa.
2. **Productos** — catálogo con buscador y filtros. No hay compra/checkout: el usuario arma su consulta y esta se envía como mensaje a **WhatsApp** con todos los datos seleccionados por el usuario.

Consultar también:
- `01-objetivos-alcance.md` para el detalle de negocio.
- `02-restricciones-tecnicas.md` para el detalle técnico completo.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind latest CSS
- Zustand
- Sin ORM, sin base de datos, sin backend propio
- cache nativo
- local storage (definir datos por el agente)

## Reglas estrictas (no negociables)
1. **No crear backend ni base de datos.** No agregar Prisma, conexiones a DB, ni rutas de API que persistan datos, salvo que el usuario lo pida explícitamente y se actualice este documento.
2. **No implementar checkout ni pasarela de pago.** El cierre de la "venta" siempre es un redirect a WhatsApp con un mensaje prearmado.
3. **No usar `localStorage` / `sessionStorage` para datos de negocio.** El estado de filtros/selección vive en memoria (React state) durante la sesión.
4. **No agregar autenticación de usuarios.**
5. Los datos del catálogo viven en un archivo estático (ej. `data/products.ts` o `.json`) dentro del repo, salvo que se indique una fuente externa (CMS headless).

## Estructura de carpetas (sugerida)
```
/.doc
/.agents
/app
  inicio/page.tsx                -> Inicio
  productos/page.tsx      -> Catálogo de productos
/components
  catalog/                -> Grid, tarjetas de producto, filtros, buscador
  whatsapp/               -> Botón y helper para generar el link de WhatsApp
/sectionsPage              -> va a tener cada seccion que vaa ir en app, aca se van a centralizar los componentes por page
 inicioPage.tsx
 productosPage.tsx
   
/Context
/data
  products.ts             -> Fuente de datos del catálogo (mock o real)
/lib
  whatsapp.ts             -> Función para construir el mensaje y el link wa.me
  Img.ts
/type
 
```

## Flujo de WhatsApp — implementación esperada
- Función helper (`lib/whatsapp.ts`) que reciba uno o varios productos y devuelva una URL tipo:
  `https://wa.me/<NUMERO>?text=<mensaje codificado>`
- El número de WhatsApp debe leerse de una variable de entorno (`NEXT_PUBLIC_WHATSAPP_NUMBER`), nunca hardcodeado en componentes.
- El botón de cada producto ("Consultar por WhatsApp") y, si existe, un botón de "Enviar selección" que agrupe varios productos en un solo mensaje, deben usar esta misma función.

## Catálogo — buscador y filtros
- Filtrado y búsqueda 100% client-side (no hay endpoint que resuelva queries).
- El buscador debe matchear como mínimo por nombre y categoría.
- Los filtros deben poder combinarse (ej. categoría + rango de precio) sin recargar la página.

## Convenciones de código
- TypeScript estricto; tipar los productos con una interfaz `Product`.
- Componentes funcionales, hooks de React para el estado de filtros/búsqueda.
- Mobile-first: probar siempre el layout en viewport chico antes que en desktop.
- Usar `next/image` para las imágenes de producto.
- Conectar con cluadynary para guadar imagenes y optimar

## Qué hacer si algo no está definido
Si una tarea requiere backend, base de datos, autenticación o pagos, **no asumir que está permitido**: preguntar antes de implementarlo, porque contradice las restricciones de este proyecto.
