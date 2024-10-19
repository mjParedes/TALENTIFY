import { cva } from "class-variance-authority";

export const avatarVariants = cva("overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-gray-200",
      profilePicture: "border-2 border-blue-500",
    },
    size: {
      small: "h-8 w-8",
      large: "h-16 w-16",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "large",
  },
});
