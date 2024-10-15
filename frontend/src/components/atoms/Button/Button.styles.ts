import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-[16px] border flex font-medium items-center justify-center text-base",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "border-solid border-[#6650D3] bg-[#6650D3] hover:bg-[#8D79ED] hover:border-[#8D79ED] active:bg-[#503EA5] active:border-[#503EA5] text-white",
        secondary:
          "border-solid border-[#3A3A3A] bg-[#3A3A3A] hover:bg-[#7E7E7E] hover:border-[#7E7E7E] active:bg-[#4C4C4C] active:border-[#4C4C4C] text-white",
        disabled:
          "pointer-events-none bg-[#C9C9C9] border-solid border-[#C9C9C9]",
        outlinedDisabled:
          "pointer-events-none border-solid border-2 border-[#8A8A8A] text-[#8A8A8A]",
        outlined: 
          "border-solid border-2 border-[#8A8A8A] text-[#212121] hover:bg-[#DBDBDB] active:bg-[#8A8A8A] active:text-white",
      },
      size: {
        default: "",
        small: "py-[11px] w-[130px]",
        large: "py-[14px] w-[406px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);
