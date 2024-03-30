"use client";
//* Libraries imports
import { useSearchParams } from "next/navigation";

export function SearchPreview() {
  const searchParams = useSearchParams();

  return (
    <p className="text-sm">
      Resultados para:{" "}
      <span className="font-semibold">
        {searchParams.get("q") ?? "Carregando..."}
      </span>
    </p>
  );
}