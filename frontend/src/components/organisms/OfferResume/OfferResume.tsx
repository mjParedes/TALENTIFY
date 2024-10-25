import { Button } from "@/components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";
import { type JobOfferType } from "@/services/fakeOffers";

type OfferResumeProps = {
  offer: JobOfferType;
};

export const OfferResume: React.FC<OfferResumeProps> = ({ offer }) => {
  return (
    <div className="w-full">
      <OwnerOfferInfo
        recruiter={offer.recruiter}
        title={offer.title}
        image={offer.image}
      />
      <JobDetailsChips
        location={offer.location}
        remote={offer.remote}
        type={offer.type}
      />
      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        Publicado {offer.date}
      </Text>
      <Button variant="primary" size="medium" className="my-5 max-w-[159px]">
        Postularse ahora
      </Button>
    </div>
  );
};
