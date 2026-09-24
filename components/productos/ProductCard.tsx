"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/formatMoney";
import { getProductImage } from "@/utils/productImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem(product, 1);

    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <Link href={`/productos/${product.id}`}>
      <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        {/* Imagen del producto */}
        <div className="relative h-48 w-full overflow-hidden bg-white">
          <Image
            src={getProductImage(product.image)}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-300 hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Contenido */}
        <div className="flex grow flex-col p-4">
          {/* Categoría */}
          <span className="mb-2 inline-block w-fit rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
            {product.category}
          </span>

          {/* Nombre */}
          <h3 className="mb-2 line-clamp-2 font-bold text-gray-900 hover:text-blue-600">
            {product.name}
          </h3>

          {/* CODE
          <p className="mb-3 text-xs text-gray-500">CODE: {product.code}</p> */}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Precio y Botón */}
          <div className="mt-auto flex flex-col gap-3 border-t pt-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">
                {formatCurrency(product.price)}
              </span>
            </div>

            {/* Botón Agregar a la consulta*/}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isAdding
                  ? "scale-[0.98] bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
              }`}
            >
              {isAdding ? "✓ Agregado" : "Agregar"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
