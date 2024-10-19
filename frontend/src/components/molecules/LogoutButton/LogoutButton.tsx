import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";

export const LogoutButton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Button
        variant="textWithIcon"
        size="medium"
        className="mt-4 flex w-full justify-start pr-4"
      >
        <LogOut className="mx-2" />
        <Link href={"/sign-out"}>Cerrar sesión</Link>
      </Button>
    </div>
  );
};
