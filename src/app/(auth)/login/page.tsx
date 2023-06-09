"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { Form, Input, InputMask } from "@/components/forms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, AxiosError, cookies } from "@/services";
import { useAuth } from "@/stores";
import { useEffect } from "react";

const formSchema = z.object({
  user: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(11, "digite um telefone válido")),
  password: z.string().nonempty("a senha é obrigatória"),
});

type formType = z.infer<typeof formSchema>;

export default function Login() {
  const { push } = useRouter();
  const { phone, setUser, isAuth, setAcl } = useAuth((state) => state);
  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: { user: "21964276349", password: "secret" },
  });

  useEffect(() => {
    if (isAuth) {
      push("/shop");
    }
  }, [isAuth, push]);

  async function handleOnSubmit(payload: formType) {
    api
      .post("/auth/login", payload)
      .then(({ data }) => {
        const { user, acl, token, refreshToken } = data;
        cookies.set("token", token);
        cookies.set("refresh_token", refreshToken);
        setUser(user);
        setAcl(acl);
        push("/shop");
      })
      .catch((error) => {
        methods.setValue("password", "");

        if (error instanceof AxiosError) {
          if (error.response?.status === 400) {
            methods.setError("password", { type: "custom", message: "Revise a a senha informada" });
          }
        }
      });
  }

  return (
    <>
      {isAuth && null}
      {!isAuth && (
        <div className="w-60 max-w-xl gap-2 mx-auto">
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
              <InputMask label="Telefone" name="user" mask="(99) 99999-9999" />
              <Input label="Senha" name="password" type="password" eye />
              <button type="submit">Enviar</button>
            </Form>
          </FormProvider>
        </div>
      )}
    </>
  );
}
