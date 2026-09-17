import Link from "next/link";
import { config } from "@/utils/config";

export default function DondeComprarPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-slate-900 to-slate-800 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-2">
            <Link href="/" className="text-gray-300 hover:text-white">
              ← Inicio
            </Link>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Dónde Comprar</h1>
          <p className="text-xl text-gray-300">Encuentra nuestras sucursales y puntos de venta</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Ubicaciones */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {config.locations.map((location, idx) => (
              <div
                key={idx}
                className="rounded-lg border-l-4 border-blue-600 bg-white p-8 shadow-lg"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{location.name}</h2>

                <div className="mb-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Dirección</p>
                    <p className="text-gray-900">{location.address}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-600">Horario</p>
                    <p className="text-gray-900">{location.hours}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-600">Contacto</p>
                    <div className="space-y-2">
                      <p className="text-gray-900">
                        📞{" "}
                        <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                          {location.phone}
                        </a>
                      </p>
                      <p className="text-gray-900">
                        💬{" "}
                        <a
                          href={`https://wa.me/${location.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-600">Servicios</p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/5491125699615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-blue-800 bg-blue-50 p-4 transition hover:bg-blue-100"
                >
                  <svg
                    className="h-6 w-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.85 11.85 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.9 0-3.18-1.23-6.16-3.41-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.03 2.92 9.9 9.9 0 0 1 2.91 7.05c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  <p className="p-2">Contactar</p>
                </a>
              </div>
            ))}
          </div>

          {/* Información Adicional */}
          <div className="rounded-lg bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Información Adicional</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold text-gray-900">¿Cómo llegar?</h4>
                <p className="text-gray-700">
                  Estamos ubicados en una zona de fácil acceso. Disponemos de estacionamiento para
                  nuestros clientes.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-gray-900">Atención al Cliente</h4>
                <p className="text-gray-700">
                  Nuestro equipo está disponible para asesorarte sobre la mejor solución según tus
                  necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">¿Necesitas más información?</h2>
          <p className="mb-6 text-lg text-blue-100">
            Contáctanos directamente por WhatsApp o teléfono
          </p>
          <a
            href={`https://wa.me/${config.company.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 font-bold text-white transition hover:bg-green-600"
          >
            Abrir WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
