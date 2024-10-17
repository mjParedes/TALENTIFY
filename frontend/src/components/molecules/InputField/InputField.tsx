"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
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
  children?: React.ReactNode;
}

export function InputField<T extends FieldValues>({
  name,
  register,
  errors,
  type = "text",
  children,
  ...props
}: InputProps<T>) {
  const isError = !!errors?.[name];
  const errorMessage = String(errors?.[name]?.message);
  const [showPassword, setShowPassword] = useState(false);
  const showText = showPassword ? "text" : "password";

  return (
    <fieldset className="relative mx-4 mb-4 w-full">
      <div className="relative flex items-center">
        {children && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {children}
          </div>
        )}
        <Input
          id={name}
          type={type === "password" ? showText : type}
          className="rounded-lg border border-gray-300 pl-10 pr-10"
          {...register(name)}
          variant="primary"
          sizes="large"
          isError={isError}
          aria-invalid={isError}
          aria-describedby={`${name}-error`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {isError && (
        <p id={`${name}-error`} className="pl-4 pt-2 text-xs text-[#DA0000]">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
