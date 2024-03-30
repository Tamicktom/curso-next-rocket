//* Libraries imports
import z from "zod";

export const sizeSchema = z.object({
  size: z.string(),
  stock: z.number(),
});
export type Size = z.infer<typeof sizeSchema>;

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  featured: z.boolean(),
  sizes: z.array(sizeSchema),
});
export type Product = z.infer<typeof productSchema>;

export const productsSchema = z.array(productSchema);
export type Products = z.infer<typeof productsSchema>;
