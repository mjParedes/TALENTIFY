"useclient";

import { Button } from "@/components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";
import { getFormattedDate } from "@/hooks/formattedDate";
import { type OfferDto } from "@/types/offers.types";

type OfferResumeProps = {
  offer: OfferDto;
};

export const OfferResume: React.FC<OfferResumeProps> = ({ offer }) => {
  const formattedDate = getFormattedDate(offer.creationDate);

  return (
    <div className="w-full">
      <OwnerOfferInfo
        ownerFullName={offer?.owner.fullName}
        title={offer?.title}
        image={offer?.image}
      />
      <JobDetailsChips
        location={offer.location}
        workDay={offer.workDay}
        modality={offer.modality}
      />

      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        {formattedDate}
      </Text>
      <Button variant="primary" size="medium" className="my-5 max-w-[159px]">
        Postularse ahora
      </Button>
    </div>
  );
};
