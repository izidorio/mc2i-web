import { ReactNode } from "react";

interface WrapperProps extends React.InputHTMLAttributes<HTMLDivElement> {
  label: string;
  children: ReactNode;
  error?: any;
  readOnly?: boolean;
}

export function Wrapper({ label, children, error, ...rest }: WrapperProps) {
  return (
    <div className="flex flex-col gap-1" {...rest}>
      <label htmlFor={label} className="block font-normal text-sm text-gray-500">
        {label}
      </label>
      <div className="border rounded py-1 px-2">{children}</div>
      <p className="text-xs italic text-red-500">{error}</p>
    </div>
  );
}
