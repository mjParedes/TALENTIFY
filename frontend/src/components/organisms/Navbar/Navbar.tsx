import Link from "next/link";
import { NavAuthButtons } from "@/components/molecules/NavAuthButtons/NavAuthButtons";

export function Navbar() {
  return (
    <header className="flex w-full items-center bg-slate-400">
      <div className="mx-auto flex w-full max-w-6xl justify-between px-6 py-4 sm:px-12">
        <Link
          href={"/"}
          className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
        >
          Talentify
        </Link>
        <NavAuthButtons />
      </div>
    </header>
  );
}
