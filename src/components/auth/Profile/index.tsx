"use client";
import { useEffect } from "react";
import { useAuth } from "@/stores";
import { UserNav } from "./UserNav";

export function Profile() {
  const { setStep, setModalOpen, handleRefresh, isAuth } = useAuth((state) => state);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <>
      {!isAuth && (
        <label
          htmlFor="modal-sign-in"
          className="hover:text-brand/90 cursor-pointer px-4 py-2 hover:bg-brand/10 rounded"
          onClick={() => {
            setStep("home");
            setModalOpen(true);
          }}
        >
          Entrar ou Cadastrar-se
        </label>
      )}
      {isAuth && <UserNav />}
    </>
  );
}
