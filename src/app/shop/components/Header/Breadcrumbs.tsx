import { IBreadcrumbs } from "@/stores";
import Link from "next/link";

interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumbs;
}
export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const { icon: Icon, links } = breadcrumbs;
  return (
    <div className="flex items-center justify-center md:justify-start ml-4 gap-2 text-gray-500">
      <Icon size={32} />
      <div className="text-base breadcrumbs">
        <ul>
          {links.map((link, index) => (
            <>
              {link.href && (
                <div className="hidden md:flex items-center">
                  <li key={`bc-${index}`} data-hidden={!link.href}>
                    {link.href && <Link href={link.href}>{link.label}</Link>}
                  </li>
                </div>
              )}
              {!link.href && (
                <li key={`bc-${index}`}>
                  <span className="block text-gray-900">{link.label}</span>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
