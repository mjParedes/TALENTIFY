import Link from "next/link";
import { Button } from "@/components/atoms/Button/Button";

export function NavAuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button asChild variant="outlined">
        <Link href={"/login"}>Iniciar Sesión</Link>
      </Button>
      <Button asChild variant="primary">
        <Link href={"/register"}>Registro</Link>
      </Button>
    </div>
  );
}
