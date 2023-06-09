"use client";
import { useState } from "react";
import Link from "next/link";

import { useAuth, useBreadcrumbs } from "@/stores";
import { IdentificationBadge, SignOut } from "@phosphor-icons/react";
import { Avatar } from "@/components/auth/Profile/Avatar";
import { Breadcrumbs } from "./Breadcrumbs";
import { NavMenu } from "../Menu/NavMenu";

export function Header() {
  const [openNavModal, setOpen] = useState(false);
  const { logOut } = useAuth((state) => state);
  const { breadcrumbs } = useBreadcrumbs((state) => state);

  return (
    <header className="w-full border-gray-200 border-b-[1px] px-1 py-3">
      <nav>
        <div className="mx-auto max-w-7xl ">
          <div className="flex flex-row-reverse h-16 items-center justify-between">
            <div className="flex w-full items-center  justify-between">
              <div className="flex-1">
                {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
              </div>
              <div className="flex gap-4 items-center text-brand">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="flex items-center">
                    <Avatar />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2 "
                  >
                    <li className="accent-slate-400">
                      <div>
                        <Link href="/me" className="flex gap-4">
                          <IdentificationBadge size={24} weight="bold" />
                          Meus dados
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div onClick={logOut} className="flex gap-4">
                        <SignOut size={24} weight="bold" />
                        Sair
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* toggle menu */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Menu"
                aria-expanded="false"
                className="inline-flex items-center justify-center rounded-md bg-brand p-2 transition duration-300 ease-in-out hover:bg-brand focus:bg-brand focus:outline-none"
                onClick={() => setOpen(!openNavModal)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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
        <div
          data-open={!openNavModal}
          className="fixed top-[98px] left-0 right-0 bg-white  flex data-[open=true]:hidden md:hidden"
        >
          <div className="px-2 pb-3 pt-2 sm:px-3">
            <NavMenu handleClink={() => setOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
}
