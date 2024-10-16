"use client";

import type { InputHTMLAttributes } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../atoms/Input/Input";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

export function InputField<T extends FieldValues>({
  name,
  register,
  errors,
  type = "text",
  ...props
}: InputProps<T>) {
  const isError = !!errors?.[name];
  const errorMessage = String(errors?.[name]?.message);
  return (
    <fieldset className="mx-4 mb-4 w-full">
      <Input
        id={name}
        type={type}
        {...register(name)}
        variant="primary"
        sizes="large"
        isError={isError}
        aria-invalid={isError}
        aria-describedby={`${name}-error`}
        {...props}
      />
      {isError && (
        <p id={`${name}-error`} className="pl-4 pt-2 text-xs text-[#DA0000]">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
