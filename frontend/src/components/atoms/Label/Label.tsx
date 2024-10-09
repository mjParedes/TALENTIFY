import { type FC } from "react";
import { type LabelProps } from "./Label.types";

export const Label: FC<LabelProps> = ({ htmlFor, text, isError = false }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block ${isError ? "text-sm text-red-600" : "text-md text-white"}`}
    >
      {text}
    </label>
  );
};
