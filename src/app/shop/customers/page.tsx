"use client";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/stores";
import { Users } from "@phosphor-icons/react";

export default function Customers() {
  const { setBreadcrumbs } = useBreadcrumbs((s) => s);

  useEffect(() => {
    setBreadcrumbs({
      icon: Users,
      links: [{ label: "Clientes" }],
    });
  }, [setBreadcrumbs]);
  return <div>Clientes</div>;
}
