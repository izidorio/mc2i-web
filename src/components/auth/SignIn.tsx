import { FormProvider, useForm } from "react-hook-form";
import { Form, Input, InputMask, Button } from "@/components/forms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/stores";
import { api, AxiosError, cookies } from "@/services";

const formSchema = z.object({
  user: z
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .pipe(z.string().min(11, "digite um telefone válido")),
  password: z.string().nonempty("a senha é obrigatória"),
});

type formType = z.infer<typeof formSchema>;

export function SignIn() {
  const { phone, setUser, setModalOpen } = useAuth((state) => state);

  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: { user: phone, password: "" },
  });

  async function handleOnSubmit(payload: formType) {
    api
      .post("/auth/login", payload)
      .then(({ data }) => {
        const { user, token, refreshToken } = data;
        cookies.set("token", token);
        cookies.set("refresh_token", refreshToken);
        setUser(user);
        setModalOpen(false);
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
    <div className="w-full gap-2 mx-auto">
      <h2 className="text-xl font-bold text-center"> Login</h2>

      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <InputMask
            label="Telefone"
            name="user"
            mask="(99) 99999-9999"
            className="text-lg"
            value={phone}
          />
          <Input label="Senha" name="password" eye type="password" className="text-lg" />
          <Button isLoading={methods.formState.isLoading}>Continuar</Button>
        </Form>
      </FormProvider>
    </div>
  );
}
