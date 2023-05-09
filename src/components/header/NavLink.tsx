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
      className="rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out hover:bg-brand hover:text-white data-[active=true]:bg-brand data-[active=true]:text-white"
    >
      {props.children}
    </Link>
  );
}
