import type { z } from "zod";
import type {
  loginSchema,
  registrationSchema,
} from "@/validations/auth.schema";

export type LoginDto = z.infer<typeof loginSchema>;

export type RegisterDto = Omit<
  z.infer<typeof registrationSchema>,
  "passwordConfirmation"
>;
