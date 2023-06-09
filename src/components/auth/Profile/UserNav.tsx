import { useAuth } from "@/stores";
import { IdentificationBadge, SignOut } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import Link from "next/link";

export function UserNav() {
  const { logOut } = useAuth((state) => state);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="flex items-center">
        <Avatar />
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2 ">
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
  );
}
