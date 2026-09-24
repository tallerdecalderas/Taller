import Link from "next/link";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

export function ProductPagination({ currentPage, totalPages, query }: ProductPaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(query);
    if (page === 1) params.delete("page");
    else params.set("page", String(page));
    const nextQuery = params.toString();
    return nextQuery ? `/productos?${nextQuery}` : "/productos";
  };

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Paginación">
      <Link
        href={createPageUrl(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
          currentPage === 1
            ? "pointer-events-none border-slate-200 text-slate-300"
            : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
        }`}
      >
        Anterior
      </Link>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={createPageUrl(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`min-w-10 rounded-lg border px-3 py-2 text-center text-sm font-semibold transition ${
            page === currentPage
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createPageUrl(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
          currentPage === totalPages
            ? "pointer-events-none border-slate-200 text-slate-300"
            : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
        }`}
      >
        Siguiente
      </Link>
    </nav>
  );
}
