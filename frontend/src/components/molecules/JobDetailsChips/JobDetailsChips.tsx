import { Chip } from "@/components/atoms/Chip/Chip";

export const JobDetailsChips = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <Chip className="mb-2 mr-2" variant="default" location={true}>
        Buenos Aires, Argentina
      </Chip>
      <Chip className="mb-2 mr-2" variant="default">
        Remoto
      </Chip>{" "}
      <Chip className="mb-2 mr-2" variant="default">
        Tiempo completo
      </Chip>
    </div>
  );
};
