"use client";

import { useState } from "react";
import { useUserStore } from "@/store/auth.store";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Button } from "../../atoms/Button/Button";
import { NavAuthButtons } from "../../molecules/NavAuthButtons/NavAuthButtons";
import { UserMenu } from "../UserMenu/UserMenu";

export function NavUserSection() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useUserStore((state) => state.user);
  return (
    <div>
      {user ? (
        <div className="relative">
          <Button
            variant="default"
            className="p-0"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <Avatar
              size="medium"
              src="https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
            />
          </Button>
          {showMenu && <UserMenu />}
        </div>
      ) : (
        <NavAuthButtons />
      )}
    </div>
  );
}
