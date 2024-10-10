import { Text } from "@/components/atoms/Text/Text";
import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";

export function Hero() {
  return (
    <div className="flex h-full flex-col items-center gap-10 pt-[calc(30vh-72px)]">
      <Text className="text-6xl font-bold text-purple-700">Talentify</Text>;
      <SearchInput />
    </div>
  );
}
