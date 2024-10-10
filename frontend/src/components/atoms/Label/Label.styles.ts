import { cva } from "class-variance-authority";

export const labelVariants = cva("block text-sm text-white", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
