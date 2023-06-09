import { FormProvider, useForm } from "react-hook-form";
import { Form, InputMask, Button } from "@/components/forms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/stores";
import { api, AxiosError } from "@/services";
import { useState } from "react";

const formSchema = z.object({
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(11, "digite um telefone válido")),
});

type formType = z.infer<typeof formSchema>;

export function FormPhone() {
  const [errorMsg, setErrorMsg] = useState("");
  const { setStep, setPhone } = useAuth((state) => state);
  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: { phone: "" },
  });

  async function handleOnSubmit(payload: formType) {
    api
      .post("auth/sign-in", payload)
      .then(({ status }) => {
        setPhone(payload.phone);

        if (status === 200) {
          setStep("signIn");
        }
        if (status === 204) {
          setStep("signUp");
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.code === "ERR_NETWORK") {
            setErrorMsg(
              "Não foi possível conectar-se ao servidor. Você pode está sem acesso à internet ou o servidor está indisponível momentaneamente."
            );
          }
        }
      });
  }

  return (
    <div className="w-full gap-2 mx-auto">
      <h2 className="text-xl font-bold text-center">Entrar ou Cadastrar-se</h2>
      <p className="text-sm font-normal text-center">
        Para acompanhar seus últimos pedidos, ver informações salvas.
      </p>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <InputMask label="Telefone" name="phone" mask="(99) 99999-9999" className="text-lg" />
          <Button isLoading={methods.formState.isLoading}>Continuar</Button>
        </Form>
      </FormProvider>

      <p className="text-sm text-center text-red-500 font-normal py-2">{errorMsg}</p>
    </div>
  );
}
