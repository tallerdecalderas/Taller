import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from "@/lib/config";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${config.company.name} - Catálogo de Productos`,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-gray-50">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
