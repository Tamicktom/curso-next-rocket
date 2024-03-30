import data from "../data.json";

export async function GET(request: Request) {
  const featuredProducts = data.products.filter((product) => product.featured);

  //fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("GET /api/products");

  return Response.json(featuredProducts);
}
