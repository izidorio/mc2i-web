"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: string;
  href: string;
}
export function NavLink(props: NavLinkProps) {
  const activeHref = usePathname();

  return (
    <Link
      href={props.href}
      data-active={activeHref === props.href}
      className="rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white data-[active=true]:bg-gray-700"
    >
      {props.children}
    </Link>
  );
}
