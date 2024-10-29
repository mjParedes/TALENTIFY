"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/auth.store";
import { cn } from "@/utils/cn";
import { PageLogo } from "../../atoms/PageLogo/PageLogo";
import { NavUserSection } from "../NavUserSection/NavUserSection";

export function Navbar() {
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();
  const isRecruiter = user?.role === "RECRUITER";

  const isDashboard = pathname.includes("/home");
  const homePathByRole = isRecruiter ? "/home/recruiters" : "/home/users";

  return (
    <header
      className={cn(
        "flex w-full items-center border-b border-grey-400 bg-white",
        isRecruiter && "bg-violet-900"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-[90%] justify-between py-4",
          !isDashboard && "w-[95%] max-w-7xl"
        )}
      >
        <Link
          href={user ? homePathByRole : "/"}
          className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
        >
          <PageLogo isRecruiter={isRecruiter} />
        </Link>
        <NavUserSection isRecruiter={isRecruiter} />
      </div>
    </header>
  );
}
