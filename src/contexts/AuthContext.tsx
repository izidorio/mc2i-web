"use client";
import { ReactNode, createContext } from "react";

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

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({}: signInProps) {}

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}
