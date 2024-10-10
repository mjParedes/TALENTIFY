import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { inputVariants } from "./Input.styles";
import { type InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ sizes, variant, className, isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({ variant, sizes, className }),
          isError && "text-red-600"
        )}
        {...props}
      />
    );
  }
);
