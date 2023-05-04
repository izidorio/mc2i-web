"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "deve conter o mínimo de 3 letras" })
    .regex(/^([a-z\\-]*)([a-z0-9]*$)/i, {
      message: "são permitidos apenas: letras, números e  '-' ",
    })
    .transform((value) => value.toLocaleLowerCase()),
  password: z.string(),
});

type formType = z.infer<typeof formSchema>;

export default function Login() {
  const { register, handleSubmit, formState } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  const { errors, isSubmitting } = formState;

  async function handleOnSubmit(payload: formType) {
    console.log({ payload });
  }

  return (
    <form className="mb-4 rounded bg-white px-8 pb-8 pt-6" onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="mb-4">
        <label className="mb-2 block text-sm text-gray-700">Telefone</label>
        <input
          className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700  focus:outline-none"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        <p className="text-xs italic text-red-500">{errors.username?.message}</p>
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm text-gray-700">Password</label>
        <input
          className="mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 focus:outline-none  focus:-outline"
          type="password"
          placeholder="******************"
          {...register("password")}
        />
        <p className="text-xs italic text-red-500">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
          disabled={isSubmitting}
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
}
