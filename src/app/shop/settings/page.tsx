"use client";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/stores";
import { Gear } from "@phosphor-icons/react";

export default function Settings() {
  const { setBreadcrumbs } = useBreadcrumbs((s) => s);

  useEffect(() => {
    setBreadcrumbs({
      icon: Gear,
      links: [{ label: "Configurações" }],
    });
  }, [setBreadcrumbs]);

  return <div>produtos</div>;
}
