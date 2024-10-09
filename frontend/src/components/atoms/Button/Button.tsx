import { type FC } from "react";
import { baseStyles, buttonSizes, buttonStyles } from "./Button.styles";
import { type ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  onClick,
  type,
  disabled = false,
  buttonSize,
  variant,
  label,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${buttonStyles[variant]} ${buttonSizes[buttonSize]}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
