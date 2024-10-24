import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { Text } from "@/components/atoms/Text/Text";

type OwnerOfferInfoProps = {
  card?: boolean;
};

export const OwnerOfferInfo: React.FC<OwnerOfferInfoProps> = ({ card }) => {
  return (
    <div>
      <Text variant={card ? "Headline-3/20" : "Headline-1/32"}>
        Desarrollador Front End
      </Text>
      <div className="mb-5 mt-4 flex w-full items-center">
        <Avatar
          src="https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
          size={card ? "xsmall" : "small"}
        ></Avatar>
        <Text
          className="ml-2"
          variant={card ? "Subheadline-4/16" : "Subheadline-2/20"}
        >
          Nombre del reclutador
        </Text>
      </div>
    </div>
  );
};
