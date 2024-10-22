"use client";

import Link from "next/link";
import { useUserStore } from "@/store/auth.store";
import { cn } from "@/utils/cn";
import { PageLogo } from "../../atoms/PageLogo/PageLogo";
import { NavUserSection } from "../NavUserSection/NavUserSection";

export function Navbar() {
  const user = useUserStore((state) => state.user);
  const isRecruiter = user?.role === "RECRUITER";

  return (
    <header
      className={cn(
        "flex w-full items-center border-b border-grey-400 bg-white",
        isRecruiter && "bg-violet-900"
      )}
    >
      <div className="mx-auto flex w-[95%] max-w-7xl justify-between py-4">
        <Link
          href={"/"}
          className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
        >
          <PageLogo isRecruiter={isRecruiter} />
        </Link>
        <NavUserSection isRecruiter={isRecruiter} />
      </div>
    </header>
  );
}
