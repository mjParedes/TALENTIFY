import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center rounded-2xl text-base font-medium leading-5 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "bg-violet-600 text-white hover:bg-violet-400 active:bg-violet-700",
        secondary:
          "bg-grey-900 hover:bg-grey-600 active:bg-grey-800 text-white",
        disabled: "bg-grey-200 pointer-events-none border-solid",
        outlinedDisabled:
          "border-grey-500 text-grey-500 pointer-events-none border-2 border-solid",
        outlined:
          "border-grey-500 text-grey-darkFont hover:bg-grey-100 active:bg-grey-500 border-2 border-solid py-1 active:text-white",
      },
      size: {
        default: "",
        small: "px-4 py-2.5",
        large: "w-full py-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);
