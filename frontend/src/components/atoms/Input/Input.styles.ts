import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "rounded-2xl border-solid	border-[1px] text-sm font-normal px-4 py-3.5 focus:outline-none w-full",
  {
    variants: {
      variant: {
        default: "",
        primary: "flex border-gray-500 text-gray-700 focus:text-[#212121] focus:border-violet-600",
        error: "border-red-500 text-gray-500"
      },
      sizes: {
        small: "h-10 m-w-[197px]",
        large: "h-12 m-w-[406px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
