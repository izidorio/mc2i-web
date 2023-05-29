"use client";
import Image from "next/image";
import diadia from "@/assets/images/diadia.png";
import { useModal } from "@/components/modal/Modal";
import { Detail } from "./Detail";

export function Card() {
  const { Modal, openModal, setOpenModal } = useModal();
  return (
    <>
      <div className="flex w-full cursor-pointer flex-col rounded border p-2 shadow-sm hover:shadow-md">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold">Kit dia a dia #7</h3>
            <p className="font-light text-gray-500">Contrafile</p>
            <p>Contrafile</p>
            <p>Contrafile</p>
          </div>

          <div className="h-[100px] max-w-[100px]  overflow-hidden rounded-lg">
            <Image src={diadia} height={300} alt="imagem do produto" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="rounded bg-brand/90 px-2 py-1 text-white hover:bg-brand"
            onClick={() => setOpenModal(true)}
          >
            Comprar
          </button>
          <div>R$ 99,00 / Kg</div>
        </div>
      </div>
      <Modal show={openModal}>
        <Detail setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
}
