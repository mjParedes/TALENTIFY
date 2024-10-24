import { Text } from "@/components/atoms/Text/Text";

export const JobDescription = () => {
  return (
    <div>
      <Text variant="Headline-3/20">Descripción del empleo</Text>
      <Text className="py-2" variant="Paragraph-2/14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        accusantium aperiam reiciendis porro hic obcaecati eligendi impedit
        nobis vel temporibus?
      </Text>
      <Text variant="Subheadline-4/16" className="mt-2 py-4">
        Sueldo
      </Text>
      <Text variant="Paragraph-2/14">Lorem ipsum dolor sit amet.</Text>
    </div>
  );
};
