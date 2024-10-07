import { z } from "zod";

// Esquemas de validación básicos (por elemento):

const passwordSchema = z
  .string()
  .min(8, { message: "La contraseña debería tener al menos 8 caracteres" })
  .max(60, { message: "La contraseña debe tener como máximo 60 caracteres" });

export const emailSchema = z
  .string()
  .email("Por favor, introduce una dirección de correo electrónico válida");

export const fullNameSchema = z
  .string()
  .min(2)
  .max(60, { message: "La contraseña debe tener como máximo 60 caracteres" });

// TODO: una vez definido si el rol va a ser por un selector o un check,
// cambiar este schema y añadirlo al registrationSchema
export const roleSchema = z.enum(["Usuario", "Reclutador"]);

// Esquemas de validación compuestos:

export const registrationSchema = z
  .object({
    fullName: fullNameSchema,
    email: emailSchema,
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
