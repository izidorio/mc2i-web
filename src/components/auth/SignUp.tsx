import { FormProvider, useForm } from "react-hook-form";
import { Form, Input, InputMask, Button } from "@/components/forms";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/stores";

const formSchema = z
  .object({
    phone: z.string().transform((value) => value.replace(/\D/g, "")),
    name: z.string().min(3, "insira um nome válido"),
    email: z.string().email("insira um email válido"),
    password: z
      .string()
      .min(6, "sua senha deve conter no mínimo 6 dígitos")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-=_+{}[\]:;.,<>/?|]{6,}$/,
        "insira uma senha forte com letras e números"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "as senhas não correspondem",
    path: ["confirmPassword"],
  });

type formType = z.infer<typeof formSchema>;

export function SignUp() {
  const { phone } = useAuth((state) => state);
  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: { phone, name: "" },
  });

  async function handleOnSubmit(payload: formType) {
    console.log({ payload });
  }

  return (
    <div className="w-full gap-2 mx-auto">
      <h2 className="text-xl font-bold text-center"> Cadastrar-se</h2>

      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <InputMask
            label="Telefone"
            name="phone"
            mask="(99) 99999-9999"
            className="text-lg"
            value={phone}
          />
          <Input label="Nome e Sobrenome" name="name" className="text-lg" />
          <Input label="E-mail" name="email" type="email" className="text-lg" />
          <Input label="Senha" name="password" type="password" className="text-lg" />
          <Input
            label="Confirme a Senha"
            name="confirmPassword"
            type="password"
            className="text-lg"
          />

          <Button isLoading={methods.formState.isLoading}>Continuar</Button>
        </Form>
      </FormProvider>
    </div>
  );
}
