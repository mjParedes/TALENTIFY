import { cva } from "class-variance-authority";

export const labelVariants = cva("block text-xs pl-4 pt-2 w-full max-w-[406px]", {
  variants: {
    variant: {
      default: "text-[#626262]",
      primary:"text-[#6650D3]",
      link: "text-[#6650D3] underline decoration-solid text-sm"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
