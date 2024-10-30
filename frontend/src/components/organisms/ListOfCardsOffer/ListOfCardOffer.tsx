"use client";

import { Text } from "@/components/atoms/Text/Text";
import { useOffers } from "@/services/offers/offersQuery";
import { CardJobOffer } from "../CardJobOffer/CardJobOffer";
import { ListOfCardOfferSkeleton } from "./ListOfCardOfferSkeleton";

export const ListOfCardOffer = () => {
  const { isPending, data } = useOffers();

  if (isPending) return <ListOfCardOfferSkeleton />;

  return (
    <div className="mr-2 flex max-h-[700px] flex-col overflow-scroll rounded-[26px] bg-gray-50">
      <Text variant="Subheadline-2/20" className="mt-4 p-4">
        Resultados ({data?.length})
      </Text>
      {data &&
        data?.length > 0 &&
        data?.map((offer) => <CardJobOffer key={offer.id} offer={offer} />)}
    </div>
  );
};
