"use client";
import { DeviceMobile } from "@phosphor-icons/react";
import { useState } from "react";

export function ModalSignIn() {
  const [steps, setSteps] = useState(1);

  return (
    <>
      <input type="checkbox" id="modal-sign-in" className="modal-toggle" />
      <label htmlFor="modal-sign-in" className="modal cursor-pointer">
        <label className="modal-box relative w-[400px]" htmlFor="">
          <label
            htmlFor="modal-sign-in"
            className="btn btn-brand btn-sm btn-circle absolute right-2 top-2 hover:btn-brand-h"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">Entrar ou Cadastrar-se</h3>
          <p className="py-4 text-sm font-normal text-center">
            Para acompanhar seus últimos pedidos, ver informações salvas e ainda ter benefícios
            exclusivos
          </p>
          {steps === 1 && (
            <div className="flex px-5 py-4 items-center justify-between border rounded cursor-pointer hover:shadow-sm">
              <DeviceMobile size={32} weight="bold" className="text-brand hover:text-brand-h" />
              Continuar com o Celular
            </div>
          )}
          {steps === 2 && (
            <div className="flex px-5 py-4 items-center justify-between border rounded cursor-pointer hover:shadow-sm">
              <DeviceMobile size={32} weight="bold" className="text-brand hover:text-brand-h" />
              Continuar com o Celular
            </div>
          )}
        </label>
      </label>
    </>
  );
}
