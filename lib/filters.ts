/**
 * Funciones de filtrado para productos
 * Todo el filtrado se ejecuta del lado del cliente (client-side)
 */

import { Product, Filter } from "@/lib/types/product";

/**
 * Filtrar productos por búsqueda de texto
 * Busca en nombre, descripción, categoría, SKU y tags
 */
export function filterBySearch(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) return products;

  const term = searchTerm.toLowerCase();
  return products.filter((product) => {
    const searchFields = [
      product.name,
      product.description,
      product.shortDescription,
      product.category,
      product.sku,
      ...(product.tags || []),
    ];

    return searchFields.some((field) =>
      field?.toLowerCase().includes(term)
    );
  });
}

/**
 * Filtrar productos por categoría
 */
export function filterByCategory(
  products: Product[],
  category: string
): Product[] {
  if (!category) return products;
  return products.filter((product) => product.category === category);
}

/**
 * Filtrar productos por rango de precio
 */
export function filterByPriceRange(
  products: Product[],
  minPrice?: number,
  maxPrice?: number
): Product[] {
  return products.filter((product) => {
    if (minPrice !== undefined && product.price < minPrice) return false;
    if (maxPrice !== undefined && product.price > maxPrice) return false;
    return true;
  });
}

/**
 * Filtrar productos por disponibilidad
 */
export function filterByAvailability(
  products: Product[],
  availableOnly: boolean
): Product[] {
  if (!availableOnly) return products;
  return products.filter((product) => product.available);
}

/**
 * Filtrar por múltiples criterios
 */
export function applyFilters(products: Product[], filters: Filter): Product[] {
  let filtered = products;

  // Aplicar búsqueda
  if (filters.search) {
    filtered = filterBySearch(filtered, filters.search);
  }

  // Aplicar categoría
  if (filters.category) {
    filtered = filterByCategory(filtered, filters.category);
  }

  // Aplicar rango de precio
  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    filtered = filterByPriceRange(
      filtered,
      filters.minPrice,
      filters.maxPrice
    );
  }

  // Aplicar disponibilidad
  if (filters.availability) {
    filtered = filterByAvailability(filtered, true);
  }

  return filtered;
}

/**
 * Obtener estadísticas de filtrados
 */
export function getFilterStats(products: Product[], filters: Filter) {
  const filtered = applyFilters(products, filters);
  return {
    total: products.length,
    filtered: filtered.length,
    hasResults: filtered.length > 0,
  };
}
