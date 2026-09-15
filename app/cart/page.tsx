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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/productos" className="text-blue-100 hover:text-white">
              ← Volver al catálogo
            </Link>
          </div>
          <h1 className="text-4xl font-bold">Mi Consulta</h1>
          <p className="text-blue-100">
            Revisa los productos que has seleccionado
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20 space-y-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Resumen de tu Consulta
                  </h2>

                  <div className="space-y-3 py-4 border-y">
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
                          .reduce(
                            (sum, item) =>
                              sum + item.product.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Botón principal */}
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                    </svg>
                    Enviar por WhatsApp
                  </button>

                  {/* Botón secundario */}
                  <button
                    onClick={clearCart}
                    className="w-full py-2 px-4 border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold rounded-lg transition"
                  >
                    Vaciar Consulta
                  </button>

                  {/* Información */}
                  <div className="bg-blue-50 rounded p-4 text-xs text-blue-800">
                    <p className="font-bold mb-2">ℹ️ ¿Cómo funciona?</p>
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
