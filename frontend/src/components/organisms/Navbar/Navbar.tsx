import Link from "next/link";
import { NavAuthButtons } from "@/components/molecules/NavAuthButtons/NavAuthButtons";
import { PageLogo } from "../../atoms/PageLogo/PageLogo";

export function Navbar() {
  return (
    <header className="flex w-full items-center border-b border-grey-400 bg-white">
      <div className="mx-auto flex w-[95%] max-w-7xl justify-between py-4">
        <Link
          href={"/"}
          className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
        >
          <PageLogo />
        </Link>
        <NavAuthButtons />
      </div>
    </header>
  );
}
