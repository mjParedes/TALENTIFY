import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserDataDto } from "@/types/auth.types";

interface UserState {
  user: UserDataDto | null;
  token: string | null;
  setUser: (user: UserDataDto) => void;
  setToken: (token: string | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }), // Persist only token, saving the id would be a security risk
    }
  )
);

// this is how we get the state outside of react components
export const getState = useUserStore.getState;
