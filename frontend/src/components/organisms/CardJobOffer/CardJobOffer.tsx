import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";

type JobOfferProps = {
  offer: {
    title: string;
    location: string;
    remote: boolean;
    type: string;
    recruiter: string;
    image: string;
    date: string;
  };
};

export const CardJobOffer: React.FC<JobOfferProps> = ({ offer }) => {
  return (
    <div className="m-2 flex w-full max-w-[365px] flex-col rounded-3xl border-[1px] border-gray-400 p-6 active:border-violet-700">
      <OwnerOfferInfo
        card
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
    </div>
  );
};
