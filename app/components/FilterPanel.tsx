"use client";

import { useState } from "react";
import { config } from "@/lib/config";
import { FilterButton } from "./FilterButton";

interface FilterPanelProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onPriceChange: (minPrice?: number, maxPrice?: number) => void;
  onAvailabilityChange: (availableOnly: boolean) => void;
  selectedCategory?: string;
  selectedPriceRange?: { min?: number; max?: number };
  showAvailabilityOnly?: boolean;
}

export function FilterPanel({
  categories,
  onCategoryChange,
  onPriceChange,
  onAvailabilityChange,
  selectedCategory,
  selectedPriceRange,
  showAvailabilityOnly = false,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-6">
      {/* Encabezado y toggle en mobile */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          {isOpen ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {/* Contenido de filtros */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Filtro por Categoría */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Categoría</h3>
            <div className="space-y-2">
              <FilterButton
                label="Todas"
                active={!selectedCategory}
                onClick={() => onCategoryChange("")}
              />
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  label={category}
                  active={selectedCategory === category}
                  onClick={() => onCategoryChange(category)}
                />
              ))}
            </div>
          </div>

          {/* Filtro por Precio */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-gray-900 mb-3">Rango de Precio</h3>
            <div className="space-y-2">
              {config.filters.priceRanges.map((range, idx) => (
                <FilterButton
                  key={idx}
                  label={range.label}
                  active={
                    selectedPriceRange?.min === range.min &&
                    selectedPriceRange?.max === range.max
                  }
                  onClick={() =>
                    onPriceChange(range.min, range.max)
                  }
                />
              ))}
              <FilterButton
                label="Todos los precios"
                active={
                  !selectedPriceRange?.min &&
                  !selectedPriceRange?.max
                }
                onClick={() => onPriceChange(undefined, undefined)}
              />
            </div>
          </div>

          {/* Filtro por Disponibilidad */}
          <div className="border-t border-gray-200 pt-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailabilityOnly}
                onChange={(e) => onAvailabilityChange(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 font-medium">
                Solo disponibles
              </span>
            </label>
          </div>

          {/* Botón Limpiar Filtros */}
          <div className="border-t border-gray-200 pt-6">
            <button
              onClick={() => {
                onCategoryChange("");
                onPriceChange(undefined, undefined);
                onAvailabilityChange(false);
              }}
              className="w-full py-2 px-4 text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
