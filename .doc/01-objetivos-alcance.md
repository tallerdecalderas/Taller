# Objetivos y Alcance del Proyecto

## 1. Descripción general
Sitio web empresarial construido en **Next.js**, cuya función es exclusivamente de **frontend**: no persiste datos, no tiene backend propio ni base de datos. Sirve como vitrina digital de productos y canal de contacto comercial vía WhatsApp.

## 2. Objetivo general
Presentar la marca y su catálogo de productos de forma profesional y navegable, permitiendo a los visitantes explorar, filtrar y buscar productos, y facilitar el contacto comercial derivando la consulta directamente a WhatsApp (sin checkout ni pasarela de pago).

## 3. Objetivos específicos
- Página de **Inicio** que comunique la propuesta de valor de la empresa.
- Página de **Productos** con:
  - Listado/catálogo de productos.
  - Buscador por texto ( SKU, nombre.).
  - Filtros (categoría, precio, disponibilidad, etiquetas, u otros a definir).
- Permitir "consultar" o "pedir" uno o varios productos, generando un mensaje prellenado que se envía a WhatsApp con el detalle de la consulta (no hay compra ni pago online).
- Experiencia rápida, responsive (mobile-first) y con buen SEO básico, ya que probablemente el tráfico llegue desde redes sociales, Google o WhatsApp compartido.

## 4. Alcance (dentro del proyecto)
- Landing / Inicio.
- Catálogo de Productos con filtro y buscador.
- Ficha o detalle de producto (modal o página — a confirmar).
- Botón/flujo de "Consultar por WhatsApp" por producto y/o por selección múltiple.
- Diseño responsive.
- Despliegue como sitio estático o híbrido (SSG/ISR), sin backend propio.

## 5. Fuera de alcance (explícitamente)
- Backend / API propia.
- Base de datos.
- Autenticación de usuarios.
- Carrito de compras persistente.
- Pasarela de pago / checkout.
- Panel de administración (CMS propio), salvo que se decida integrar uno headless externo.
- Gestión de pedidos, stock en tiempo real, facturación.

## 6. Público objetivo
Clientes potenciales de la empresa que buscan conocer el catálogo y contactar por WhatsApp para cotizar o comprar.

## 7. Criterios de éxito
- El usuario encuentra un producto en menos de 3 interacciones (buscador o filtros).
- El flujo "producto → WhatsApp" funciona sin fricción y sin errores en mobile.
- El sitio carga rápido (Core Web Vitals aceptables) y es responsive.
