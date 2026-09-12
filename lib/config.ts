/**
 * Configuración global de la aplicación
 */

export const config = {
  // Información de la empresa
  company: {
    name: "Mi Tienda Online",
    whatsappNumber: "34612345678", // Formato: código país + número sin +
    whatsappCountryCode: "ES", // Código de país
    email: "contacto@mitienda.com",
    phone: "+34 (012) 345-678",
  },

  // URLs
  urls: {
    base: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    whatsappBase: "https://wa.me/",
  },

  // Configuración de filtros
  filters: {
    categories: [
      "Electrónica",
      "Ropa",
      "Accesorios",
      "Hogar",
      "Deportes",
      "Libros",
    ],
    priceRanges: [
      { label: "Menos de $50", min: 0, max: 50 },
      { label: "$50 - $100", min: 50, max: 100 },
      { label: "$100 - $200", min: 100, max: 200 },
      { label: "Más de $200", min: 200, max: Infinity },
    ],
  },

  // SEO y metadatos
  seo: {
    siteName: "Mi Tienda Online",
    description:
      "Tienda online de productos de calidad. Consulta nuestro catálogo y contacta por WhatsApp.",
    keywords:
      "tienda, productos, catálogo, ecommerce, WhatsApp",
    twitterHandle: "@mitienda",
    ogImage: "/og-image.png",
  },

  // Paginación
  pagination: {
    itemsPerPage: 12,
  },
};

export default config;
