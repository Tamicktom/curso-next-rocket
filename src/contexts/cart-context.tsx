"use client";
//* Libraries imports
import { createContext, useContext, useState, type ReactNode } from "react"

//* Local imports
import type { Product } from "@/schemas/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Product) => void;
}

const defaultCart: CartContextType = {
  items: [],
  addItem: (item: Product) => {
    console.log(item);
  }
}

export const CartContext = createContext<CartContextType>(defaultCart);

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(item: Product) {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      setItems(items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + 1
          }
        }
        return i;
      }))
    } else {
      setItems([
        ...items,
        {
          ...item,
          quantity: 1
        }
      ])
    }
  }

  return (
    <CartContext.Provider value={{
      items,
      addItem: addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)