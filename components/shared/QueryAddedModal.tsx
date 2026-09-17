"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Product } from "@/types/product";

interface QueryAddedModalProps {
  product: Product;
  quantity: number;
  onClose: () => void;
}

export function QueryAddedModal({ product, quantity, onClose }: QueryAddedModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="query-added-title"
      >
        <div className="bg-linear-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-amber-300">
                ✓
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-blue-200 uppercase">
                  Consulta actualizada
                </p>
                <h2 id="query-added-title" className="mt-1 text-xl font-bold text-white">
                  Producto agregado
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Cerrar confirmación"
            >
              ×
            </button>
          </div>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{product.name}</p>
            <p className="mt-1 text-sm text-slate-600">
              Cantidad: {quantity} {quantity === 1 ? "unidad" : "unidades"}
            </p>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Podés revisar tu selección en Mi Consulta y enviarla por WhatsApp cuando estés listo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row-reverse">
            <Link
              href="/consulta"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Ver Mi Consulta
            </Link>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Seguir viendo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
