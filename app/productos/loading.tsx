import { ProductCardSkeleton } from "@/components/productos/ProductCardSkeleton";

export default function ProductsLoading() {
  return (
    <div aria-label="Cargando catálogo" className="min-h-screen">
      <section className="bg-linear-to-r from-slate-900 to-slate-800 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="h-4 w-24 animate-pulse rounded bg-slate-700" />
          <div className="mt-4 h-10 w-72 animate-pulse rounded bg-slate-700" />
          <div className="mt-3 h-5 w-full max-w-md animate-pulse rounded bg-slate-700" />
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 h-10 w-full max-w-xl animate-pulse rounded-lg bg-slate-200" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="hidden md:col-span-1 md:block">
              <div className="h-64 animate-pulse rounded-lg bg-slate-100" />
            </div>
            <div className="md:col-span-3">
              <div className="mb-8 h-12 w-48 animate-pulse rounded bg-slate-200" />
              <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:grid-cols-3">
                {Array.from({ length: 6 }, (_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
