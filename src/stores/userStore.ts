import create from "zustand";
import { User } from "../../common/types";

export interface UserStoreState {
    user: User | null,
    setUser: (user: User | null) => void,
};

export const useUserStore = create<UserStoreState>((set) => ({
    user: null,
    setUser: (user: User | null) => {
        set((state) => ({
            user: user,
        }))
    },
  }));
  