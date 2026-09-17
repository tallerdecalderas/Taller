import Link from "next/link";
import { config } from "@/utils/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Información de la empresa */}
          <div>
            <h3 className="mb-4 font-bold text-white">{config.company.name}</h3>
            <p className="mb-4 text-sm">{config.seo.description}</p>
            <div className="space-y-2 text-sm">
              <p>📧 {config.company.email}</p>
              <p>📱 {config.company.phone}</p>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="mb-4 font-bold text-white">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="transition hover:text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/donde-comprar" className="transition hover:text-white">
                  Dónde Comprar
                </Link>
              </li>
              <li>
                <Link href="/service" className="transition hover:text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/capacitacion" className="transition hover:text-white">
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="mb-4 font-bold text-white">Categorías</h4>
            <ul className="space-y-2 text-sm">
              {config.filters.categories.slice(0, 4).map((category) => (
                <li key={category}>
                  <Link
                    href={`/productos?category=${category}`}
                    className="transition hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="mb-4 font-bold text-white">Conecta con nosotros</h4>

            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${config.company.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-green-500/10 hover:text-green-500"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12.004 2C6.48 2 2 6.477 2 11.996c0 1.761.461 3.418 1.269 4.856L2 22l5.3-1.245A9.96 9.96 0 0 0 12.004 22C17.523 22 22 17.52 22 12S17.523 2 12.004 2Zm0 18.22a8.22 8.22 0 0 1-4.19-1.147l-.3-.178-3.147.738.751-3.07-.195-.316a8.22 8.22 0 1 1 7.081 3.973Zm4.51-6.162c-.247-.124-1.465-.723-1.692-.805-.227-.083-.392-.124-.557.124-.165.247-.639.805-.784.97-.144.165-.288.186-.536.062-.247-.124-1.047-.386-1.994-1.23-.737-.657-1.235-1.467-1.38-1.715-.144-.247-.015-.381.109-.505.111-.111.247-.289.371-.433.124-.145.165-.248.248-.413.082-.165.041-.309-.021-.433-.062-.124-.557-1.341-.764-1.837-.202-.483-.406-.417-.557-.425-.144-.007-.309-.009-.474-.009s-.433.062-.66.309c-.227.248-.866.846-.866 2.063s.887 2.393 1.01 2.558c.124.165 1.744 2.662 4.225 3.733.59.255 1.05.408 1.408.522.592.188 1.131.162 1.558.098.475-.071 1.465-.598 1.672-1.176.206-.578.206-1.073.144-1.176-.061-.103-.226-.165-.474-.289Z"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={config.urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-blue-500/10 hover:text-blue-500"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.017 1.791-4.685 4.533-4.685 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.491 0-1.956.929-1.956 1.882v2.254h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={config.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-pink-500/10 hover:text-pink-500"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            © {year} {config.company.name}. Todos los derechos reservados. |{" "}
            <Link href="#" className="transition hover:text-white">
              Términos de Servicio
            </Link>{" "}
            |{" "}
            <Link href="#" className="transition hover:text-white">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
