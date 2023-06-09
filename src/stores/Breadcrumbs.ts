import { create } from "zustand";
import { Icon } from "@phosphor-icons/react";

interface ILinks {
  label: string;
  href?: string;
}
export interface IBreadcrumbs {
  icon: Icon;
  links: ILinks[];
}

type BreadcrumbsContext = {
  breadcrumbs: IBreadcrumbs | null;
  setBreadcrumbs: (data: IBreadcrumbs) => void;
};

export const useBreadcrumbs = create<BreadcrumbsContext>((set) => ({
  breadcrumbs: null,
  setBreadcrumbs: (data) => {
    set(() => ({ breadcrumbs: data }));
  },
}));
