import { Header } from "@/components/Header";
import "../globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-8 py-24">{children}</main>
    </div>
  );
}