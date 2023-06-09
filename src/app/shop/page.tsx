"use client";
import { useEffect } from "react";
import { PrivatePage } from "@/components/PrivatePage";
import { useAuth, useBreadcrumbs } from "@/stores";
import { MonitorPlay } from "@phosphor-icons/react";

export default function Loja() {
  const { user } = useAuth();
  const { setBreadcrumbs } = useBreadcrumbs((s) => s);

  useEffect(() => {
    setBreadcrumbs({
      icon: MonitorPlay,
      links: [{ label: "Dashboard" }],
    });
  }, [setBreadcrumbs]);
  return <PrivatePage>Loja {user?.name}</PrivatePage>;
}
