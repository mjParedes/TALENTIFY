import { Button } from "@/components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text/Text";
import { JobDetailsChips } from "@/components/molecules/JobDetailsChips/JobDetailsChips";
import { OwnerOfferInfo } from "@/components/molecules/OwnerOfferInfo/OwnerOfferInfo";

export const OfferResume = () => {
  return (
    <div className="w-full">
      {" "}
      <OwnerOfferInfo />
      <JobDetailsChips />
      <Text variant="Paragraph-2/14" className="mt-2 w-full text-gray-700">
        Publicado hoy
      </Text>
      <Button variant="primary" size="medium" className="my-5 max-w-[159px]">
        Postularse ahora
      </Button>
    </div>
  );
};
