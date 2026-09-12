import Link from "next/link";
import { config } from "@/lib/config";
import { products, getCategories } from "@/lib/data/products";

export default function Home() {
  const categories = getCategories();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {config.company.name}
          </h1>
          <p className="text-lg md:text-xl mb-4 text-blue-50 max-w-2xl mx-auto">
            Descubre nuestro catálogo de productos de calidad. Disponibles para
            consulta directa por WhatsApp.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              Ver Catálogo
            </Link>
            <a
              href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20sus%20productos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegir nuestros productos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Productos seleccionados cuidadosamente para tu satisfacción
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Contacto Rápido</h3>
              <p className="text-gray-600">
                Consulta directa por WhatsApp, sin intermediarios
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mejores Precios</h3>
              <p className="text-gray-600">
                Ofertas especiales y presupuestos personalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nuestras Categorías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center hover:bg-blue-50"
              >
                <div className="text-4xl mb-2">📦</div>
                <h3 className="font-bold text-gray-900 hover:text-blue-600">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Productos Destacados
            </h2>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-bold"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.available ? (
                        <span className="text-green-600 font-bold text-sm">
                          Disponible
                        </span>
                      ) : (
                        <span className="text-red-600 font-bold text-sm">
                          Agotado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para explorar?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Consulta nuestro catálogo completo y contáctanos por WhatsApp para
            conocer nuestras ofertas especiales.
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
          >
            Ir al Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}
