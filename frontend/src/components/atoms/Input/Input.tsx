import { type FC } from "react";
import { baseStyles, inputFile, inputSizes, inputStyles } from "./Input.styles";
import { type InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  disabled = false,
  inputSize,
  variant,
  id,
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className={`${type === "file" ? inputFile : `${baseStyles} ${inputStyles[variant]} ${inputSizes[inputSize]}`}`}
      {...props}
    />
  );
};
