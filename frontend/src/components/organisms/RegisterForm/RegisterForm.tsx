"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <legend className="text-center text-2xl font-bold text-black">
        Registro
      </legend>

      <InputField
        name="email"
        label="Correo electrónico"
        register={register}
        errors={errors}
      />
      <InputField
        name="fullName"
        label="Nombre y Apellido"
        register={register}
        errors={errors}
      />
      <InputField
        name="password"
        label="Contraseña"
        register={register}
        errors={errors}
      />
      <InputField
        name="passwordConfirmation"
        label="Confirme su contraseña"
        register={register}
        errors={errors}
      />
      <Button type="submit">Registrar</Button>
    </form>
  );
}
