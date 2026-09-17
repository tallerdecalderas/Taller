"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getProducts,
  filterProducts,
  getAllCategories,
  getAllBrands,
} from "@/lib/products/product-service";
import { ProductCard } from "@/components/productos/ProductCard";
import { SearchBar } from "@/components/productos/SearchBar";
import { FilterPanel } from "@/components/productos/FilterPanel";
import type { ProductBrand, ProductCategory, ProductFilters } from "@/types/product";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categories = getAllCategories();
  const brands = getAllBrands();
  const quickCategoryLinks = [
    { id: "calderas", label: "Calderas" },
    { id: "calderas_restauradas", label: "Calderas restauradas" },
    { id: "repuestos_genericos", label: "Repuestos genericos" },
    { id: "repuestos", label: "Repuestos" },
    { id: "termostatos", label: "Termostatos" },
    { id: "radiadores", label: "Radiadores" },
    { id: "ventilacion", label: "Ventilación" },
    { id: "accesorios", label: "Accesorios" },
  ];
  const filters = useMemo<ProductFilters>(() => {
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    const searchParam = searchParams.get("search");

    return {
      search: searchParam || undefined,
      category: (categoryParam || undefined) as ProductCategory | undefined,
      brand: (brandParam || undefined) as ProductBrand | undefined,
    };
  }, [searchParams]);

  const updateFilter = (key: "search" | "category" | "brand", value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    const query = params.toString();
    router.push(query ? `/productos?${query}` : "/productos");
  };

  const filteredProducts = useMemo(() => {
    return filterProducts(filters);
  }, [filters]);

  const handleSearch = (searchTerm: string) => {
    updateFilter("search", searchTerm || undefined);
  };

  const handleCategoryChange = (category: string) => {
    updateFilter("category", category || undefined);
  };

  const handleBrandChange = (brand: string) => {
    updateFilter("brand", brand || undefined);
  };

  const hasActiveFilters = !!(filters.search || filters.category || filters.brand);

  return (
    <div>
      {/* Encabezado */}
      <section className="bg-linear-to-r from-slate-900 to-slate-800 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">
            Catálogo
          </p>
          <h1 className="mb-2 text-4xl font-bold">Nuestro Catálogo</h1>
          <p className="text-blue-100">
            Explora por familia de productos y encontrá la solución que necesitás.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {quickCategoryLinks.map((item) => (
            <Link
              key={item.id}
              href={`/productos?category=${encodeURIComponent(item.id)}`}
              className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                filters.category === item.id
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Contenido principal */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Buscador */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Grid: Filtros + Productos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Panel de Filtros - Sidebar */}
            <div className="md:col-span-1">
              <FilterPanel
                categories={categories}
                brands={brands}
                onCategoryChange={handleCategoryChange}
                onBrandChange={handleBrandChange}
                selectedCategory={filters.category}
                selectedBrand={filters.brand}
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
                  <p className="text-sm text-gray-600">
                    {hasActiveFilters && (
                      <>
                        <span className="font-medium">
                          {filteredProducts.length} de {getProducts().length}
                        </span>{" "}
                        productos coinciden con tus filtros
                      </>
                    )}
                    {!hasActiveFilters && <span>Todos nuestros productos disponibles</span>}
                  </p>
                </div>
              </div>

              {/* Grid de productos */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg bg-white py-16 text-center">
                  <svg
                    className="mx-auto mb-4 h-16 w-16 text-gray-400"
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
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    No hay productos que coincidan
                  </h3>
                  <p className="mb-6 text-gray-600">Intenta ajustar tus filtros o búsqueda</p>
                  <button
                    onClick={() => router.push("/productos")}
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
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
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">¿No encuentras lo que buscas?</h2>
          <p className="mb-6 text-gray-600">
            Contáctanos por WhatsApp para consultar sobre otros productos o hacer pedidos
            personalizados
          </p>
          <a
            href="https://wa.me/?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 font-bold text-white transition hover:bg-green-600"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
