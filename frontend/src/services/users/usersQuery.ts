import { useQuery } from "@tanstack/react-query";
import { getUserById } from "./usersApi";

export const useUser = () => {
  return useQuery({
    queryKey: ["users/{id}"],
    queryFn: getUserById,
  });
};
