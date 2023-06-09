import Image from "next/image";
import logoImg from "@/assets/images/logo.svg";
import { NavMenu } from "./NavMenu";

export function Menu() {
  return (
    <div className="hidden md:flex w-48 h-screen border-r-gray-200 border-r-[1px] pr-2 flex-col gap-4">
      <div className="flex-shrink-0 flex flex-col py-2">
        <Image className="h-12" src={logoImg} alt="Mercado de Carnes" height={48} />
        <small className="font-light text-center text-gray-500">versão 0.0.1</small>
      </div>
      <NavMenu />
    </div>
  );
}
