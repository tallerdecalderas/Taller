"use client";

import { useState } from "react";

interface FilterPanelProps {
  categories: string[];
  brands: string[];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  selectedCategory?: string;
  selectedBrand?: string;
}

export function FilterPanel({
  categories,
  brands,
  onCategoryChange,
  onBrandChange,
  selectedCategory,
  selectedBrand,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm md:px-4 md:py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
          </span>
          <h2 className="text-base font-bold text-slate-900 md:text-lg">Filtros</h2>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 md:hidden"
        >
          {isOpen ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:p-5">
          <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 md:p-3.5">
            <label htmlFor="category-filter" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              Categoría
            </label>
            <select
              id="category-filter"
              value={selectedCategory || ""}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Todas</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 md:p-3.5">
            <label htmlFor="brand-filter" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              Marca
            </label>
            <select
              id="brand-filter"
              value={selectedBrand || ""}
              onChange={(e) => onBrandChange(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Todas</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              onCategoryChange("");
              onBrandChange("");
            }}
            className="w-full rounded-xl border border-blue-600 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 md:py-3"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
