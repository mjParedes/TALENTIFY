import { Text } from "@/components/atoms/Text/Text";

export const JobDescription = () => {
  return (
    <div>
      <Text variant="Headline-3/20">Descripción del empleo</Text>
      <Text className="py-2" variant="Paragraph-2/14">
        Buscamos un Desarrollador Full Stack con experiencia en la creación de
        aplicaciones web escalables utilizando tecnologías modernas. El
        candidato ideal debe tener un sólido conocimiento en frontend y backend,
        ser proactivo y capaz de trabajar en equipo para resolver problemas
        complejos.
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-4">
        Sueldo
      </Text>
      <Text variant="Paragraph-2/14">$80,000 - $100,000 USD anual</Text>
    </div>
  );
};
