"use client";
import { ReactNode, useState } from "react";

export function useModal() {
  const [openModal, setOpenModal] = useState(false);

  function Modal({ show, children }: { show: boolean; children: ReactNode }) {
    return (
      <>
        {show ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500/50  outline-none focus:outline-none"
              onClick={() => setOpenModal(false)}
            >
              <div className="relative mx-2 my-6 w-auto max-w-2xl md:mx-auto z-10">
                <button
                  className="absolute right-4 z-10 top-2 cursor-pointer text-xl text-gray-500 transition hover:text-gray-700"
                  type="button"
                  onClick={() => setOpenModal(false)}
                >
                  X
                </button>
                <div
                  className="flex w-full flex-col rounded-lg border-0 bg-white shadow-md outline-none focus:outline-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  {children}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </>
    );
  }

  return { Modal, openModal, setOpenModal };
}
