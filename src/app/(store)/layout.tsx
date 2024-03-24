import { Header } from "@/components/header";


type StoreLayoutProps = {
  children: React.ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  return (
    <div className="mx-auto grid min-h-svh w-full max-w-7xl grid-rows-app gap-5 p-8">
      <Header />
      {props.children}
    </div>
  );
}