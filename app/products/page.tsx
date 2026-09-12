"use client";

import { useState, useMemo } from "react";
import { products, getCategories } from "@/lib/data/products";
import { ProductCard } from "@/app/components/ProductCard";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterPanel } from "@/app/components/FilterPanel";
import { applyFilters } from "@/lib/filters";
import { Filter } from "@/lib/types/product";

export default function ProductsPage() {
  const categories = getCategories();
  const [filters, setFilters] = useState<Filter>({
    search: "",
    category: "",
    minPrice: undefined,
    maxPrice: undefined,
    availability: false,
  });

  // Filtrar productos basado en los filtros activos
  const filteredProducts = useMemo(() => {
    return applyFilters(products, filters);
  }, [filters]);

  const handleSearch = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, search: searchTerm }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handlePriceChange = (minPrice?: number, maxPrice?: number) => {
    setFilters((prev) => ({ ...prev, minPrice, maxPrice }));
  };

  const handleAvailabilityChange = (availableOnly: boolean) => {
    setFilters((prev) => ({ ...prev, availability: availableOnly }));
  };

  const hasActiveFilters =
    filters.search ||
    filters.category ||
    filters.minPrice !== undefined ||
    filters.maxPrice !== undefined ||
    filters.availability;

  return (
    <div>
      {/* Encabezado */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Nuestro Catálogo</h1>
          <p className="text-blue-100">
            Explora nuestros productos y selecciona los que te interesan
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Buscador */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Grid: Filtros + Productos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Panel de Filtros - Sidebar */}
            <div className="md:col-span-1">
              <FilterPanel
                categories={categories}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onAvailabilityChange={handleAvailabilityChange}
                selectedCategory={filters.category}
                selectedPriceRange={{
                  min: filters.minPrice,
                  max: filters.maxPrice,
                }}
                showAvailabilityOnly={filters.availability}
              />
            </div>

            {/* Grid de Productos */}
            <div className="md:col-span-3">
              {/* Resumen de resultados */}
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredProducts.length} producto
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {hasActiveFilters && (
                      <>
                        <span className="font-medium">
                          {filteredProducts.length} de {products.length}
                        </span>{" "}
                        productos coinciden con tus filtros
                      </>
                    )}
                    {!hasActiveFilters && (
                      <span>Todos nuestros productos disponibles</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Grid de productos */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No hay productos que coincidan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Intenta ajustar tus filtros o búsqueda
                  </p>
                  <button
                    onClick={() => {
                      setFilters({
                        search: "",
                        category: "",
                        minPrice: undefined,
                        maxPrice: undefined,
                        availability: false,
                      });
                    }}
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 mb-6">
            Contáctanos por WhatsApp para consultar sobre otros productos o
            hacer pedidos personalizados
          </p>
          <a
            href="https://wa.me/?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
