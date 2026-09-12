/**
 * Catálogo de productos estático
 * Este archivo contiene todos los productos disponibles
 */

import { Product } from "@/lib/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Auriculares Inalámbricos Premium",
    description:
      "Auriculares de alta calidad con cancelación de ruido activa, batería de 30 horas y micrófono integrado. Perfectos para trabajo y entretenimiento.",
    shortDescription: "Auriculares premium con cancelación de ruido",
    price: 199.99,
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    available: true,
    sku: "AUR-001",
    tags: ["Sonido", "Inalámbrico", "Cancelación de ruido"],
    stock: 15,
  },
  {
    id: "2",
    name: "Monitor 4K Ultra HD 27 pulgadas",
    description:
      "Monitor de 27 pulgadas con resolución 4K, 60Hz, HDR10 y puertos HDMI y DisplayPort. Ideal para diseño y contenido multimedia.",
    shortDescription: "Monitor 4K 27 pulgadas - Diseño y Multimedia",
    price: 449.99,
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    available: true,
    sku: "MON-001",
    tags: ["Monitor", "4K", "Diseño"],
    stock: 8,
  },
  {
    id: "3",
    name: "Teclado Mecánico RGB",
    description:
      "Teclado mecánico retroiluminado con switches personalizables, soporta 104 teclas, conexión USB con cable removible.",
    shortDescription: "Teclado mecánico con iluminación RGB",
    price: 89.99,
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1587829191301-e8ec0357ba48?w=500&h=500&fit=crop",
    available: true,
    sku: "TEC-001",
    tags: ["Teclado", "Mecánico", "RGB", "Gaming"],
    stock: 20,
  },
  {
    id: "4",
    name: "Ratón Óptico Inalámbrico",
    description:
      "Ratón inalámbrico de precisión con receptor USB nano, batería de larga duración y diseño ergonómico.",
    shortDescription: "Ratón inalámbrico ergonómico",
    price: 29.99,
    category: "Electrónica",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    available: true,
    sku: "RAT-001",
    tags: ["Ratón", "Inalámbrico", "Oficina"],
    stock: 50,
  },
  {
    id: "5",
    name: "Camiseta Básica Algodón 100%",
    description:
      "Camiseta de algodón puro, disponible en múltiples colores, cómoda y durable. Perfecta para el día a día.",
    shortDescription: "Camiseta de algodón básica",
    price: 19.99,
    category: "Ropa",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    available: true,
    sku: "CAM-001",
    tags: ["Ropa", "Camiseta", "Casual"],
    stock: 100,
  },
  {
    id: "6",
    name: "Jeans Clásicos Azul Oscuro",
    description:
      "Pantalones vaqueros clásicos de denim 100% algodón, corte recto, disponibles en tallas XS a 3XL.",
    shortDescription: "Jeans azul oscuro clásico",
    price: 59.99,
    category: "Ropa",
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
    available: true,
    sku: "JEA-001",
    tags: ["Ropa", "Jeans", "Casual"],
    stock: 45,
  },
  {
    id: "7",
    name: "Mochila de Viaje 40L",
    description:
      "Mochila resistente de 40 litros, perfecta para viajes, senderismo y actividades al aire libre. Compartimentos múltiples y material impermeable.",
    shortDescription: "Mochila de viaje 40 litros impermeable",
    price: 79.99,
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    available: true,
    sku: "MOC-001",
    tags: ["Mochila", "Viaje", "Accesorios"],
    stock: 25,
  },
  {
    id: "8",
    name: "Reloj Digital Deportivo",
    description:
      "Reloj deportivo con monitor de frecuencia cardíaca, GPS integrado, resistencia al agua hasta 50m, ideal para atletas.",
    shortDescription: "Reloj deportivo con GPS y monitor cardíaco",
    price: 249.99,
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    available: true,
    sku: "REL-001",
    tags: ["Reloj", "Deportivo", "GPS"],
    stock: 12,
  },
  {
    id: "9",
    name: "Lámpara de Escritorio LED",
    description:
      "Lámpara LED ajustable con tres modos de color (cálido, neutro, frío), control táctil, ahorro de energía.",
    shortDescription: "Lámpara LED de escritorio ajustable",
    price: 34.99,
    category: "Hogar",
    image: "https://images.unsplash.com/photo-1565636192335-14aab60b6897?w=500&h=500&fit=crop",
    available: true,
    sku: "LAM-001",
    tags: ["Iluminación", "Hogar", "LED"],
    stock: 30,
  },
  {
    id: "10",
    name: "Almohada de Espuma Viscoelástica",
    description:
      "Almohada premium con espuma viscoelástica, funda de algodón removible, ergonómica para dormir de lado o espalda.",
    shortDescription: "Almohada viscoelástica ergonómica",
    price: 49.99,
    category: "Hogar",
    image: "https://images.unsplash.com/photo-1584197150905-c9ac2e685596?w=500&h=500&fit=crop",
    available: true,
    sku: "ALM-001",
    tags: ["Hogar", "Almohada", "Descanso"],
    stock: 40,
  },
  {
    id: "11",
    name: "Botella de Agua Inteligente 1L",
    description:
      "Botella reutilizable con sensor inteligente que te recuerda hidratarte, pantalla LED, mantiene bebidas frías 24 horas.",
    shortDescription: "Botella inteligente con recordatorio de hidratación",
    price: 39.99,
    category: "Deportes",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e9?w=500&h=500&fit=crop",
    available: true,
    sku: "BOT-001",
    tags: ["Deportes", "Hidratación", "Viaje"],
    stock: 60,
  },
  {
    id: "12",
    name: "Tapete de Yoga Antideslizante",
    description:
      "Tapete de yoga de 6mm de grosor, fabricado con PVC ecológico, textura antideslizante, fácil de limpiar.",
    shortDescription: "Tapete de yoga antideslizante 6mm",
    price: 24.99,
    category: "Deportes",
    image: "https://images.unsplash.com/photo-1554147090-13bcac15b928?w=500&h=500&fit=crop",
    available: true,
    sku: "TAP-001",
    tags: ["Yoga", "Deportes", "Fitness"],
    stock: 35,
  },
  {
    id: "13",
    name: "Clean Code - Código Limpio",
    description:
      "Libro de referencia sobre cómo escribir código limpio y mantenible. Autor: Robert C. Martin. Edición en español.",
    shortDescription: "Clean Code - Guía de código limpio",
    price: 39.99,
    category: "Libros",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop",
    available: true,
    sku: "LIB-001",
    tags: ["Libros", "Programación", "Desarrollo"],
    stock: 22,
  },
  {
    id: "14",
    name: "La Pragmática del Programador",
    description:
      "Guía esencial de desarrollo de software enfocada en mejores prácticas y consejos pragmáticos del mundo real.",
    shortDescription: "Programación pragmática y buenas prácticas",
    price: 42.99,
    category: "Libros",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop",
    available: true,
    sku: "LIB-002",
    tags: ["Libros", "Programación", "Desarrollo"],
    stock: 18,
  },
];

/**
 * Obtener producto por ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Obtener todas las categorías disponibles
 */
export function getCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}

/**
 * Obtener rango de precios
 */
export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((p) => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
