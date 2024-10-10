"use client";

import type { InputHTMLAttributes } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

export function InputField<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  type = "text",
  ...props
}: InputProps<T>) {
  const isError = !!errors?.[name];
  const errorMessage = String(errors?.[name]?.message);
  return (
    <fieldset className="mb-4">
      <Label htmlFor={name} variant="default">
        {label}
      </Label>
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
        <p id={`${name}-error`} className="text-xs text-red-500">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
