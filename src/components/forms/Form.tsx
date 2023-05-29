import { ReactNode } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export function Form({ children, ...rest }: FormProps) {
  return (
    <form className="flex flex-col gap-2" {...rest}>
      {children}
    </form>
  );
}
