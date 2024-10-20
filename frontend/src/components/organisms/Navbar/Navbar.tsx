import Link from "next/link";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { NavAuthButtons } from "@/components/molecules/NavAuthButtons/NavAuthButtons";
import { PageLogo } from "../../atoms/PageLogo/PageLogo";
import { UserMenu } from "../UserMenu/UserMenu";

export function Navbar() {
  return (
    <header className="border-grey-400 flex w-full items-center border-b bg-white">
      <div className="mx-auto flex w-[95%] max-w-7xl justify-between py-4">
        <Link
          href={"/"}
          className="flex h-[inherit] items-center text-center text-2xl font-bold text-purple-700"
        >
          <PageLogo />
        </Link>
        <NavAuthButtons />
        <Avatar
          size="medium"
          src="https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
        />
        <UserMenu />
      </div>
    </header>
  );
}
