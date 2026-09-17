# Estructura de Componentes

Guía de dónde encontrar cada componente según su función y página.

## 📁 Organización

### `layout/` - Componentes Globales

Utilizados en todas las páginas a través de `layout.tsx`

- **`Header.tsx`** - Barra de navegación principal
  - Importa: `CartBadge` (desde shared/)
  - Usado en: Todas las páginas
  - Contiene: Logo, navegación, menú móvil, badge del carrito

- **`Footer.tsx`** - Pie de página
  - Usado en: Todas las páginas
  - Contiene: Enlaces, contacto, redes sociales

- **`WhatsAppButton.tsx`** - Botón flotante de WhatsApp
  - Usado en: Componentes de contacto

---

### `shared/` - Componentes Reutilizables

Utilizados en múltiples lugares del sitio

- **`CartBadge.tsx`** - Badge del carrito en Header
  - Importado por: `Header.tsx`
  - Muestra: Cantidad de items en el carrito

- **`QuantitySelector.tsx`** - Selector de cantidad
  - Importado por: `ProductDetail.tsx`
  - Muestra: Controles para aumentar/disminuir cantidad

---

### `productos/` - Componentes de Productos

Usados en páginas de catálogo y detalles de productos

- **`ProductCard.tsx`** - Tarjeta de producto
  - Usado en: `/productos` (página de catálogo)
  - Muestra: Imagen, nombre, precio, botón agregar al carrito

- **`ProductDetail.tsx`** - Detalle completo del producto
  - Usado en: `/productos/[id]` (página de producto individual)
  - Importa: `QuantitySelector`
  - Muestra: Información completa, descripción, especificaciones

- **`SearchBar.tsx`** - Barra de búsqueda
  - Usado en: `/productos`
  - Funcionalidad: Buscar productos por nombre

- **`FilterPanel.tsx`** - Panel de filtros
  - Usado en: `/productos`
  - Importa: `FilterButton`
  - Funcionalidad: Filtrar por categoría, marca, precio

- **`FilterButton.tsx`** - Botón individual de filtro
  - Importado por: `FilterPanel.tsx`
  - Funcionalidad: Botón de filtro individual

---

### `cart/` - Componentes del Carrito

Usados en páginas relacionadas con el carrito

- **`CartSummary.tsx`** - Resumen del carrito
  - Usado en: `/cart` y `/consulta`
  - Muestra: Lista de productos, cantidades, total, opciones de eliminar

---

### `inicio/` - Componentes de Inicio

_Reservado para componentes específicos de la página de inicio_

---

### `donde-comprar/` - Componentes de "Dónde Comprar"

_Reservado para componentes específicos de la página de ubicaciones_

---

### `service/` - Componentes de Service

_Reservado para componentes específicos de la página de servicio_

---

## 📊 Mapa de Uso por Página

| Página           | Ruta                 | Componentes                                                                                |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| Inicio           | `/`                  | `Header`, `Footer`                                                                         |
| Catálogo         | `/productos`         | `Header`, `Footer`, `ProductCard`, `SearchBar`, `FilterPanel`, `FilterButton`, `CartBadge` |
| Detalle Producto | `/productos/[id]`    | `Header`, `Footer`, `ProductDetail`, `QuantitySelector`, `CartBadge`                       |
| Carrito/Consulta | `/cart`, `/consulta` | `Header`, `Footer`, `CartSummary`, `CartBadge`                                             |
| Dónde Comprar    | `/donde-comprar`     | `Header`, `Footer`, `CartBadge`                                                            |
| Service          | `/service`           | `Header`, `Footer`, `CartBadge`                                                            |
| Capacitación     | `/capacitacion`      | `Header`, `Footer`, `CartBadge`                                                            |

---

## 🔗 Imports de Referencia

```typescript
// Componentes Layout
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

// Componentes Shared
import { CartBadge } from "@/components/shared/CartBadge";
import { QuantitySelector } from "@/components/shared/QuantitySelector";

// Componentes Productos
import { ProductCard } from "@/components/productos/ProductCard";
import { ProductDetail } from "@/components/productos/ProductDetail";
import { SearchBar } from "@/components/productos/SearchBar";
import { FilterPanel } from "@/components/productos/FilterPanel";
import { FilterButton } from "@/components/productos/FilterButton";

// Componentes Cart
import { CartSummary } from "@/components/cart/CartSummary";
```
