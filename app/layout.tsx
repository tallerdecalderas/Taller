import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { config } from "@/utils/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageOpenSound } from "@/components/layout/PageOpenSound";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(config.urls.base),
  icons: {
    icon: "/taller_de_calderas_favicon.ico",
  },
  title: {
    default: `${config.company.name} - Servicio Tecnico especializado - Catálogo de Productos`,
    template: `%s | ${config.company.name}`,
  },
  description: config.seo.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.company.name }],
  creator: config.company.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: config.urls.base,
    siteName: config.seo.siteName,
    description: config.seo.description,
    images: [
      {
        url: config.seo.ogImage,
        width: 1200,
        height: 630,
        alt: config.seo.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: config.seo.twitterHandle,
    description: config.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--ink)]">
        <CartProvider>
          <PageOpenSound />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
