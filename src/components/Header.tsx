"use client";
import Image from "next/image";
import { useState } from "react";
import logoImg from "../../public/logo.svg";

import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ModalLogin } from "@/components/auth/ModalLogin";
import { Profile } from "@/components/auth/Profile";

export function Header() {
  const [openNavModal, setOpen] = useState(false);

  return (
    <>
      <header className="border-red/10 fixed left-0 right-0 top-0 border-b px-1 py-3 backdrop-blur md:px-8">
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex w-full items-center  justify-between">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 md:h-14"
                    src={logoImg}
                    alt="Mercado de Carnes"
                    height={56}
                  />
                </div>

                <div className="flex gap-4 items-center text-brand">
                  <ShoppingCartSimple
                    size={32}
                    weight="fill"
                    className="hover:text-brand/90 cursor-pointer"
                  />
                  <Profile />
                </div>
              </div>
              {/* toggle menu */}
              <div className="mr-2 md:hidden">
                <button
                  type="button"
                  aria-label="Menu"
                  aria-expanded="false"
                  className="inline-flex items-center justify-center rounded-md bg-brand p-2 transition duration-300 ease-in-out hover:bg-brand focus:bg-brand focus:outline-none"
                  onClick={() => setOpen(!openNavModal)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* menu mobile */}
          <div data-open={!openNavModal} className="flex data-[open=true]:hidden md:hidden">
            <div className="px-2 pb-3 pt-2 sm:px-3">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
              >
                Home {openNavModal ? "open" : "closed"}
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
              >
                Kits
              </a>
            </div>
          </div>
        </nav>
      </header>
      <ModalLogin />
    </>
  );
}
