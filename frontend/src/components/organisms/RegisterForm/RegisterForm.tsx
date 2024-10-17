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
      className="flex w-full max-w-[27.375rem] flex-col items-center px-4"
    >
      <div className="w-full max-w-[406px]">
        <legend className="text-grey-darkFont mb-4 text-left text-2xl font-bold">
          Crear cuenta
        </legend>
        <p className="text-grey-darkFont mb-4 text-left text-[14px]">
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
      <div className="border-grey-500 my-10 w-full max-w-[406px] border-b border-solid"></div>
      <Label variant="link" className="mb-10 text-center">
        <a href={"/login"}>¿Ya tienes una cuenta? Inicia sesión</a>
      </Label>
      <div>
        <p className="text-grey-darkFont text-center text-xs">
          Al continuar, confirmas tu conformidad con nuestras 
          <span className="text-violet-600 underline decoration-solid">
            Condiciones de Uso
          </span>{" "}
          y que leíste nuestra 
          <span className="text-violet-600 underline decoration-solid">
            Declaración de Privacidad y Cookies.
          </span>
        </p>
      </div>
    </form>
  );
}
