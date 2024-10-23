"use client";

import { WelcomeMessage } from "@/components/molecules/WelcomeMessage/WelcomeMessage";
import { useRedirectToHomeByRole } from "@/hooks/useRedirectToHomeByRole";

export default function RecruitersHome() {
  useRedirectToHomeByRole();
  return (
    <div className="flex w-full justify-center pt-[15%]">
      <WelcomeMessage isRecruiter />
    </div>
  );
}
