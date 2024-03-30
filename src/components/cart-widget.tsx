"use client";
//* Libraries imports
import { ShoppingBag } from "lucide-react";

//* Local imports
import { useCart } from "@/contexts/cart-context";

type CartWidgetProps = {};

export function CartWidget(props: CartWidgetProps) {
  const { items } = useCart();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-2" />
      <span className="text-sm">
        Cart ({`${totalItems} item${totalItems > 1 ? "s" : ""}`})
      </span>
    </div>
  );
}