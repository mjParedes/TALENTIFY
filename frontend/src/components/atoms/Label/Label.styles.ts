import { cva } from "class-variance-authority";

export const labelVariants = cva(
  "block w-full max-w-[406px] pl-4 pt-2 text-xs",
  {
    variants: {
      variant: {
        default: "text-grey-700",
        primary: "text-violet-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
