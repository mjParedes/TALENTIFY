import { type UserType } from "@/types/user.types";
import { apiClient } from "../api-client";

export const getUserById = async (id: number): Promise<UserType> => {
  const response = await apiClient.get<UserType>(`/users/${id}`);
  return response.data;
};
