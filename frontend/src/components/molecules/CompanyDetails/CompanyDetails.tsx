import { Text } from "@/components/atoms/Text/Text";

export const CompanyDetails = () => {
  return (
    <div>
      <Text variant="Headline-3/20" className="mt-2 py-4">
        Empresa
      </Text>
      <Text variant="Subheadline-4/16" className="mb-2 py-2">
        Nombre Empresa
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-2">
        Descripcion de la Empresa
      </Text>
      <Text className="py-2" variant="Paragraph-2/14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        accusantium aperiam reiciendis porro hic obcaecati eligendi impedit
        nobis vel temporibus?
      </Text>
    </div>
  );
};
