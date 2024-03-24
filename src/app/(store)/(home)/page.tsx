//* Libraries imports
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href="/" className="relative flex items-end justify-center col-span-6 row-span-6 overflow-hidden rounded-lg group bg-zinc-900">
        <Image
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          quality={100}
          alt="Moletom AI Side"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute bottom-28 h-12 right-28 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moleton AI Side</span>
          <span className="flex items-center justify-center h-full px-4 font-semibold rounded-full bg-violet-500">R$ 129</span>
        </div>
      </Link>

      <Link href="/" className="relative flex items-end justify-center col-span-3 row-span-3 overflow-hidden rounded-lg group bg-zinc-900">
        <Image
          src="/camiseta-dowhile-2022.png"
          width={920}
          height={920}
          quality={100}
          alt="Moletom AI Side"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute bottom-10 h-12 right-10 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moleton AI Side</span>
          <span className="flex items-center justify-center h-full px-4 font-semibold rounded-full bg-violet-500">R$ 129</span>
        </div>
      </Link>

      <Link href="/" className="relative flex items-end justify-center col-span-3 row-span-3 overflow-hidden rounded-lg group bg-zinc-900">
        <Image
          src="/moletom-java.png"
          width={920}
          height={920}
          quality={100}
          alt="Moletom AI Side"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute bottom-10 h-12 right-10 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">Moleton AI Side</span>
          <span className="flex items-center justify-center h-full px-4 font-semibold rounded-full bg-violet-500">R$ 129</span>
        </div>
      </Link>
    </div>
  );
}
