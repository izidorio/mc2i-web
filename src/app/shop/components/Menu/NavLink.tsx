import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@phosphor-icons/react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  icon?: Icon;
  can?: string[];
}
export function NavLink({ href, children, icon: Icon, ...rest }: NavLinkProps) {
  const activeHref = usePathname();

  return (
    <Link
      href={href}
      data-active={activeHref === href}
      {...rest}
      className="flex items-center gap-2 text-sm font-medium transition duration-150 ease-in-out hover:text-brand  data-[active=true]:text-brand"
    >
      {Icon && <Icon size={24} weight="regular" />}
      <span className="text-sm font-medium">{children}</span>
    </Link>
  );
}
