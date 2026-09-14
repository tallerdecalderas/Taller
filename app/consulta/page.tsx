"use client";

import Link from "next/link";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/context/CartContext";
import { generateWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";

export default function ConsultaPage() {
  const { items, removeItem, updateQuantity } = useCart();

  const handleSendToWhatsApp = () => {
    if (items.length === 0) {
      return;
    }

    openWhatsApp(generateWhatsAppMessage(items));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Volver
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tu Consulta
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Revisa los productos seleccionados y envía tu consulta por WhatsApp
          </p>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrito Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Productos Seleccionados
              </h2>
              <CartSummary 
                items={items}
                onRemoveItem={removeItem}
                onUpdateQuantity={updateQuantity}
              />
            </div>
          </div>

          {/* Panel Lateral */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enviar Consulta
              </h3>
              
              <p className="text-gray-600 text-sm mb-6">
                Revisa tu selección y contacta por WhatsApp para coordinar detalles y formas de pago.
              </p>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition mb-4 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
                </svg>
                WhatsApp
              </button>

              <Link
                href="/productos"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Seguir Comprando
              </Link>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4">
                  ℹ️ Este es un carrito temporal. Los productos se guardarán solo en esta sesión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
