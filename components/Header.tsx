"use client";

import Link from "next/link";
import { useState } from "react";
import { config } from "@/lib/config";
import { CartBadge } from "./CartBadge";
import Image from "next/image";

const navItems: Array<{ href: string; label: string; external?: boolean }> = [
  { href: "/productos", label: "Productos" },
  { href: "/donde-comprar", label: "Dónde Comprar" },
  { href: "/service", label: "Service" },
  { href: "/capacitacion", label: "Capacitación" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0" aria-label={config.company.name}>
          <div className="flex items-center">
            <Image
              src={config.company.logo}
              alt={config.company.name}
              width={60}
              height={64}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <CartBadge />

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
