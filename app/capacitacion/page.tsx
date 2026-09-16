import Link from "next/link";
import { config } from "@/utils/config";

export default function CapacitacionPage() {
  const courses = [
    {
      title: "Instalación de Calderas",
      duration: "8 horas",
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
      duration: "6 horas",
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
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              ← Inicio
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Capacitación Profesional</h1>
          <p className="text-xl text-gray-300">
            Programas de entrenamiento para profesionales e instaladores
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introducción */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Programas de Capacitación</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ofrecemos programas integrales de capacitación para profesionales que deseen mejorar sus habilidades 
              en instalación, mantenimiento y reparación de equipos de climatización y calefacción.
            </p>
          </div>

          {/* Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-t-4 border-blue-600">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  
                  <div className="flex gap-4 mb-6 pb-6 border-b">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Duración</p>
                      <p className="text-lg font-bold text-blue-600">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Precio</p>
                      <p className="text-lg font-bold text-green-600">{course.price}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-semibold mb-3">Temas Cubiertos</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex gap-2 text-gray-700">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Dirigido a:</span> {course.audience}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20me%20interesa%20el%20curso%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                    </svg>
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Beneficios */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios de Nuestros Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">¿Cuáles son los requisitos para participar?</h3>
                <p className="text-gray-700">
                  No se requiere experiencia previa. Solo necesitas estar interesado en aprender sobre sistemas de climatización y calefacción.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">¿Los cursos incluyen material de estudio?</h3>
                <p className="text-gray-700">
                  Sí, incluyen manual de capacitación, apuntes técnicos y acceso a recursos en línea.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">¿Se ofrecen cursos personalizados para empresas?</h3>
                <p className="text-gray-700">
                  Sí, podemos diseñar programas de capacitación personalizados según las necesidades de tu empresa. Contáctanos para más información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para mejorar tus habilidades?</h2>
          <p className="text-xl mb-8 text-green-100">
            Consulta sobre disponibilidad de cursos y fechas de próximas capacitaciones
          </p>
          <a
            href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20me%20interesa%20capacitarme%20en%20sus%20programas`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Solicitar Información
          </a>
        </div>
      </section>
    </div>
  );
}
