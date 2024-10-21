"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { useLogout } from "@/services/mutations/auth-mutations";

export const LogoutButton = () => {
  const logOut = useLogout();
  return (
    <div className="flex w-full flex-col items-center">
      <Button
        variant="textWithIcon"
        size="medium"
        className="mt-4 flex w-full justify-start pr-4"
        onClick={logOut}
      >
        <LogOut className="mx-2" />
        Cerrar sesión
      </Button>
    </div>
  );
};
