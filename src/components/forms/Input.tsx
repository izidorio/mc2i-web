import { useFormContext } from "react-hook-form";
import { Wrapper } from "@/components/forms";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  readOnly?: boolean;
}

export function Input({ label, name, readOnly = false, className, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Wrapper label={label} error={errors[name]?.message} readOnly={readOnly} className={className}>
      <input
        id={label}
        readOnly={readOnly}
        {...register(name)}
        className="font-normal text-gray-500 focus:outline-none border-none"
        {...rest}
      />
    </Wrapper>
  );
}
