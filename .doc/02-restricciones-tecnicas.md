# Restricciones y Requisitos Técnicos

## 1. Stack tecnológico (propuesto)
- **Framework:** Next.js (App Router), versión estable más reciente.
- **Lenguaje:** TypeScript.
- **Estilos:** Tailwind CSS (o el sistema de diseño que la empresa ya use).
- **Hosting:** Vercel u otro hosting de sitios estáticos/Next.js (Netlify, etc.).

> Nota: si la empresa ya tiene un stack definido (otra librería de estilos, otro hosting), este documento debe actualizarse antes de comenzar.

## 2. Restricción central: solo frontend
- **No hay backend propio ni base de datos.** Ninguna funcionalidad debe requerir un servidor persistente ni almacenamiento en disco/DB.
- **No hay autenticación ni sesiones de usuario.**
- Los datos del catálogo de productos deben poder representarse como:
  - Un archivo de datos estático (JSON/TS) embebido en el repo, **o**
  - Contenido consumido en build/request time desde un CMS headless externo o una API pública de solo lectura (a definir).
- Cualquier "estado" del usuario (selección de productos, filtros activos) vive únicamente en memoria del cliente (React state) durante la sesión de navegación. No se usa `localStorage`, `sessionStorage`, cookies de tracking propio, ni backend para persistirlo.

## 3. Catálogo de productos
- Debe soportar:
  - **Búsqueda por texto** (nombre, descripción, categoría, SKU).
  - **Filtros** por categoría, y opcionalmente precio, disponibilidad, tags.
  - Filtrado/búsqueda del lado del cliente (client-side), ya que no hay backend que resuelva queries.
- Si el catálogo crece mucho (cientos/miles de productos), evaluar paginación o carga progresiva, siempre en el cliente o vía generación estática (SSG/ISR).

## 4. Flujo de "compra" → WhatsApp (sin checkout)
- No existe pasarela de pago ni checkout.
- Flujo esperado:
  1. El usuario elige uno o más productos (botón "Consultar" / "Agregar a mi pedido").
  2. Al confirmar, se genera un mensaje de texto con el detalle (producto, cantidad, variantes) y se abre un enlace `https://wa.me/<numero>?text=<mensaje_codificado>`.
  3. El número de WhatsApp de destino debe ser configurable (variable de entorno o archivo de configuración), no hardcodeado en múltiples lugares.
- Debe funcionar en mobile (abre la app de WhatsApp) y en desktop (abre WhatsApp Web).

## 5. Rendimiento y SEO
- Usar generación estática (SSG) o ISR para las páginas de catálogo cuando sea posible.
- Metadatos SEO básicos (title, description, Open Graph) en Inicio y Productos.
- Imágenes optimizadas (usar `next/image`).
- Diseño mobile-first, totalmente responsive.

## 6. Seguridad y privacidad
- Al no haber backend ni base de datos, no se recolectan ni almacenan datos personales de los usuarios en el servidor.
- Cualquier dato que el usuario ingrese (ej. nombre en un formulario de contacto) debe enviarse directamente por WhatsApp o por un servicio externo de terceros, nunca guardarse en un backend propio.

## 7. Explícitamente prohibido
- Crear rutas de API que escriban en una base de datos.
- Añadir autenticación de usuarios.
- Implementar carrito con persistencia entre sesiones.
- Integrar pasarelas de pago (Stripe, MercadoPago, etc.) para checkout real.
- Guardar datos sensibles del usuario en el cliente de forma persistente.
