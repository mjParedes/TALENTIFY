import { CircleCheck, CircleX, FileText } from "lucide-react";
import {
  StatCard,
  StatCardProps,
} from "@/components/molecules/StatCard/StatCard";

const mockData: StatCardProps[] = [
  {
    title: "Avisos activos",
    Icon: CircleCheck,
    iconStyles: "text-green-success",
    quantity: 4,
  },
  {
    title: "Avisos expirados",
    Icon: CircleX,
    iconStyles: "text-red-alert",
    quantity: 24,
  },
  {
    title: "Total de avisos",
    Icon: FileText,
    iconStyles: "text-violet-800",
    quantity: 28,
  },
];

export function JobPostsStatisticsContainer() {
  return (
    <div className="xs:justify-start xs:px-0 flex flex-wrap justify-center gap-4 px-4">
      {mockData.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
}
