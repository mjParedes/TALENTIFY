import Link from "next/link";
import { X } from "lucide-react";
import { InfoUser } from "@/components/molecules/InfoUser/InfoUser";
import { LogoutButton } from "@/components/molecules/LogoutButton/LogoutButton";
import { MenuUserButtons } from "@/components/molecules/MenuUserButtons/MenuUserButtons";

export const UserMenu = () => {
  return (
    <div className="absolute -right-3 top-14 z-10 flex h-full w-full flex-col items-start justify-between rounded-3xl bg-white p-4 md:h-[28.875rem] md:w-[21.25rem] md:border-[1px] md:border-solid md:border-gray-500">
      <Link className="self-end text-gray-900 md:hidden" href="/">
        <X />
      </Link>
      <InfoUser />
      <MenuUserButtons />
      <LogoutButton />
    </div>
  );
};
