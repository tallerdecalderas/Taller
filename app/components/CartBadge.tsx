"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export function CartBadge() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition font-medium"
    >
      <svg
        className="w-5 h-5"
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
      <span className="ml-2 hidden sm:inline">Mi Consulta</span>

      {/* Badge con cantidad */}
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
