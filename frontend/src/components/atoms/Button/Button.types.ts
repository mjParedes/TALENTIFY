export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    variant: "primary" | "secondary"
    buttonSize: "small" | "large"
    disabled: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string
}
