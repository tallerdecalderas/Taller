import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 px-4">
      <div className="text-center max-w-md">
        {/* Ilustración */}
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Página no encontrada
          </p>
          <p className="text-gray-500 mb-8">
            Lo sentimos, la página que buscas no existe. Quizás fue eliminada o
            el enlace es incorrecto.
          </p>
        </div>

        {/* Sugerencias */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-4">¿Qué puedes hacer?</h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Regresa a la página de inicio</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Explora nuestro catálogo de productos</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Contacta con nosotros por WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            ← Inicio
          </Link>
          <Link
            href="/productos"
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
          >
            Catálogo →
          </Link>
        </div>
      </div>
    </div>
  );
}
