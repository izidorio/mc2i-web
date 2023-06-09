import { ROUTES } from "@/constants";

export function checkIsPublicRoute(pathName: string | undefined) {
  let isPublic = false;
  Object.keys(ROUTES.public).forEach(function (key) {
    // @ts-ignore: Unreachable code error
    if (key in ROUTES.public && ROUTES.public[key].path === pathName) {
      isPublic = true;
    }
  });

  return isPublic;
}
