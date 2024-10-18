import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { signUp } from "../auth";

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
