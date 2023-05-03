"use client";
import Image from "next/image";
import logoImg from "../../public/logo.svg";
import { useState } from "react";
import { NavLink } from "./header/NavLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-red/10 fixed left-0 right-0 top-0 border-b px-1 py-3 backdrop-blur md:px-8">
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center  justify-between">
              <div className="flex-shrink-0">
                <Image className="h-12 md:h-14" src={logoImg} alt="Mercado de Carnes" height={56} />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-zinc-500">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/kits">Kits</NavLink>
                  <NavLink href="/contato">Contato</NavLink>
                </div>
              </div>
            </div>
            <div className="mr-2 md:hidden">
              <button
                type="button"
                aria-label="Menu"
                aria-expanded="false"
                className="inline-flex items-center justify-center rounded-md p-2 transition duration-300 ease-in-out hover:bg-zinc-500 focus:bg-zinc-500 focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div data-open={open} className="flex data-[open=true]:hidden md:hidden">
          <div className="px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
            >
              home {open ? "open" : "closed"}
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
            >
              sobre
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
