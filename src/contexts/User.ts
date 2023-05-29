import { create } from "zustand";
import axios from "axios";
import { cookies } from "@/services/cookies";

type User = {
  id: string;
  name: string;
  acl: string[];
};

type AuthContext = {
  user: User;
  token: string | null;
  updateUser: (data: Partial<User>) => void;
  updateToken: (data: { token: string }) => void;
};

export function useUser() {
  async function signIn({ phone, password }: any) {
    //faz a autenticação na aplicação
    const response = await fetch("https://localhost:3333", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });
    const token = response;
    cookies.set("token", "tot add token", 60);
  }

  const useAuth = create<AuthContext>((set) => ({
    user: {
      id: "",
      name: "",
      acl: [],
    },
    token: null,
    updateUser: (data) => {
      set((state) => {
        return {
          ...state,
          user: {
            ...state.user,
            ...data,
          },
        };
      });
    },
    updateToken: (data) => {
      set((state) => {
        return { ...state, token: data.token };
      });
    },
  }));

  return { signIn, useAuth };
}
