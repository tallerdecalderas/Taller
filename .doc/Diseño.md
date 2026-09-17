Necesito que hagas un pase de responsive design sobre todo el sitio/página,
porque actualmente se ve sobredimensionado (texto, imágenes, espaciados)
en desktop y no está bien adaptado a otros tamaños de pantalla.

DIAGNÓSTICO PRIMERO
Antes de tocar nada, revisá y listame:

1. Si existe el meta viewport (<meta name="viewport" content="width=device-width, initial-scale=1">)
2. Qué unidades se usan para fuentes y espaciados (px fijos vs rem/em/%)
3. Si los contenedores principales tienen un max-width definido o se estiran
   a todo el ancho de la pantalla
4. Si las imágenes tienen max-width: 100%; height: auto o equivalente
5. Si hay breakpoints/media queries (o clases responsive de Tailwind:
   sm: md: lg: xl:) o si todo usa un solo tamaño fijo

APLICÁ ESTOS CAMBIOS

- Agregá el meta viewport si falta
- Convertí tamaños de fuente y espaciados clave de px a rem, y usá
  clamp(mín, preferido, máx) en títulos grandes (hero, h1) para que
  escalen solos entre mobile y desktop en vez de tener un tamaño fijo
- Definí un max-width razonable para el contenedor principal (ej. 1200px-1280px)
  centrado con margin: 0 auto, en vez de que el contenido ocupe todo el viewport
- Reducí paddings/márgenes de secciones a una escala más contenida
  (ideas de referencia: 16-24px en mobile, 48-80px en desktop, no más)
- Asegurate de que toda imagen tenga max-width: 100%; height: auto
- Agregá al menos 3 breakpoints: mobile (~375-480px), tablet (~768px),
  desktop (~1280px+), y probá que el texto no rompa el layout en ninguno
- Si el proyecto usa Tailwind: reemplazá clases de tamaño fijo por su
  variante responsive (ej. text-2xl -> text-xl md:text-2xl lg:text-3xl,
  p-12 -> p-6 md:p-10 lg:p-12)

VALIDACIÓN
Al final, probá el resultado en 3 anchos (375px, 768px, 1440px) usando
las devtools del navegador y confirmame que no hay overflow horizontal,
que el texto es legible sin zoom, y que los botones/links son tocables
en mobile (mínimo ~44px de alto).
