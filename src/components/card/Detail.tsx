import { Dispatch, SetStateAction } from "react";
import patinho from "@/assets/images/patinho.png";
import Image from "next/image";

interface DetailProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
export function Detail({ setOpenModal }: DetailProps) {
  return (
    <div className="flex w-[500px] flex-col">
      <div className="flex justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-lg">Embalagem</h4>
            <div className="flex items-center">
              <input
                checked
                id="packing-1"
                type="radio"
                value=""
                name="packing"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label htmlFor="packing-1" className="ml-2 text-sm font-light text-gray-700">
                Saquinho
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="packing-1"
                type="radio"
                value=""
                name="packing"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label htmlFor="packing-1" className="ml-2 text-sm font-light text-gray-700">
                Bandeja (R$ 1,00)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="packing-1"
                type="radio"
                value=""
                name="packing"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label htmlFor="packing-1" className="ml-2 text-sm font-light text-gray-700">
                A Vácuo (R$ 1,50)
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg">Corte</h4>
            <div className="flex items-center">
              <input
                id="packing-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">
                Default radio
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 focus:outline-none"
              >
                Checked state
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg">Porções</h4>
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">
                Default radio
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 focus:outline-none"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 focus:outline-none"
              >
                Checked state
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[200px]">
          <h4 className="font-bold text-xl">Patinho</h4>
          <Image src={patinho} alt="" height={100} />
          <p className="text-gay-500 font-light text-sm">
            Um corte do Traseiro, mácio e sem gordura. Vendido a quilo. O peso final será o apurado
            na balança podendo variar mais ou menos em 250g
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b border-t border-solid border-slate-200 p-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center bg-brand text-white font-bold text-xl rounded-full px-3 ">
            -
          </button>
          <span>1,250 Kg</span>
          <button className="flex items-center bg-brand text-white font-bold text-xl rounded-full px-3">
            +
          </button>
        </div>
        <button
          className="mb-1 mr-1 rounded bg-brand/90 px-4 py-2 text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-brand focus:outline-none"
          type="button"
          onClick={() => setOpenModal(false)}
        >
          <span className="font-bold">Comprar</span> R$ 45,99
        </button>
      </div>
    </div>
  );
}
