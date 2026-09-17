"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartBadge() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center rounded-lg border-2 border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L21 8H6" />
      </svg>
      <span className="ml-2 hidden sm:inline">Mi Consulta</span>

      {/* Badge con cantidad */}
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs leading-none font-bold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
