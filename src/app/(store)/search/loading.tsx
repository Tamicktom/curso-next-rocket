"use client";
//* Libraries imports
import { useSearchParams } from "next/navigation";

//* Local imports
import { Skeleton } from "@/components/skeleton";

export default function LoadingSearch() {
  const searchParams = useSearchParams();

  return (
    <div className="flex-col gap-4 flx">
      <p className="text-sm">
        Resultados para:{" "}
        <span className="font-semibold">
          {searchParams.get("q") ?? "Carregando..."}
        </span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}