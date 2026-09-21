"use client";

import { CartItem } from "@/types/product";
import Link from "next/link";
import { formatCurrency } from "@/utils/formatMoney";

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
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h3 className="mb-2 text-lg font-bold text-gray-900">Carrito vacío</h3>
        <p className="mb-6 text-gray-600">No tienes productos seleccionados</p>
        <Link
          href="/productos"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Listado de items */}
      <div className="divide-y rounded-lg bg-white shadow">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-4 p-4">
            {/* Imagen */}
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-white">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-full w-full object-contain p-1"
              />
            </div>

            {/* Información */}
            <div className="flex-grow">
              <Link
                href={`/productos/${item.product.id}`}
                className="font-bold text-gray-900 hover:text-blue-600"
              >
                {item.product.name}
              </Link>
              <p className="text-sm text-gray-600">CODE: {item.product.code}</p>
              <p className="mt-1 font-bold text-blue-600">{formatCurrency(item.product.price)}</p>
            </div>

            {/* Cantidad y acciones */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center rounded border border-gray-300">
                <button
                  onClick={() => onUpdateQuantity?.(item.product.id, item.quantity - 1)}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="px-3 py-1 font-bold">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity?.(item.product.id, item.quantity + 1)}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <p className="font-bold text-gray-900">
                {formatCurrency(item.product.price * item.quantity)}
              </p>

              <button
                onClick={() => onRemoveItem?.(item.product.id)}
                className="text-xs font-bold text-red-600 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen total */}
      <div className="rounded-lg bg-blue-50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-bold text-gray-900">Cantidad de productos:</span>
          <span className="text-lg font-bold">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-blue-200 pt-4">
          <span className="text-lg font-bold text-gray-900">Total:</span>
          <span className="text-3xl font-bold text-blue-600">{formatCurrency(total)}</span>
        </div>
      </div>

      {/* Nota informativa */}
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
        <p>
          <span className="font-bold">ℹ️ Nota:</span> Este es un presupuesto estimado. El precio
          final será confirmado por nuestro equipo tras revisar tu consulta.
        </p>
      </div>
    </div>
  );
}
