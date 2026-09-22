"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { QuantitySelector } from "../shared/QuantitySelector";
import { QueryAddedModal } from "../shared/QueryAddedModal";
import { config } from "@/utils/config";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/formatMoney";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedModal, setShowAddedModal] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
    setShowAddedModal(true);
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa el producto "${product.name}" (CODE: ${product.code}). Cantidad: ${quantity}. Precio unitario: ${formatCurrency(product.price)}. Total: ${formatCurrency(product.price * quantity)}`;

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
          {/* Categoría */}
          <div className="mb-4 flex items-center gap-4">
            <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              {product.category}
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

          {/* Precio */}
          <div className="mb-8 rounded-lg bg-linear-to-r from-blue-50 to-purple-50 p-6">
            <p className="mb-2 text-gray-600">Precio unitario</p>
            <p className="mb-3 text-4xl font-bold text-blue-600">{formatCurrency(product.price)}</p>
            <p className="text-gray-700">
              Total por {quantity} {quantity === 1 ? "unidad" : "unidades"}:{" "}
              <span className="text-lg font-bold">{formatCurrency(product.price * quantity)}</span>
            </p>
          </div>

          {/* Selector de cantidad */}
          <div className="mb-8">
            <QuantitySelector max={100} initialQuantity={quantity} onQuantityChange={setQuantity} />
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 6h16l-2 8H8L6 3H3" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="18" cy="19" r="1" />
              </svg>
              Agregar a la consulta
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
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
