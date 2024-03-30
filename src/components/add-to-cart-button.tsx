"use client";
//* Libraries imports

//* Local imports
import { useCart } from "@/contexts/cart-context";
import type { Product } from "@/schemas/product";

type Props = {
  product: Product;
}

export function AddToCartButton(props: Props) {
  const { addItem } = useCart();

  const addProduct = () => {
    addItem(props.product);
  }

  return (
    <button
      className="items-center justify-center w-full h-12 font-semibold text-white rounded-full bg-emerald-600"
      onClick={addProduct}
    >
      Adicionar ao carrinho
    </button>
  );
}