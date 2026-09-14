"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types/product";
import { QuantitySelector } from "../shared/QuantitySelector";
import { config } from "@/lib/config";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!product.available) {
      return;
    }

    addItem(product, quantity);
    window.alert(
      `✅ ${product.name} se agregó a tu consulta.\n\nPodés revisarla en "Mi Consulta" y enviarla por WhatsApp.`
    );
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa el producto "${product.name}" (CODE: ${product.code}). Cantidad: ${quantity}. Precio unitario: $${product.price.toFixed(2)}. Total: $${(product.price * quantity).toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.company.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {/* Imagen del producto */}
      <div className="flex flex-col">
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-4 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {!product.available && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Agotado</span>
            </div>
          )}
        </div>

        {/* Información adicional de imágenes si existen */}
        {product.images && product.images.length > 0 && (
          <div className="flex gap-2">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-white rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
              >
                <Image
                  src={img}
                  alt={`${product.name} - Imagen ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full p-1"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detalles del producto */}
      <div className="flex flex-col">
        {/* Categoría y disponibilidad */}
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">
            {product.category}
          </span>
          <span
            className={`font-semibold text-sm ${
              product.available
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.available ? "✓ Disponible" : "✗ Agotado"}
          </span>
        </div>

        {/* Nombre del producto */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>

        {/* CODE */}
        <p className="text-gray-500 text-sm mb-4">CODE: {product.code}</p>

        {/* Descripción */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Características:</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stock */}
        {product.stock !== undefined && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Stock disponible: <span className="font-bold text-blue-600">{product.stock} unidades</span>
            </p>
          </div>
        )}

        {/* Precio */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <p className="text-gray-600 mb-2">Precio unitario</p>
          <p className="text-4xl font-bold text-blue-600 mb-3">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700">
            Total por {quantity} {quantity === 1 ? "unidad" : "unidades"}:{" "}
            <span className="font-bold text-lg">
              ${(product.price * quantity).toFixed(2)}
            </span>
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
            className={`w-full py-4 px-6 rounded-lg font-bold text-white transition flex items-center justify-center gap-2 ${
              product.available
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed opacity-50"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.2 2.4A1 1 0 0 0 6.7 17h10.8M9 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            Agregar a la consulta
          </button>

          <button
            onClick={handleWhatsAppClick}
            disabled={!product.available}
            className={`w-full py-4 px-6 rounded-lg font-bold text-white transition flex items-center justify-center gap-2 ${
              product.available
                ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed opacity-50"
            }`}
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

          {!product.available && (
            <div className="w-full py-3 px-6 rounded-lg bg-gray-100 text-center text-gray-600 font-medium">
              Producto agotado
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Detalles de la consulta</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>
                Al hacer clic en "Consultar por WhatsApp", se abrirá la app de
                WhatsApp con tu consulta prellenada
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>
                Podrás ajustar la cantidad antes de enviar el mensaje
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>
                Nuestro equipo responderá a tu consulta en horario comercial
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
