"use client";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/stores";
import { Barcode } from "@phosphor-icons/react";

export default function Produtos() {
  const { setBreadcrumbs } = useBreadcrumbs((s) => s);

  useEffect(() => {
    setBreadcrumbs({
      icon: Barcode,
      links: [{ label: "Produtos" }],
    });
  }, [setBreadcrumbs]);

  return <div>produtos</div>;
}
