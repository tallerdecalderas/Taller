import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* config options here */
  onDemandEntries: {
    maxInactiveAge: 15 * 1000, // Recompila cada 15 segundos
    pagesBufferLength: 5,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, must-revalidate",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rapigascalefaccion.com.ar",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "ru-baxi.com",
      },
      {
        protocol: "https",
        hostname: "abelson.com.ar",
      },
      {
        protocol: "https",
        hostname: "www.climatecnica.com",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "s.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "pub-877ef76587e44bd1b01fb2b3b725282b.r2.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.manomano.com",
      },
      {
        protocol: "https",
        hostname: "www.acloncenter.com.br",
      },
      {
        protocol: "https",
        hostname: "racor.ar",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "peisa.nyc3.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.eclimatizacion.es",
      },
      {
        protocol: "https",
        hostname: "airfeel.cl",
      },
      {
        protocol: "https",
        hostname: "peisa.com.ar",
      },
    ],
  },
};

export default nextConfig;
