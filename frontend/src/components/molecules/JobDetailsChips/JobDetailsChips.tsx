import { Chip } from "@/components/atoms/Chip/Chip";

type JobDetailsChipsProps = {
  location: string;
  remote: boolean;
  type: string;
};

export const JobDetailsChips: React.FC<JobDetailsChipsProps> = ({
  location,
  remote,
  type,
}) => {
  return (
    <div className="flex flex-row flex-wrap">
      <Chip className="mb-2 mr-2" variant="default" location={true}>
        {location}
      </Chip>
      {remote && (
        <Chip className="mb-2 mr-2" variant="default">
          Remoto
        </Chip>
      )}
      <Chip className="mb-2 mr-2" variant="default">
        {type}
      </Chip>
    </div>
  );
};
