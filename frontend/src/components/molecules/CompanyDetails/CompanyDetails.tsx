import { Text } from "@/components/atoms/Text/Text";

export const CompanyDetails = () => {
  return (
    <div>
      <Text variant="Headline-3/20" className="mt-2 py-4">
        Empresa
      </Text>
      <Text variant="Subheadline-4/16" className="mb-2 py-2">
        Tech Solutions SA
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-2">
        Descripcion de la Empresa
      </Text>
      <Text className="py-2" variant="Paragraph-2/14">
        Somos una empresa innovadora en el desarrollo de soluciones tecnológicas
        para grandes corporaciones y startups. Nos especializamos en la
        transformación digital y la implementación de soluciones en la nube para
        optimizar los procesos de negocio.
      </Text>
    </div>
  );
};
