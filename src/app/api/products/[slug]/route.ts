//* Libraries imports
import z from "zod";

//* Local imports
import data from "../data.json";
import { NextResponse } from "next/server";

type Params = {
  params: {
    slug: string;
  };
};

const schema = z.object({
  slug: z.string(),
});

export async function GET(request: Request, { params }: Params) {
  const slug = schema.parse(params).slug;

  //fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("GET /api/products");

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      {
        status: 400,
      }
    );
  }

  return Response.json(product);
}
