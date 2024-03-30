//* Libraries imports
import Image from "next/image";
import type { Metadata } from "next";

//* Local imports
import { s } from "@/data/api";
import { productSchema, productsSchema } from "@/schemas/product";
import { AddToCartButton } from "@/components/add-to-cart-button";

async function getProduct(slug: string) {
  const response = await s.get({
    url: `/products/${slug}`,
    schema: productSchema,
    next: {
      revalidate: 60 * 60 // 1 hour
    }
  });

  return response;
}

export type Props = {
  params: {
    slug: string;
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const product = await getProduct(props.params.slug);

  return ({
    title: product.title,
  });
}

// export async function generateStaticParams() {
//   const products = await s.get({
//     url: "/products/featured",
//     schema: productsSchema,
//     next: {
//       revalidate: 60 * 60 // 1 hour
//     }
//   })
//   return products.map((product) => ({
//     slug: product.slug
//   }));
// }

export default async function ProductPage(props: Props) {
  const product = await getProduct(props.params.slug);

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(product.price)

  const price12x = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(product.price / 12)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          quality={100}
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>

        <p className="pt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="flex items-center gap-3 pt-8">
          <span className="inline-block px-5 py-2.5 font-semibold rounded-full bg-violet-500">
            {price}
          </span>
          <span className="text-sm text-zinc-400">Em 12x s/ juros de {price12x}</span>
        </div>

        <div className="pt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex flex-row gap-2">
            {
              product.sizes.map((size) => (
                <button
                  key={size.size}
                  type="button"
                  className="flex items-center justify-center text-sm font-semibold border rounded-full h-9 w-14 border-zinc-700 bg-zinc-800"
                >
                  {size.size}
                </button>
              ))
            }
          </div>
        </div>

        <div className="w-full pt-8">
          <AddToCartButton
            product={product}
          />
        </div>
      </div>
    </div>
  );
}