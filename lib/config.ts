
export const config = {
  // Información de la empresa
  company: {
    logo: "/logo_Taller.png",
    name: "Taller de calderas",
    whatsappNumber: "1151446625",
    whatsappCountryCode: "AR",
    email: "tallerdecalderasoficial@gmail.com",
    phone: "1151446625",
  },

  // URLs
  urls: {
    base: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    whatsappBase: "https://wa.me/",
  },

  // Configuración de filtros
  filters: {
    categories: [
      "Calderas",
      "Calderas Restauradas",
      "Repuestos Genéricos",
      "Termostatos",
      "Radiadores",
      "Ventilación",
      "Accesorios",
    ],
  },

  // SEO y metadatos
  seo: {
    siteName: "Mi Tienda Online",
    description:
      "Tienda online de productos de calidad. Consulta nuestro catálogo y contacta por WhatsApp. Servicio tecnico de calefaccion.",
    keywords:
      "tienda, productos, catálogo, urgencias, Caldera, Servicio tecnico",
    twitterHandle: "@mitienda",
    ogImage: "/og-image.png",
  },

  // Paginación
  pagination: {
    itemsPerPage: 12,
  },
};

export default config;
