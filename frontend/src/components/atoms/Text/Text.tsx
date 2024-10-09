import { cn } from "@/utils/cn";
import { textVariants } from "./Text.styles";
import type { TagElementTypes, TextProps } from "./Text.types";

const createText = (variant: TextProps["variant"]): TagElementTypes => {
  switch (variant) {
    default:
      return "p";
    // throw new Error('Text Variant not supported');
  }
};

/**
 * @example
 * <Text variant='default' className="text-talentify-1 mb-12">
 *    lorem ipsum
 * </Text>
 *
 */
export const Text = (props: TextProps) => {
  const { variant, className, element, ...HtmlTextProps } = props;
  const TextElement = element ? element : createText(variant);

  return (
    <TextElement
      className={cn(textVariants({ variant, className }))}
      {...HtmlTextProps}
    />
  );
};
