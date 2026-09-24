"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/productos/ProductCard";
import { SearchBar } from "@/components/productos/SearchBar";
import { FilterPanel } from "@/components/productos/FilterPanel";
import { ProductPagination } from "@/components/productos/ProductPagination";
import type { Product, ProductBrand, ProductCategory, ProductFilters } from "@/types/product";
import { config } from "@/utils/config";

interface ProductsCatalogProps {
  products: Product[];
}

function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText = [
        product.name,
        product.description,
        product.shortDescription,
        product.brand,
        product.category,
        product.code,
        ...(product.tags ?? []),
        ...(product.specs?.compatibleModels ?? []),
      ]
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(searchTerm)) return false;
    }

    return true;
  });
}

export function ProductsCatalog({ products }: ProductsCatalogProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const brands = Array.from(new Set(products.map((product) => product.brand)));
  const filters = useMemo<ProductFilters>(
    () => ({
      search: searchParams.get("search") || undefined,
      category: (searchParams.get("category") || undefined) as ProductCategory | undefined,
      brand: (searchParams.get("brand") || undefined) as ProductBrand | undefined,
    }),
    [searchParams],
  );
  const filteredProducts = useMemo(() => filterProducts(products, filters), [products, filters]);
  const requestedPage = Number.parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / config.pagination.itemsPerPage),
  );
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * config.pagination.itemsPerPage,
    currentPage * config.pagination.itemsPerPage,
  );

  const updateFilter = (key: "search" | "category" | "brand", value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete("page");
    const query = params.toString();
    router.push(query ? `/productos?${query}` : "/productos");
  };

  const quickCategoryLinks = [
    { id: "calderas", label: "Calderas" },
    { id: "calderas_de_outlets", label: "Calderas de outlets" },
    { id: "repuestos_genericos", label: "Repuestos genericos" },
    { id: "repuestos", label: "Repuestos" },
    { id: "termostatos", label: "Termostatos" },
    { id: "radiadores", label: "Radiadores" },
    { id: "ventilacion", label: "Ventilación" },
    { id: "accesorios", label: "Accesorios" },
  ];
  const hasActiveFilters = Boolean(filters.search || filters.category || filters.brand);

  return (
    <div>
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

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <SearchBar onSearch={(value) => updateFilter("search", value || undefined)} />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <FilterPanel
                categories={categories}
                brands={brands}
                onCategoryChange={(value) => updateFilter("category", value || undefined)}
                onBrandChange={(value) => updateFilter("brand", value || undefined)}
                selectedCategory={filters.category}
                selectedBrand={filters.brand}
              />
            </div>
            <div className="md:col-span-3">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {hasActiveFilters
                      ? `${filteredProducts.length} de ${products.length} productos coinciden con tus filtros`
                      : "Todos nuestros productos disponibles"}
                  </p>
                </div>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:grid-cols-3">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg bg-white py-16 text-center">
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
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                query={searchParams.toString()}
              />
            </div>
          </div>
        </div>
      </section>

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
