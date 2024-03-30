//* Libraries imports
import Image from "next/image";


export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt="Moleton Never Stop Learning"
          quality={100}
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">Moletom Never Stop</h1>

        <p className="pt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% poliéster.
        </p>

        <div className="flex items-center gap-3 pt-8">
          <span className="inline-block px-5 py-2.5 font-semibold rounded-full bg-violet-500">R$ 129,00</span>
          <span className="text-sm text-zinc-400">Em 12x s/ juros de R$10,75</span>
        </div>

        <div className="pt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button type="button" className="flex items-center justify-center text-sm font-semibold border rounded-full h-9 w-14 border-zinc-700 bg-zinc-800">P</button>
          </div>
        </div>

        <div className="w-full pt-8">
          <button className="items-center justify-center w-full h-12 font-semibold text-white rounded-full bg-emerald-600">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}