import { Header } from "@/components/Header";
import { Card } from "@/components/card/Card";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <main className="max-w-7xl px-4  py-24 md:px-8">
        <div className="flex w-full flex-col py-4">
          <h2 className="text-xl font-bold text-brand">Kits</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex w-full flex-col py-4">
          <h2 className="text-xl font-bold text-brand">Kits</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex w-full flex-col py-4">
          <h2 className="text-xl font-bold text-brand">Kits</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}
