import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "ease rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        primary: "text-black",
        secondary: "bg-black text-white",
        disabled: "text-gray-500",
      },
      sizes: {
        small: "h-10 w-64",
        large: "h-12 w-96",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
