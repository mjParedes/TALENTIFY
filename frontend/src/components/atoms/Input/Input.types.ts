export interface InputProps {
    type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "url"
    | "tel"
    | "file"
    | "search"
    disabled: boolean
    variant: "primary" | "secondary"
    inputSize: "small" | "large"
    value?: string | number
    name: string
    id?:string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
