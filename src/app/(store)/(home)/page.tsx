//* Libraries imports
import Image from "next/image";
import Link from "next/link";
import z from "zod";

//* Local imports
import { s } from "@/data/api";

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  featured: z.boolean(),
});

const schema = z.array(productSchema);

async function getFeaturedProducts() {
  const response = await s.get({
    url: "/products/featured",
    schema,
    // next: {
    //   revalidate: 60 * 60, // 1 hour
    // }
    cache: "no-store"
  });

  // const response = (await fetch("http://localhost:3000/api/products/featured", {
  //   cache: "no-store",
  // })).json();

  return response;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="relative flex items-end justify-center col-span-6 row-span-6 overflow-hidden rounded-lg group bg-zinc-900"
      >
        <Image
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt={highlightedProduct.title}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className="absolute bottom-28 h-12 right-28 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
        >
          <span className="text-sm truncate">
            {highlightedProduct.title}
          </span>
          <span className="flex items-center justify-center h-full px-4 font-semibold rounded-full bg-violet-500">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {
        otherProducts.map((product) => {
          return (
            <Link
              href={`/product/${product.slug}`}
              className="relative flex items-end justify-center col-span-3 row-span-3 overflow-hidden rounded-lg group bg-zinc-900"
              key={product.id}
            >
              <Image
                src={product.image}
                width={920}
                height={920}
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
  );
}
