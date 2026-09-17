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
      <section className="bg-linear-to-r from-slate-900 to-slate-800 px-4 py-16 text-white">
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
<<<<<<< HEAD
                  <p className="text-sm text-gray-600 font-semibold mb-2">Teléfono</p>
                  <a href="tel:1125699615" className="text-2xl font-bold text-blue-600 hover:underline">
                    11 2569-9615
                  </a>
                  <p className="text-gray-600 mt-1">Lunes a viernes: 9:00 - 17:00 hs</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">WhatsApp</p>
=======
                  <p className="mb-2 text-sm font-semibold text-gray-600">Teléfono</p>
>>>>>>> develop
                  <a
                    href="tel:+54 9 11 2569-9615"
                    className="text-2xl font-bold text-blue-600 hover:underline"
                  >
                    +54 9 11 2569-9615
                  </a>
                  <p className="mt-1 text-gray-600">Lunes a viernes: 9:00 - 17:00 hs</p>
                </div>
                <a
                  href="https://wa.me/5491125699615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-green-600 bg-green-50 p-4 transition hover:bg-green-100"
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
                  <p className="p-2 text-blue-800">WhatsApp</p>
                </a>
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
      <section className="bg-linear-to-r from-red-600 to-red-700 px-4 py-12 text-white">
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
