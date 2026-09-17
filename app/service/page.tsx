import Link from "next/link";
import { config } from "@/utils/config";

export default function ServicePage() {
  const serviceTypes = [
    {
      title: "Calderas",
      icon: "🔥",
      steps: [
        "Verifique que la llave de gas esté abierta",
        "Verifique la conexión a red eléctrica",
        "Verifique que la caldera esté encendida",
        "Verifique apertura de llave de paso de agua",
        "Verifique presión (1-2 bar en manómetro)",
      ],
    },
    {
      title: "Radiadores",
      icon: "🌡️",
      steps: [
        "Verifique que válvula y detentor estén abiertos",
        "Si no calienta, purgue el radiador",
        "Controle pérdidas de agua en juntas",
        "Verifique presión en la caldera",
        "Abra grifo de purga controlando presión",
      ],
    },
    {
      title: "Climatizadores de Piscina",
      icon: "💧",
      steps: [
        "Limpie la canasta del filtro de la pileta",
        "Verifique potencia de la bomba de filtro",
        "Revise sistema de filtrado (sin obstrucciones)",
        "Verifique carga de pilas (si corresponde)",
        "Controle que equipo esté en posición correcta",
      ],
    },
  ];

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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Servicio Técnico</h1>
          <p className="text-xl text-gray-300">Mantenimiento preventivo y reparación de equipos</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Instrucciones Preliminares */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Antes de solicitar servicio técnico
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Por favor, realice el siguiente chequeo según el tipo de equipo. En muchas ocasiones,
              estos pasos pueden resolver el problema.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {serviceTypes.map((service, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border-t-4 border-blue-600 bg-white p-6 shadow-lg"
                >
                  <div className="mb-4 text-5xl">{service.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <div className="space-y-3">
                    {service.steps.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de Solicitud */}
          <div className="mb-8 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Solicitar Servicio Técnico</h2>

            <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <p className="text-yellow-800">
                <span className="font-bold">ℹ️ Nota importante:</span> Si el problema persiste
                después de realizar los chequeos anteriores, por favor contáctenos por WhatsApp o
                teléfono.
              </p>
            </div>

            <div className="rounded-lg border-2 border-blue-600 bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Información de Contacto</h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-600">Teléfono</p>
                  <a
                    href="tel:0810-222-7378"
                    className="text-2xl font-bold text-blue-600 hover:underline"
                  >
                    0810-222-7378
                  </a>
                  <p className="mt-1 text-gray-600">Lunes a viernes: 9:00 - 17:00 hs</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-600">WhatsApp</p>
                  <a
                    href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20necesito%20solicitar%20un%20servicio%20técnico`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                    </svg>
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="rounded-lg bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Mantenimiento Preventivo</h3>
            <p className="mb-4 text-gray-700">
              Te recomendamos realizar mantenimiento preventivo periódico en tus equipos para
              garantizar su correcto funcionamiento y prolongar su vida útil.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold text-green-600">✓</span>
                <span>Revisión anual de calderas y radiadores</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-green-600">✓</span>
                <span>Limpieza y purga de sistemas de calefacción</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-green-600">✓</span>
                <span>Inspección de conexiones y tuberías</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-green-600">✓</span>
                <span>Verificación de presión y termostatos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">¿Tu problema requiere atención inmediata?</h2>
          <p className="mb-6 text-lg text-red-100">
            Contáctanos ahora y nuestro equipo te asistirá a la brevedad
          </p>
          <a
            href={`https://wa.me/${config.company.whatsappNumber}?text=URGENTE%3A%20necesito%20servicio%20técnico`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 font-bold text-white transition hover:bg-green-600"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
