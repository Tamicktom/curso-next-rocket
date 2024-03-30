import { Header } from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";

type StoreLayoutProps = {
  children: React.ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="grid w-full gap-5 p-8 mx-auto min-h-svh max-w-7xl grid-rows-app">
        <Header />
        {props.children}
      </div>
    </CartProvider>
  );
}