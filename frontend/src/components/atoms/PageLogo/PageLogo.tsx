import Image from "next/image";

type PageLogoProps = {
  isFull?: boolean;
};

export function PageLogo({ isFull = true }: PageLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Talentify"
        src="/talentify-logo.svg"
        width={35}
        height={40}
      ></Image>
      {isFull && (
        <Image
          alt="Talentify"
          src="/talentify-name-logo.svg"
          width={143}
          height={33}
        ></Image>
      )}
    </div>
  );
}
