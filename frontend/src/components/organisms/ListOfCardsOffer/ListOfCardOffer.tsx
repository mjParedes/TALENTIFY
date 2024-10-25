import { Text } from "@/components/atoms/Text/Text";
import { fakeOffers } from "@/services/fakeOffers";
import { CardJobOffer } from "../CardJobOffer/CardJobOffer";

export const ListOfCardOffer = () => {
  return (
    <div className="mr-2 flex max-h-[700px] flex-col overflow-scroll rounded-[26px] bg-gray-50">
      <Text variant="Subheadline-2/20" className="mt-4 p-4">
        Resultados ({fakeOffers.length})
      </Text>
      {fakeOffers.map((offer) => (
        <CardJobOffer key={offer.id} offer={offer} />
      ))}
    </div>
  );
};
