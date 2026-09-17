import Link from "next/link";
import { config } from "@/utils/config";
import ButtonSvgWhatsapp from "@/components/componetsGenric/ButtonSvgWhatsapp";

export default function CapacitacionPage() {
  const courses = [
    {
      title: "Instalación de Calderas",
      duration: "6 horas",
      price: "Consultar",
      topics: [
        "Normas de seguridad y regulaciones",
        "Tipos de calderas y características",
        "Instalación paso a paso",
        "Conexión de tuberías y sistemas",
        "Pruebas de funcionamiento",
      ],
      audience: "Profesionales y instaladores",
    },
    {
      title: "Mantenimiento de Sistemas de Calefacción",
      duration: "4 horas",
      price: "Consultar",
      topics: [
        "Diagnóstico de problemas comunes",
        "Desmontaje y limpieza de equipos",
        "Reparación y reemplazo de piezas",
        "Pruebas de rendimiento",
        "Documentación y reportes",
      ],
      audience: "Técnicos y mantenedores",
    },
    {
      title: "Sistemas de Climatización de Piscinas",
      duration: "4 horas",
      price: "Consultar",
      topics: [
        "Tipos de climatizadores",
        "Instalación en piscinas",
        "Regulación de temperatura",
        "Mantenimiento preventivo",
        "Solución de problemas",
      ],
      audience: "Instaladores y propietarios",
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Capacitación Profesional</h1>
          <p className="text-xl text-gray-300">
            Programas de entrenamiento para profesionales e instaladores
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Introducción */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Nuestros Programas de Capacitación
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Ofrecemos programas integrales de capacitación para profesionales que deseen mejorar
              sus habilidades en instalación, mantenimiento y reparación de equipos de climatización
              y calefacción.
            </p>
          </div>

          {/* Cursos */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border-t-4 border-blue-600 bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{course.title}</h3>

                  <div className="mb-6 flex gap-4 border-b pb-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Duración</p>
                      <p className="text-lg font-bold text-blue-600">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Precio</p>
                      <p className="text-lg font-bold text-green-600">{course.price}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="mb-3 text-sm font-semibold text-gray-600">Temas Cubiertos</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex gap-2 text-gray-700">
                          <span className="font-bold text-blue-600">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 rounded bg-blue-50 p-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Dirigido a:</span> {course.audience}
                    </p>
                  </div>
                  <ButtonSvgWhatsapp text="Solicitar Información" />
                </div>
              </div>
            ))}
          </div>

          {/* Beneficios */}
          <div className="mb-8 rounded-lg bg-linear-to-r from-blue-50 to-indigo-50 p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Beneficios de Nuestros Cursos</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Instructores Certificados</h3>
                  <p className="text-gray-700">Profesionales con amplia experiencia en el sector</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Materiales de Calidad</h3>
                  <p className="text-gray-700">Equipos reales y herramientas profesionales</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Práctica Intensiva</h3>
                  <p className="text-gray-700">Formación práctica basada en casos reales</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Certificado Oficial</h3>
                  <p className="text-gray-700">Validación de competencias profesionales</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-bold text-gray-900">
                  ¿Cuáles son los requisitos para participar?
                </h3>
                <p className="text-gray-700">
                  No se requiere experiencia previa. Solo necesitas estar interesado en aprender
                  sobre sistemas de climatización y calefacción.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-bold text-gray-900">
                  ¿Los cursos incluyen material de estudio?
                </h3>
                <p className="text-gray-700">
                  Sí, incluyen manual de capacitación, apuntes técnicos y acceso a recursos en
                  línea.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-bold text-gray-900">
                  ¿Se ofrecen cursos personalizados para empresas?
                </h3>
                <p className="text-gray-700">
                  Sí, podemos diseñar programas de capacitación personalizados según las necesidades
                  de tu empresa. Contáctanos para más información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-green-600 to-green-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">¿Listo para mejorar tus habilidades?</h2>
          <p className="mb-8 text-xl text-green-100">
            Consulta sobre disponibilidad de cursos y fechas de próximas capacitaciones
          </p>
          <a
            href={`https://wa.me/${config.company.whatsappAulaClima}?text=Hola%2C%20me%20interesa%20capacitarme%20en%20sus%20programas`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-600 transition hover:bg-gray-100"
          >
            Solicitar Información
          </a>
        </div>
      </section>
    </div>
  );
}
