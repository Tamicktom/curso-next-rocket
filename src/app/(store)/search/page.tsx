//* Libraries imports
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

//* Local imports
import { s } from "@/data/api";
import { productsSchema } from "@/schemas/product";

async function getFeaturedProducts(query: string) {
  const response = await s.get({
    url: `/products/search?q=${query}`,
    schema: productsSchema,
    next: {
      revalidate: 60 * 60 // 1 hour
    }
  });

  return response;
}

type Props = {
  params: {},
  searchParams: {
    q?: string;
  }
}

export default async function Search(props: Props) {

  if (!props.searchParams.q) return redirect("/");

  const products = await getFeaturedProducts(props.searchParams.q);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{" "}
        <span className="font-semibold">
          {props.searchParams.q}
        </span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {
          products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="relative flex items-end justify-center overflow-hidden rounded-lg group bg-zinc-900"
              >
                <Image
                  src={product.image}
                  width={480}
                  height={480}
                  quality={100}
                  alt="Moletom AI Side"
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <div
                  className="absolute bottom-10 h-12 right-10 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
                >
                  <span className="text-sm truncate">
                    {product.title}
                  </span>
                  <span className="flex items-center justify-center h-full px-4 font-semibold rounded-full bg-violet-500">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
