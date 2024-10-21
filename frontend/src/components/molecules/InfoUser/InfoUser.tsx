import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { Text } from "@/components/atoms/Text/Text";

export const InfoUser = () => {
  return (
    <div className="mb-4 flex w-[19.25rem] items-start gap-2 py-2">
      <Avatar
        size="large"
        src="https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
      />
      <div>
        <Text variant="Headline-3/20" className="text-grey-darkFont">
          María Perez
        </Text>
        <Text
          variant="Paragraph-2/14"
          className="w-full max-w-[250px] overflow-hidden text-wrap text-gray-500"
        >
          Product Designer · Diseñadora UX/UI
        </Text>
      </div>
    </div>
  );
};
