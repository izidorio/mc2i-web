"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import pkg from "../../package.json";
import { api, cookies } from "@/services";
interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextData {
  isAuthenticated: boolean;
}
interface signInProps {
  phone: string;
  password: string;
}
interface IUser {
  name: string;
  avatar: string;
  phone: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies[`${pkg.name}-token`];

    if (token) {
      //atualiza o usuário
    }
  }, []);

  async function signIn({ phone, password }: signInProps) {
    //faz a autenticação na aplicação
    const response = await fetch("https://localhost:3333", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });
    const token = response;
    cookies.set("token", "tot add token", 60);

    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}
