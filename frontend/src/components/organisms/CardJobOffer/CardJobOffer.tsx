import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";

export const CardJobOffer = () => {
  return (
    <div className="m-2 flex w-full max-w-[365px] flex-col rounded-3xl border-[1px] border-gray-400 p-6 active:border-violet-700">
      <OwnerOfferInfo card />
      <JobDetailsChips />
      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        Publicado hoy
      </Text>
    </div>
  );
};
