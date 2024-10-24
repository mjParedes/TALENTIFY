"use client";

import { useUserStore } from "@/store/auth.store";
import { Text } from "../../atoms/Text/Text";

interface WelcomeMessageProps {
  isRecruiter?: boolean;
}

export function WelcomeMessage({ isRecruiter = false }: WelcomeMessageProps) {
  const user = useUserStore((state) => state.user);
  return (
    <Text variant="Headline-1/32">
      Bienvenido {isRecruiter ? "reclutador" : ""}{" "}
      {user ? user.fullName : "Usuario"}
    </Text>
  );
}
