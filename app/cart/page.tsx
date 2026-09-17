"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartSummary } from "@/components/cart/CartSummary";
import { QueryAddedModal } from "@/components/shared/QueryAddedModal";
import { generateWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  const handleSendToWhatsApp = () => {
    if (items.length === 0) {
      setShowEmptyCartModal(true);
      return;
    }

    const message = generateWhatsAppMessage(items);
    openWhatsApp(message);
  };

  return (
    <>
    <div>
      {/* Encabezado */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-2">
            <Link href="/productos" className="text-blue-100 hover:text-white">
              ← Volver al catálogo
            </Link>
          </div>
          <h1 className="text-4xl font-bold">Mi Consulta</h1>
          <p className="text-blue-100">Revisa los productos que has seleccionado</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Carrito principal */}
            <div className="lg:col-span-2">
              <CartSummary
                items={items}
                onRemoveItem={removeItem}
                onUpdateQuantity={updateQuantity}
              />
            </div>

            {/* Sidebar con acciones */}
            {items.length > 0 && (
              <div className="lg:col-span-1">
                <div className="sticky top-20 space-y-4 rounded-lg bg-white p-6 shadow-lg">
                  <h2 className="text-xl font-bold text-gray-900">Resumen de tu Consulta</h2>

                  <div className="space-y-3 border-y py-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Productos:</span>
                      <span className="font-bold">
                        {items.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Líneas:</span>
                      <span className="font-bold">{items.length}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-blue-600">
                      <span>Total:</span>
                      <span>
                        $
                        {items
                          .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Botón principal */}
                  <button
                    onClick={handleSendToWhatsApp}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
                  >
                    <svg
                      className="h-6 w-6 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.85 11.85 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.9 0-3.18-1.23-6.16-3.41-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.03 2.92 9.9 9.9 0 0 1 2.91 7.05c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                    Enviar por WhatsApp
                  </button>

                  {/* Botón secundario */}
                  <button
                    onClick={clearCart}
                    className="w-full rounded-lg border-2 border-red-500 px-4 py-2 font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Vaciar Consulta
                  </button>

                  {/* Información */}
                  <div className="rounded bg-blue-50 p-4 text-xs text-blue-800">
                    <p className="mb-2 font-bold">ℹ️ ¿Cómo funciona?</p>
                    <ul className="space-y-1">
                      <li>• Al hacer clic, se abrirá WhatsApp con tu consulta</li>
                      <li>• Puedes editar el mensaje antes de enviar</li>
                      <li>• Nuestro equipo responderá a la brevedad</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    {showEmptyCartModal && (
      <QueryAddedModal
        onClose={() => setShowEmptyCartModal(false)}
        eyebrow="Mi Consulta"
        title="Todavía no hay productos"
        message="Agregá un producto desde el catálogo para poder enviarnos tu consulta por WhatsApp."
      />
    )}
    </>
  );
}
