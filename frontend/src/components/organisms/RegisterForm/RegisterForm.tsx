"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Label } from "@/components/atoms/Label/Label";
import { registerSchema } from "../../../validations/auth.schema";
import { Button } from "../../atoms/Button/Button";
import { InputField } from "../../molecules/InputField/InputField";

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[406px] flex-col items-center px-4"
    >
      <div className="w-full max-w-[406px]">
        <legend className="mb-4 text-left text-2xl font-bold text-[#212121]">
          Crear cuenta
        </legend>
        <p className="mb-4 text-left text-[14px] text-[#212121]">
          Completa tu perfil y accede a las mejores vacantes del mercado
          laboral, todo en un solo lugar.
        </p>
      </div>
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
        name="fullName"
        placeholder="Nombre y Apellido"
        label="Introduce tu nombre completo"
        register={register}
        errors={errors}
      >
        <User />
      </InputField>

      <InputField
        name="password"
        placeholder="Contraseña"
        label="Introduce tu contraseña"
        type="password"
        register={register}
        errors={errors}
      >
        <Lock />
      </InputField>

      <InputField
        name="passwordConfirmation"
        placeholder="Confirme su contraseña"
        label="Repite tu contraseña"
        type="password"
        register={register}
        errors={errors}
      >
        <Lock />
      </InputField>

      <Button type="submit" variant="primary" size="large">
        Crear cuenta
      </Button>
      <div className="my-10 w-full max-w-[406px] border-b-[1px] border-solid border-[#8A8A8A]"></div>
      <Label variant="link" className="mb-10 text-center">
        <a href={"/login"}>¿Ya tienes una cuenta? Inicia sesión</a>
      </Label>
      <div>
        <legend className="text-[12px] text-[#212121]">
          Al continuar, confirmas tu conformidad con nuestras 
          <a className="text-[#6650D3] underline decoration-solid" href="">
            Condiciones de Uso
          </a>
          y que leíste nuestra 
          <a className="text-[#6650D3] underline decoration-solid" href="">
            Declaración de Privacidad y Cookies.
          </a>
        </legend>
      </div>
    </form>
  );
}
