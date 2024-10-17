"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Label } from "@/components/atoms/Label/Label";
import { loginSchema } from "../../../validations/auth.schema";
import { Button } from "../../atoms/Button/Button";
import { InputField } from "../../molecules/InputField/InputField";

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[438px] flex-col items-center px-4"
    >
      <h1 className="mb-2 w-full text-2xl font-bold text-gray-600">
        Iniciar sesión
      </h1>
      <p className="mb-4 text-left text-gray-600">
        Libera tu potencial profesional: Conecta, Colabora y Prospera con
        Talentify.
      </p>

      <InputField
        name="email"
        placeholder="Correo electrónico"
        label="Introduce tu email"
        register={register}
        errors={errors}
      >
        <Mail />
      </InputField>

      <InputField
        name="password"
        type={"password"}
        placeholder="Contraseña"
        label="Introduce tu contraseña"
        register={register}
        errors={errors}
      >
        <Lock className="mr-2" />
      </InputField>

      <div className="my-4 w-full text-left">
        <Label variant="link" className="text-indigo-600 hover:underline">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </Label>
      </div>

      <Button type="submit" variant="primary" size="large" className="mt-4">
        Iniciar Sesión
      </Button>

      <div className="my-10 w-full max-w-[406px] border-b-[1px] border-solid border-[#8A8A8A]"></div>

      <Label variant="link" className="mb-10 text-center">
        <a href={"/login"}>¿Aún no tienes cuenta? Crear una ahora</a>
      </Label>
    </form>
  );
}

export default LoginForm;
