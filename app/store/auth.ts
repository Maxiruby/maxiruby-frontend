import { StateCreator } from "zustand";

interface Profile {
  name: string;
  wallet_address: string;
}

export type AuthState = {
  profile: Profile | undefined;
  token: string | undefined;
  setProfile: (profile: any) => void;
  setToken: (token: string) => void;
};

export const createAuthStore: StateCreator<AuthState> = (set) => ({
  profile: undefined,
  token: "ey.15112412412...",
  setProfile: (profile: Profile) => {
    set((state) => ({ ...state, profile }));
  },
  setToken: (token: string) => {
    set((state) => ({ ...state, token }));
  },
});
