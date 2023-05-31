import { useModal } from "@/components/modal/Modal";
export function SignIn() {
  const { Modal, openModal, setOpenModal } = useModal();
  return (
    <>
      <label
        htmlFor="modal-sign-in"
        className="hover:text-brand/90 cursor-pointer px-4 py-2 hover:bg-brand/10 rounded"
      >
        Entrar ou Cadastrar-se
      </label>
    </>
  );
}
