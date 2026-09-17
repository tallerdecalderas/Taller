"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { generateSingleProductMessage, openWhatsApp } from "@/lib/whatsapp";
import { QueryAddedModal } from "@/components/shared/QueryAddedModal";
import { useState } from "react";

interface WhatsAppButtonProps {
  product: Product;
  quantity: number;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({
  product,
  quantity,
  variant = "primary",
  size = "md",
}: WhatsAppButtonProps) {
  const { addItem } = useCart();
  const [showAddedModal, setShowAddedModal] = useState(false);

  const handleClick = () => {
    // Agregar al carrito
    addItem(product, quantity);

    setShowAddedModal(true);
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition",
    secondary:
      "bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold rounded-lg transition",
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={!product.available}
        className={`flex items-center justify-center gap-2 ${
          variantClasses[variant]
        } ${sizeClasses[size]} ${!product.available ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.779c0 2.678.735 5.309 2.126 7.565L2.957 22l8.041-2.11a9.86 9.86 0 004.712 1.2h.005c5.451 0 9.876-4.429 9.876-9.882 0-2.646-.744-5.125-2.162-7.257A9.841 9.841 0 0011.051 6.979" />
        </svg>
        <span>Agregar a Consulta</span>
      </button>
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

/**
 * Variante directa que envía al WhatsApp inmediatamente
 */
export function WhatsAppDirectButton({
  product,
  quantity,
  variant = "primary",
  size = "md",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = generateSingleProductMessage(
      product.name,
      product.code,
      product.price,
      quantity,
    );
    openWhatsApp(message);
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition",
    secondary:
      "bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold rounded-lg transition",
  };

  return (
    <button
      onClick={handleClick}
      disabled={!product.available}
      className={`flex items-center justify-center gap-2 ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${!product.available ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <span>Consultar por WhatsApp</span>
    </button>
  );
}
