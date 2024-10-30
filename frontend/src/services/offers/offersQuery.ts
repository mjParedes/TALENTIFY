import { useQuery } from "@tanstack/react-query";
import { getAllOffers } from "./offersApi";

export const useOffers = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: getAllOffers,
  });
};
