"use client";

import { Button } from "@/components/atoms/Button/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select/Select";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { Text } from "@/components/atoms/Text/Text";
import { InputField } from "@/components/molecules/InputField/InputField";
import { jobPostSchema } from "@/validations/jobpost.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash } from "lucide-react";
import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { type z } from "zod";
import { Label } from "../../atoms/Label/Label";
import { TextAreaField } from "../../molecules/TextAreaField/TextAreaField";

type JobPostFormValues = z.infer<typeof jobPostSchema>;

const defaultRequirements = [{ description: "" }, { description: "" }];

export function JobPostForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JobPostFormValues>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      requirements: defaultRequirements,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "requirements",
    rules: { minLength: 3 },
  });

  const onSubmit: SubmitHandler<JobPostFormValues> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[38.75rem] flex-col items-center px-4 pb-16"
    >
      <div className="mb-16 w-full">
        <Text variant="Headline-1/32" className="mb-4" element="legend">
          Publica tu Empleo
        </Text>
        <Text variant="Paragraph-2/14">
          <span className="font-semibold"> ¿Estás listo para empezar?</span>{" "}
          Completa el formulario de Publicación de Empleo y descubre el
          potencial de tu próximo gran empleado.
        </Text>
      </div>
      <div className="mb-16 w-full space-y-16">
        <div className="w-full space-y-6">
          <Text variant="Subheadline-1/24">Información del Empleo</Text>
          <InputField
            name="title"
            placeholder="Ej. Product Designer"
            label="Título del empleo*"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
          <InputField
            name="location"
            placeholder="Ciudad, provincia, país."
            label="Ubicación*"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
          <Controller
            control={control}
            name="modality"
            render={({ field }) => (
              <fieldset className="relative w-full">
                <Label htmlFor={field.name} className="mb-2">
                  Modalidad de trabajo*
                </Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecciona</SelectLabel>
                      <SelectItem value="Presencial">Presencial</SelectItem>
                      <SelectItem value="Híbrido">Híbrido</SelectItem>
                      <SelectItem value="Remoto">Remoto</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {!!errors?.["modality"] && (
                  <p
                    id={`modality-error`}
                    className="pl-4 pt-2 text-xs text-red-alert"
                  >
                    {String(errors?.["modality"]?.message)}
                  </p>
                )}
              </fieldset>
            )}
          />
          <Controller
            control={control}
            name="contractType"
            render={({ field }) => (
              <fieldset className="relative w-full">
                <Label htmlFor={field.name} className="mb-2">
                  Tipo de contrato*
                </Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecciona</SelectLabel>
                      <SelectItem value="Contrato fijo">
                        Contrato fijo
                      </SelectItem>
                      <SelectItem value="Contrato temporal">
                        Contrato temporal
                      </SelectItem>
                      <SelectItem value="Pasantía">Pasantía</SelectItem>
                      <SelectItem value="Trainee">Trainee</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {!!errors?.["contractType"] && (
                  <p
                    id={`contractType-error`}
                    className="pl-4 pt-2 text-xs text-red-alert"
                  >
                    {String(errors?.["contractType"]?.message)}
                  </p>
                )}
              </fieldset>
            )}
          />
          <Controller
            control={control}
            name="workDay"
            render={({ field }) => (
              <fieldset className="relative w-full">
                <Label htmlFor={field.name} className="mb-2">
                  Jornada laboral*
                </Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecciona</SelectLabel>
                      <SelectItem value="Tiempo completo">
                        Tiempo completo
                      </SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                      <SelectItem value="Medio tiempo">Medio tiempo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {!!errors?.["workDay"] && (
                  <p
                    id={`workDay-error`}
                    className="pl-4 pt-2 text-xs text-red-alert"
                  >
                    {String(errors?.["workDay"]?.message)}
                  </p>
                )}
              </fieldset>
            )}
          />
          <TextAreaField
            name="description"
            placeholder="Breve descripción del puesto, actividades y responsabilidades"
            label="Descripción del empleo*"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
          <InputField
            name="salary"
            placeholder="400.00$ - 600.00$"
            label="Salario"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
        </div>
        <div className="my-10 w-full border-b border-solid border-grey-500"></div>

        <div className="w-full space-y-6">
          <Text variant="Subheadline-1/24">Requerimientos</Text>
          {fields.map((field, index) => {
            const error = errors?.requirements?.[index]?.description;
            return (
              <div key={field.id} className="flex items-center">
                <InputField
                  name={`requirements.${index}.description`}
                  placeholder="Ej. Conocimiento en React"
                  label={`Requerimiento ${index + 1}*`}
                  register={register}
                  errors={errors}
                  arrayErrorMessage={error?.message}
                  fieldStyles="mx-0"
                />
                <Button
                  type="button"
                  variant="default"
                  className="ml-3 mt-3.5 rounded-full border border-red-alert p-2 text-red-alert opacity-70 disabled:border-grey-400 disabled:text-gray-400"
                  onClick={() => fields.length > 2 && remove(index)}
                  disabled={fields.length <= 2}
                >
                  <Trash size={20} />
                </Button>
              </div>
            );
          })}
          <Button
            type="button"
            variant="textWithIcon"
            onClick={() => append({ description: "" })}
          >
            <span className="flex items-center gap-4">
              <Plus size={18} />
              Añadir Requerimiento
            </span>
          </Button>
        </div>
        <div className="my-10 w-full border-b border-solid border-grey-500"></div>

        <div className="w-full space-y-6">
          <Text variant="Subheadline-1/24">Empresa</Text>
          <InputField
            name="companyName"
            placeholder="Nombre de la empresa"
            label="Nombre de la empresa*"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
          <TextAreaField
            name="companyDescription"
            placeholder="Breve descripción del puesto, actividades y responsabilidades"
            label="Descripción de la empresa*"
            register={register}
            errors={errors}
            fieldStyles="mx-0"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        className="mt-4 h-12"
      >
        {false ? <Spinner className="h-7 w-7" /> : "Publicar ahora"}
      </Button>
    </form>
  );
}
