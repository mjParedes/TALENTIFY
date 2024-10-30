"use client";

import { useRouter } from "next/navigation";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";
import { type OfferDto } from "@/types/offers.types";

interface JobOfferProps {
  offer: OfferDto;
}

export const CardJobOffer: React.FC<JobOfferProps> = ({ offer }) => {
  const router = useRouter();
  const getFormattedDate = (dateString: string) => {
    const offerDate = new Date(dateString);
    const today = new Date();

    const dayDifference = Math.floor(
      (today.getTime() - offerDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (dayDifference === 0) {
      return "Publicado hoy";
    } else if (dayDifference === 1) {
      return "Publicado ayer";
    } else if (dayDifference <= 7) {
      return `Publicado hace ${dayDifference} días`;
    } else {
      return (
        `Publicado el ` +
        new Intl.DateTimeFormat("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(offerDate)
      );
    }
  };

  const formattedDate = getFormattedDate(offer.creationDate);

  const handleClick = () => {
    router.push(`/jobs?id=${offer.id}`);
  };

  if (!offer) {
    return null;
  }

  return (
    <div
      className="m-2 flex w-full max-w-[365px] flex-col rounded-3xl border-[1px] border-gray-400 p-6 active:border-violet-700"
      onClick={handleClick}
    >
      <OwnerOfferInfo
        card
        /* 
          recruiter={offer.recruiter}
          image={offer.image}
        */
        title={offer.title}
      />
      <JobDetailsChips
        workDay={offer?.workDay}
        location={offer?.location}
        modality={offer?.modality}
      />
      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        {formattedDate}
      </Text>
    </div>
  );
};
