"use client";
import { DeviceMobile, X } from "@phosphor-icons/react";
import { FormPhone } from "./FormPhone";
import { useAuth } from "@/stores";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export function ModalLogin() {
  const { step, modalOpen, setStep, setModalOpen } = useAuth((state) => state);
  return (
    <>
      {modalOpen ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500/50  outline-none focus:outline-none">
            <div className="relative mx-2 my-6 w-auto max-w-2xl md:mx-auto z-10">
              <button
                className="absolute right-2 z-10 top-2 cursor-pointer text-gray-500 transition hover:text-gray-700"
                type="button"
                onClick={() => setModalOpen(false)}
              >
                <X size={24} weight="bold" />
              </button>
              <div
                className="flex w-full flex-col rounded-lg border-0 bg-white shadow-md outline-none focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col px-4 py-4 gap-4 w-[400px]">
                  {step === "home" && (
                    <>
                      <h2 className="text-xl font-bold text-center">Entrar ou Cadastrar-se</h2>
                      <p className="text-sm font-normal text-center">
                        Para acompanhar seus últimos pedidos, ver informações salvas.
                      </p>
                      <div
                        onClick={() => {
                          setStep("phone");
                        }}
                        className="flex px-5 py-4 items-center justify-between border rounded cursor-pointer hover:shadow-sm"
                      >
                        <DeviceMobile
                          size={32}
                          weight="bold"
                          className="text-brand hover:text-brand-h"
                        />
                        Continuar com o Celular
                      </div>
                    </>
                  )}
                  {step === "phone" && <FormPhone />}
                  {step === "signUp" && <SignUp />}
                  {step === "signIn" && <SignIn />}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
