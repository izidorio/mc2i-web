"use client";
import { useAuth } from "@/stores";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { checkIsPublicRoute } from "@/utils/checkIsPublicRouter";

interface PrivatePageProps {
  children: ReactNode;
  acl?: string;
}

export function PrivatePage({ children }: PrivatePageProps) {
  const { push } = useRouter();
  const { isAuth, acl: user_acl } = useAuth();
  const pathName = usePathname();

  const aclParsed = user_acl?.join(",");

  useEffect(() => {
    if (!isAuth && !checkIsPublicRoute(pathName)) {
      push("/login");
    }
    console.log("ffff", aclParsed, aclParsed?.match("adminf"));

    if (aclParsed?.match("adminf") && !checkIsPublicRoute(pathName)) {
      push("/login");
    }
  }, [aclParsed, isAuth, pathName, push]);

  return (
    <>
      {!isAuth && null}
      {isAuth && children}
    </>
  );
}
