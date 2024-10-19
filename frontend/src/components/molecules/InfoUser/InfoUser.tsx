import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { Text } from "@/components/atoms/Text/Text";

export const InfoUser = () => {
  return (
    <div className="mb-4 flex w-[19.25rem] items-start gap-2 py-2">
      <Avatar size="large" />
      <div>
        <Text variant="Headline-3/20" className="text-grey-darkFont">
          María Perez
        </Text>
        <Text variant="Paragraph-2/14" className="text-gray-500">
          Product Designer · Diseñadora UX/UI
        </Text>
      </div>
    </div>
  );
};
