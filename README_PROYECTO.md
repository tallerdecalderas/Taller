# 📦 Catálogo de Productos Online

Sitio web empresarial frontend-only construido con **Next.js**, TypeScript y Tailwind CSS. Funciona como vitrina digital de productos y canal de contacto directo vía WhatsApp.

## ✨ Características Principales

✅ **Catálogo de Productos Dinámico**
- Listado de productos responsivo (mobile-first)
- Detalles completos por producto
- Imágenes optimizadas con `next/image`
- Información de disponibilidad y stock

✅ **Búsqueda y Filtros**
- Búsqueda por texto (nombre, SKU, descripción, categoría, tags)
- Filtros por categoría, rango de precio y disponibilidad
- Filtrado en tiempo real del lado del cliente
- Interfaz intuitiva y responsive

✅ **Sistema de Consultas por WhatsApp**
- Selecciona productos y cantidades
- "Carrito" temporal en memoria (in-memory state)
- Generación automática de mensaje formateado
- Envío directo a WhatsApp sin checkout
- Badge con contador de productos

✅ **Optimizaciones**
- SEO mejorado con metadatos dinámicos
- Generación estática (SSG) con `generateStaticParams()`
- Imágenes optimizadas
- Diseño responsive
- Página 404 personalizada

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16.3.5 (App Router)
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 4
- **Package Manager:** pnpm 10.26.1
- **Hosting:** Vercel, Netlify o cualquier hosting estático compatible

## 📂 Estructura del Proyecto

```
app/
├── components/
│   ├── Header.tsx              # Navegación global
│   ├── Footer.tsx              # Pie de página
│   ├── ProductCard.tsx         # Card de producto
│   ├── ProductDetail.tsx       # Detalle del producto
│   ├── QuantitySelector.tsx    # Selector de cantidad
│   ├── SearchBar.tsx           # Buscador
│   ├── FilterPanel.tsx         # Panel de filtros
│   ├── FilterButton.tsx        # Botón de filtro individual
│   ├── WhatsAppButton.tsx      # Botón de WhatsApp
│   ├── CartSummary.tsx         # Resumen del carrito
│   └── CartBadge.tsx           # Badge del carrito en header
├── context/
│   └── CartContext.tsx         # Context para carrito global
├── cart/
│   └── page.tsx                # Página de consulta/carrito
├── products/
│   ├── page.tsx                # Página de listado de productos
│   └── [id]/
│       └── page.tsx            # Página dinámica de detalle
├── layout.tsx                  # Layout raíz
├── page.tsx                    # Página de inicio
├── not-found.tsx               # Página 404 personalizada
└── globals.css                 # Estilos globales

lib/
├── types/
│   └── product.ts              # Tipos TypeScript
├── data/
│   └── products.ts             # Catálogo estático de productos
├── config.ts                   # Configuración global
├── filters.ts                  # Funciones de filtrado
└── whatsapp.ts                 # Utilidades de WhatsApp

public/
└── images/                     # Imágenes de productos

.env.example                    # Variables de entorno de ejemplo
```

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+ 
- pnpm 10.26.1+

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <repositorio>
   cd proyecto
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Crear archivo `.env.local`** (opcional, para variables personalizadas)
   ```bash
   cp .env.example .env.local
   ```
   Actualiza las variables según tus necesidades.

4. **Ejecutar servidor de desarrollo**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. **Construir para producción**
   ```bash
   pnpm build
   pnpm start
   ```

## 📝 Configuración

### Agregar Productos

Los productos se definen en [lib/data/products.ts](lib/data/products.ts). Cada producto tiene:

```typescript
{
  id: string;                    // ID único
  name: string;                  // Nombre del producto
  description: string;           // Descripción completa
  shortDescription?: string;     // Descripción corta
  price: number;                 // Precio
  category: string;              // Categoría
  image: string;                 // URL de imagen
  images?: string[];             // Imágenes adicionales (opcional)
  available: boolean;            // Disponibilidad
  sku: string;                   // SKU único
  tags?: string[];               // Etiquetas/características
  stock?: number;                // Stock disponible (opcional)
}
```

### Cambiar Número de WhatsApp

Edita [lib/config.ts](lib/config.ts):

```typescript
export const config = {
  company: {
    name: "Mi Tienda Online",
    whatsappNumber: "34612345678", // Tu número aquí (sin +)
    // ...
  },
  // ...
};
```

### Personalizar Empresa

Actualiza la información en [lib/config.ts](lib/config.ts):
- Nombre de la empresa
- Número de WhatsApp
- Email y teléfono
- Categorías de filtros
- Metadatos SEO

## 🔍 SEO

El proyecto incluye:

- ✅ Metadatos dinámicos por página y producto
- ✅ Open Graph para compartir en redes
- ✅ Twitter Card
- ✅ Datos estructurados (Schema.json listo para implementar)
- ✅ URLs limpias y semánticas
- ✅ Sitemap estático (configurable)

### Mejorar SEO

1. Actualiza [lib/config.ts](lib/config.ts) con tus datos
2. Agrega imágenes con descripción en productos
3. Usa palabras clave relevantes en nombres y descripciones
4. Enlaza internamente entre categorías y productos relacionados

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Todos los componentes son responsive
- Testeado en dispositivos reales

## 🔒 Seguridad y Privacidad

- ✅ Frontend-only: sin backend, sin base de datos
- ✅ Sin autenticación de usuarios
- ✅ Sin almacenamiento persistente de datos personales
- ✅ Carrito solo en memoria del navegador
- ✅ Cumple con GDPR (no guarda datos)

## 🚢 Deployment

### Vercel (Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Construir
pnpm build

# Deploy carpeta .next (o similar según configuración)
# Sigue instrucciones en netlify.com
```

### Otros hosting
Cualquier hosting que soporte Next.js estático o híbrido funcionará.

## 📋 Checklist antes de publicar

- [ ] Actualizar nombre de la empresa en `config.ts`
- [ ] Configurar número de WhatsApp correcto
- [ ] Revisar y completar catálogo de productos
- [ ] Actualizar imágenes de productos
- [ ] Cambiar favicon en `public/`
- [ ] Actualizar URL base en `.env.local`
- [ ] Revisar metadatos SEO
- [ ] Testar flujo completo en mobile y desktop
- [ ] Verificar que enlaces de WhatsApp funcionan
- [ ] Hacer pruebas de rendimiento (Lighthouse)

## 🐛 Troubleshooting

### Los filtros no funcionan
Verifica que estés en la página `/products` y que los filtros sean componentes cliente (`"use client"`).

### Imágenes no cargan
Comprueba:
- URLs de imágenes en `products.ts`
- Permisos de acceso a URLs externas
- Formato de imagen soportado (JPG, PNG, WebP)

### WhatsApp no abre
- Verifica número de teléfono en `config.ts` (sin `+`)
- Prueba desde un dispositivo con WhatsApp instalado
- Comprueba que el número sea válido

### Error en build
Ejecuta:
```bash
pnpm clean
pnpm install
pnpm build
```

## 📞 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

## 📄 Licencia

Proyecto privado. Todos los derechos reservados.

---

**Última actualización:** Septiembre 2026

**Versión:** 1.0.0
