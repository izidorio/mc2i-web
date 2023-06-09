import { ReactNode } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export function Form({ children, ...rest }: FormProps) {
  return (
    <form className="flex flex-col gap-4" {...rest}>
      {children}
    </form>
  );
}
