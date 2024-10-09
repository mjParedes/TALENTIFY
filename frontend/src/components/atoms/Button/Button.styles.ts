import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-md border text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "text-white border-transparent bg-cyan-600 active:bg-cyan-700 hover:bg-cyan-700",
        secondary:
          "bg-transparent border-white hover:border-neutral-300 hover:text-neutral-300 active:text-neutral-300 active:border-neutral-300",
        disabled:
          "pointer-events-none opacity-50 shadow-none text-neutral-600 bg-neutral-400",
      },
      size: {
        default: "h-10 px-4",
        small: "h-9 px-3",
        large: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);
