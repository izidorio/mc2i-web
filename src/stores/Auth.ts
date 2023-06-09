import { api, cookies } from "@/services";
import { create } from "zustand";

export const STATUS_ORDER = ["home", "phone", "signUp", "signIn"] as const;
export type IStatusOrder = (typeof STATUS_ORDER)[number];
interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

type AuthStepsContext = {
  step: IStatusOrder;
  modalOpen: boolean;
  phone: string;
  isAuth: boolean;
  user: IUser | null;
  acl: string[] | null;
  setStep: (data: IStatusOrder) => void;
  setModalOpen: (data: boolean) => void;
  setPhone: (data: string) => void;
  setUser: (data: IUser) => void;
  setAcl: (data: string[] | null) => void;
  handleRefresh: () => Promise<void>;
  logOut: () => void;
};

export const useAuth = create<AuthStepsContext>((set) => ({
  step: "home",
  modalOpen: false,
  phone: "",
  isAuth: false,
  user: null,
  acl: null,
  setStep: (data) => {
    set(() => ({ step: data }));
  },
  setModalOpen: (data) => {
    set(() => ({ modalOpen: data }));
  },
  setPhone: (data) => {
    set(() => ({ phone: data }));
  },
  setUser: (data) => {
    set(() => ({ user: data, isAuth: true }));
  },
  setAcl: (data) => {
    set(() => ({ acl: data }));
  },
  logOut: () => {
    cookies.delete("token");
    cookies.delete("refresh_token");
    set(() => ({ user: null, isAuth: false }));
  },
  handleRefresh: async () => {
    const token = cookies.get("token");
    if (token) {
      api
        .get("/me", { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          const { acl, user } = data;
          set(() => ({ isAuth: true }));
          set(() => ({ user }));
        })
        .catch(() => {
          cookies.delete("token");
          cookies.delete("refresh_token");
          set(() => ({ isAuth: false }));
        });
    }
  },
}));
