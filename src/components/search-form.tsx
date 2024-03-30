"use client";
//* Libraries imports
import type { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

//* Local imports


export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const input = Object.fromEntries(new FormData(form));

    const query = input.q;

    if (!query) return;

    router.push(`/search?q=${query}`);

  }

  return (
    <form
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      onSubmit={handleSearch}
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        placeholder="Buscar produtos..."
        className="flex-1 text-sm bg-transparent outline-none placeholder:text-zinc-500"
        required
        defaultValue={query ?? ""}
      />
    </form>
  );
}