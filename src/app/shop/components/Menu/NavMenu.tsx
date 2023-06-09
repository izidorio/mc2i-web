import { MonitorPlay, Gear, Users, Barcode } from "@phosphor-icons/react";
import { NavLink } from "./NavLink";

interface NavMenuProps {
  handleClink?: () => void;
}

export function NavMenu({ handleClink }: NavMenuProps) {
  return (
    <div className="flex flex-col gap-4 pl-2 md:pl-0" onClick={handleClink}>
      <NavLink href="/shop" icon={MonitorPlay}>
        Dashboard
      </NavLink>
      <NavLink href="/shop/products" icon={Barcode}>
        Produtos
      </NavLink>
      <NavLink href="/shop/customers" icon={Users}>
        Clientes
      </NavLink>
      <NavLink href="/shop/settings" icon={Gear}>
        Configurações
      </NavLink>
    </div>
  );
}
