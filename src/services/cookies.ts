import { setCookie, parseCookies } from "nookies";
import pkg from "../../package.json";

export const cookies = {
  set(key: string, value: string, ageMinutes = 60) {
    setCookie(undefined, `${pkg.name}-${key}`, value, {
      maxAge: 60 * ageMinutes,
    });

    return value;
  },
  get(key: string) {
    const cookies = parseCookies();
    return cookies[`${pkg.name}-${key}`];
  },
};
