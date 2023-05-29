"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Form, Input, InputMask } from "@/components/forms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/contexts/User";
const formSchema = z.object({
  user: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(11, "digite um telefone válido")),
  password: z.string().nonempty("a senha é obrigatória"),
});

type formType = z.infer<typeof formSchema>;

export default function Login() {
  const { useAuth } = useUser();
  const { token } = useAuth((state) => state);
  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  async function handleOnSubmit(payload: formType) {
    console.log({ payload });
  }

  return (
    <div className="w-60 max-w-xl gap-2 mx-auto">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <InputMask label="Telefone" name="user" mask="(99) 99999-9999" />
          <Input label="Senha" name="password" type="password" />
          <button type="submit">Enviar</button>
        </Form>
      </FormProvider>
    </div>
  );
}
