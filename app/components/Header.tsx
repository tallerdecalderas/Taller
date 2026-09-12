import Link from "next/link";
import { config } from "@/lib/config";
import { CartBadge } from "./CartBadge";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo/Marca */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              {config.company.name.charAt(0)}
            </div>
            <span className="ml-3 font-bold text-lg text-gray-900">
              {config.company.name}
            </span>
          </div>
        </Link>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Inicio
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Productos
          </Link>
          <a
            href={`https://wa.me/${config.company.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600 font-medium transition"
          >
            Contacto
          </a>
        </div>

        {/* Botones derechos */}
        <div className="flex items-center gap-3">
          {/* Carrito */}
          <CartBadge />

          {/* Botón WhatsApp móvil */}
          <a
            href={`https://wa.me/${config.company.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
