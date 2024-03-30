"use client";
import { createContext, useContext, useState, type ReactNode } from "react"

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

const defaultCart: CartContextType = {
  items: [],
  addItem: (item: CartItem) => {
    console.log(item);
  }
}

export const CartContext = createContext<CartContextType>(defaultCart);

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);

      if (itemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }

      return [...prevItems, item];
    });
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