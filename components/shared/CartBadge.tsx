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
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        suppressHydrationWarning
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
        <span className="absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs leading-none font-bold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
