import { cva } from "class-variance-authority";

export const chipVariants = cva(
    "inline-flex items-center rounded-md px-3 py-1 h-7",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-grey-50 border-grey-100 text-dark-font text-sm",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )