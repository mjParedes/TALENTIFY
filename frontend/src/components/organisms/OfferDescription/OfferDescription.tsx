import { CompanyDetails } from "@/components/molecules/CompanyDetails/CompanyDetails";
import { JobDescription } from "@/components/molecules/JobDescription/JobDescription";
import { ShareSaveButton } from "@/components/molecules/ShareSaveButtons/ShareSaveButton";
import { fakeOffers } from "@/services/fakeOffers";
import { JobRequirements } from "../../molecules/JobRequirements/JobRequirements";
import { OfferResume } from "../OfferResume/OfferResume";

export const OfferDescription = () => {
  const offer = fakeOffers[0];
  return (
    <div className="flex max-h-[700px] w-full max-w-[827px] flex-col overflow-scroll rounded-3xl border-[1px] border-gray-400 p-6">
      <div className="relative flex w-full items-start justify-between">
        <OfferResume offer={offer} />
        <ShareSaveButton />
      </div>
      <hr />
      <div className="mt-8">
        <JobDescription />
        <JobRequirements />
        <CompanyDetails />
      </div>
    </div>
  );
};
