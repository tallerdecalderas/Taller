import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <div className="h-48 w-full bg-slate-50 p-3">
        <Skeleton className="h-full w-full rounded" />
      </div>

      <div className="flex grow flex-col p-4">
        <Skeleton className="mb-2 h-6 w-24" />
        <Skeleton className="mb-2 h-5 w-full" />
        <Skeleton className="mb-3 h-5 w-2/3" />

        <div className="mt-auto border-t pt-3">
          <Skeleton className="mb-3 h-8 w-28" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}
