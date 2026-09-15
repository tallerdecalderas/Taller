
export const config = {
  // Información de la empresa
  company: {
    logo: "/webplogo.webp",
    name: "Taller de calderas",
    whatsappNumber: "1125699615",
    whatsappCountryCode: "AR",
    email: "tallerdecalderasoficial@gmail.com",
    phone: "1125699615",
  },

  locations : [
    {
      name: "Sucursal Central",
      address: "Salta polo club 2922, Manual Alberti, Pilar",
      phone: "1125699615",
      whatsapp: "+54 9 11 2569-9615",
      hours: "Lunes a viernes: 9:00 - 17:00 hs",
      services: ["Asesoramiento", "Venta", "Servicio tecnico"],
    }
  ],

  sound: {
    enabled: true,
    src: "/sound/sonido.m4a",
    volume: 0.52,
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
    siteName: "Taller de calderas ",
    description:
      "Tienda online de productos de calidad. Consulta nuestro catálogo y contacta por WhatsApp. Servicio tecnico de calefaccion.",
    keywords:
      "tienda, productos, catálogo, urgencias, Caldera, Servicio tecnico, climatizadores, aires acondicionados",
    twitterHandle: "@mitienda",
    ogImage: "./logo_Taller.png",
  },

  // Paginación
  pagination: {
    itemsPerPage: 12,
  },
};

export default config;
