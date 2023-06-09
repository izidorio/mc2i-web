"use client";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

import { PrivatePage } from "@/components/PrivatePage";
import { useAuth } from "@/stores";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
const poppins = Poppins({ weight: ["100", "400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { handleRefresh } = useAuth();
  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PrivatePage>
          <div className="flex w-full h-screen">
            <Menu />
            <div className="flex flex-col flex-1 h-full">
              <Header />
              <main className="flex col p-4">{children}</main>
            </div>
          </div>
        </PrivatePage>
      </body>
    </html>
  );
}
