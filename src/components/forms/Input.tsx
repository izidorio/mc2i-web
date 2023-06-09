"use client";
import { useFormContext } from "react-hook-form";
import { Wrapper } from "@/components/forms";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  readOnly?: boolean;
  eye?: boolean;
}

export function Input({
  label,
  name,
  readOnly = false,
  eye = false,
  className,
  type,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [_type, setType] = useState(type);

  return (
    <Wrapper label={label} error={errors[name]?.message} readOnly={readOnly} className={className}>
      <span className="relative">
        <input
          id={label}
          readOnly={readOnly}
          {...register(name)}
          className="font-normal text-gray-500 focus:outline-none border-none w-full"
          {...rest}
          type={_type}
        />
        {eye && _type === "password" && (
          <Eye
            size={24}
            weight="bold"
            className="absolute right-1 top-0 cursor-pointer text-zinc-500 hover:text-zinc-700"
            onClick={() => {
              setType("text");
            }}
          />
        )}
        {eye && _type === "text" && (
          <EyeSlash
            size={24}
            weight="bold"
            className="absolute right-1 top-0 cursor-pointer text-zinc-500 hover:text-zinc-700"
            onClick={() => {
              setType("password");
            }}
          />
        )}
      </span>
    </Wrapper>
  );
}
