import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login, signUp } from "../auth";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      toast.success("Registro exitoso");
      router.push("/login");
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: login,
    onSuccess: async () => {
      toast.success("Inicio de sesión exitoso");
      router.push("/dashboard");
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
