import { type OfferDto } from "@/types/offers.types";
import { apiClient } from "../api-client";

export const getAllOffers = async (): Promise<OfferDto[]> => {
  const response = await apiClient.get<OfferDto[]>("/offers");
  return response.data;
};
