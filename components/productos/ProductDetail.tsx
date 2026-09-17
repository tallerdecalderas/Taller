"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types/product";
import { QuantitySelector } from "../shared/QuantitySelector";
import { QueryAddedModal } from "../shared/QueryAddedModal";
import { config } from "@/utils/config";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedModal, setShowAddedModal] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!product.available) {
      return;
    }

    addItem(product, quantity);
    setShowAddedModal(true);
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa el producto "${product.name}" (CODE: ${product.code}). Cantidad: ${quantity}. Precio unitario: $${product.price.toFixed(2)}. Total: $${(product.price * quantity).toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.company.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
        {/* Imagen del producto */}
        <div className="flex flex-col">
          <div className="relative mb-4 h-96 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {!product.available && (
              <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black">
                <span className="text-2xl font-bold text-white">Agotado</span>
              </div>
            )}
          </div>

          {/* Información adicional de imágenes si existen */}
          {product.images && product.images.length > 0 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="h-20 w-20 cursor-pointer rounded bg-white hover:ring-2 hover:ring-blue-500"
                >
                  <Image
                    src={img}
                    alt={`${product.name} - Imagen ${idx + 1}`}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detalles del producto */}
        <div className="flex flex-col">
          {/* Categoría y disponibilidad */}
          <div className="mb-4 flex items-center gap-4">
            <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              {product.category}
            </span>
            <span
              className={`text-sm font-semibold ${
                product.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.available ? "✓ Disponible" : "✗ Agotado"}
            </span>
          </div>

          {/* Nombre del producto */}
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">{product.name}</h1>

          {/* CODE */}
          <p className="mb-4 text-sm text-gray-500">CODE: {product.code}</p>

          {/* Descripción */}
          <p className="mb-6 text-lg leading-relaxed text-gray-700">{product.description}</p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-2 font-semibold text-gray-900">Características:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stock */}
          {product.stock !== undefined && (
            <div className="mb-6 rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-gray-600">
                Stock disponible:{" "}
                <span className="font-bold text-blue-600">{product.stock} unidades</span>
              </p>
            </div>
          )}

          {/* Precio */}
          <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6">
            <p className="mb-2 text-gray-600">Precio unitario</p>
            <p className="mb-3 text-4xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-700">
              Total por {quantity} {quantity === 1 ? "unidad" : "unidades"}:{" "}
              <span className="text-lg font-bold">${(product.price * quantity).toFixed(2)}</span>
            </p>
          </div>

          {/* Selector de cantidad */}
          <div className="mb-8">
            <QuantitySelector
              max={product.stock || 100}
              initialQuantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.available}
              className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold text-white transition ${
                product.available
                  ? "cursor-pointer bg-blue-600 hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-400 opacity-50"
              }`}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.2 2.4A1 1 0 0 0 6.7 17h10.8M9 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              Agregar a la consulta
            </button>

            <button
              onClick={handleWhatsAppClick}
              disabled={!product.available}
              className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold text-white transition ${
                product.available
                  ? "cursor-pointer bg-green-500 hover:bg-green-600"
                  : "cursor-not-allowed bg-gray-400 opacity-50"
              }`}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
              </svg>
              Enviar por WhatsApp
            </button>

            {!product.available && (
              <div className="w-full rounded-lg bg-gray-100 px-6 py-3 text-center font-medium text-gray-600">
                Producto agotado
              </div>
            )}
          </div>

          {/* Información adicional */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-bold text-gray-900">Detalles de la consulta</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>
                  Al hacer clic en "Consultar por WhatsApp", se abrirá la app de WhatsApp con tu
                  consulta prellenada
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Podrás ajustar la cantidad antes de enviar el mensaje</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Nuestro equipo responderá a tu consulta en horario comercial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showAddedModal && (
        <QueryAddedModal
          product={product}
          quantity={quantity}
          onClose={() => setShowAddedModal(false)}
        />
      )}
    </>
  );
}
