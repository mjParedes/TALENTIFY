import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
