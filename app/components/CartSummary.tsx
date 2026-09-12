"use client";

import { CartItem } from "@/lib/types/product";
import Link from "next/link";

interface CartSummaryProps {
  items: CartItem[];
  onRemoveItem?: (productId: string) => void;
  onUpdateQuantity?: (productId: string, quantity: number) => void;
  showCheckout?: boolean;
}

export function CartSummary({
  items,
  onRemoveItem,
  onUpdateQuantity,
  showCheckout = true,
}: CartSummaryProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Carrito vacío</h3>
        <p className="text-gray-600 mb-6">No tienes productos seleccionados</p>
        <Link
          href="/products"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Listado de items */}
      <div className="bg-white rounded-lg shadow divide-y">
        {items.map((item) => (
          <div key={item.product.id} className="p-4 flex gap-4">
            {/* Imagen */}
            <div className="w-20 h-20 flex-shrink-0 rounded bg-gray-200 overflow-hidden">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información */}
            <div className="flex-grow">
              <Link
                href={`/products/${item.product.id}`}
                className="font-bold text-gray-900 hover:text-blue-600"
              >
                {item.product.name}
              </Link>
              <p className="text-sm text-gray-600">SKU: {item.product.sku}</p>
              <p className="text-blue-600 font-bold mt-1">
                ${item.product.price.toFixed(2)}
              </p>
            </div>

            {/* Cantidad y acciones */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() =>
                    onUpdateQuantity?.(item.product.id, item.quantity - 1)
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="px-3 py-1 font-bold">{item.quantity}</span>
                <button
                  onClick={() =>
                    onUpdateQuantity?.(item.product.id, item.quantity + 1)
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <p className="font-bold text-gray-900">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => onRemoveItem?.(item.product.id)}
                className="text-red-600 hover:text-red-700 text-xs font-bold"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen total */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-gray-900">Cantidad de productos:</span>
          <span className="font-bold text-lg">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>
        <div className="border-t border-blue-200 pt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Total:</span>
          <span className="text-3xl font-bold text-blue-600">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Nota informativa */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        <p>
          <span className="font-bold">ℹ️ Nota:</span> Este es un presupuesto estimado.
          El precio final será confirmado por nuestro equipo tras revisar tu
          consulta.
        </p>
      </div>
    </div>
  );
}
