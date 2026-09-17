import Link from "next/link";
import { config } from "@/utils/config";

export default function DondeComprarPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-16 text-white">
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
                  href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20consulto%20por%20${location.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                  </svg>
                  Contactar
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-12 text-white">
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
