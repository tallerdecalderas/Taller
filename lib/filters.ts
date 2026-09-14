/**
 * Funciones de filtrado para productos
 * 
 * NOTA: La mayoría de esta lógica ha sido movida a product-service.ts
 * Este archivo se mantiene por compatibilidad hacia atrás
 * Preferir usar filterProducts() de product-service.ts
 */

import type { Product, ProductFilters } from "@/lib/types/product";
// import { filterProducts } from "@/lib/products/product-service";
/**
 * Filtrar productos por búsqueda de texto
 * Busca en nombre, CODE
 */
export function filterBySearch(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) return products;

  const term = searchTerm.toLowerCase();
  return products.filter((product) => {
    const searchFields = [
      product.name,
      product.code,
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
 * Filtrar por múltiples criterios
 * @deprecated Usar filterProducts() de product-service.ts en su lugar
 */
export function applyFilters(products: Product[], filters: ProductFilters): Product[] {
  let filtered = products;

  // Aplicar búsqueda
  if (filters.search) {
    filtered = filterBySearch(filtered, filters.search);
  }

  // Aplicar categoría
  if (filters.category) {
    filtered = filterByCategory(filtered, filters.category);
  }

  // Aplicar marca
  if (filters.brand) {
    filtered = filtered.filter((product) => product.brand === filters.brand);
  }

  return filtered;
}

/**
 * Obtener estadísticas de filtrados
 * @deprecated Usar filterProducts() de product-service.ts en su lugar
 */
export function getFilterStats(products: Product[], filters: ProductFilters) {
  const filtered = applyFilters(products, filters);
  return {
    total: products.length,
    filtered: filtered.length,
    hasResults: filtered.length > 0,
  };
}
