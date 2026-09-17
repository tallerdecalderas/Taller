import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 px-4">
      <div className="max-w-md text-center">
        {/* Ilustración */}
        <div className="mb-8">
          <div className="mb-4 text-6xl">🔍</div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900">404</h1>
          <p className="mb-2 text-xl text-gray-600">Página no encontrada</p>
          <p className="mb-8 text-gray-500">
            Lo sentimos, la página que buscas no existe. Quizás fue eliminada o el enlace es
            incorrecto.
          </p>
        </div>

        {/* Sugerencias */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 font-bold text-gray-900">¿Qué puedes hacer?</h2>
          <ul className="space-y-3 text-left text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Regresa a la página de inicio</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Explora nuestro catálogo de productos</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Contacta con nosotros por WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            ← Inicio
          </Link>
          <Link
            href="/productos"
            className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Catálogo →
          </Link>
        </div>
      </div>
    </div>
  );
}
