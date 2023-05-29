import ReactInputMask, { BeforeMaskedStateChangeStates } from "react-input-mask";
import { useFormContext, Controller } from "react-hook-form";
import { Wrapper } from "./Wrapper";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  readOnly?: boolean;
  mask: string;
}

export function InputMask({ label, name, readOnly = false, className, mask, ...rest }: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Wrapper label={label} error={errors[name]?.message} readOnly={readOnly} className={className}>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <ReactInputMask
            onBlur={onBlur}
            onChange={onChange}
            checked={value}
            inputRef={ref}
            mask={mask}
            className="font-normal text-gray-500 focus:outline-none border-none"
            {...rest}
          />
        )}
      />
    </Wrapper>
  );
}
