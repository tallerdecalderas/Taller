import Link from "next/link";
import { config } from "@/utils/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-white font-bold mb-4">
              {config.company.name}
            </h3>
            <p className="text-sm mb-4">{config.seo.description}</p>
            <div className="space-y-2 text-sm">
              <p>📧 {config.company.email}</p>
              <p>📱 {config.company.phone}</p>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/donde-comprar" className="hover:text-white transition">
                  Dónde Comprar
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/capacitacion" className="hover:text-white transition">
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-white font-bold mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              {config.filters.categories.slice(0, 4).map((category) => (
                <li key={category}>
                  <Link
                    href={`/productos?category=${category}`}
                    className="hover:text-white transition"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-white font-bold mb-4">Conecta con nosotros</h4>
            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${config.company.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                </svg>
              </a>
              <a
                href={config.urls.facebook}
                className="text-gray-400 hover:text-blue-400 transition"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <div className="flex space-x-4">
              <a
                href={config.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentcolor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.79.263-1.473.557-2.115 1.194-.657.646-.931 1.35-1.194 2.12-.266.79-.467 1.66-.527 2.94C.058 8.328 0 8.75 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.913.262.788.556 1.486 1.194 2.12.657.657 1.35.932 2.12 1.194.763.266 1.636.466 2.913.527 1.28.057 1.7.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.913-.527.788-.262 1.486-.556 2.12-1.194.657-.657.932-1.35 1.194-2.12.266-.763.466-1.636.527-2.913.057-1.28.072-1.7.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.913-.262-.788-.556-1.486-1.194-2.12-.657-.657-1.35-.932-2.12-1.194-.763-.266-1.636-.466-2.913-.527C15.667.058 15.25 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.06 1.805.246 2.228.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.163.423.348 1.057.408 2.228.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.06 1.171-.245 1.805-.408 2.228-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.423.163-1.057.348-2.228.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.06-1.805-.245-2.228-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.163-.423-.348-1.057-.408-2.228-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.06-1.171.245-1.805.408-2.228.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.423-.163 1.057-.348 2.228-.408 1.264-.061 1.646-.07 4.849-.07l.045.002z" />
                </svg>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            © {year} {config.company.name}. Todos los derechos reservados. |{" "}
            <Link href="#" className="hover:text-white transition">
              Términos de Servicio
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-white transition">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
