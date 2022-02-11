import create from "zustand";

export interface UserStoreState {
    activeUserId: string | null,
    setActiveUserId: (id: string | null) => void,
};

export const useUserStore = create<UserStoreState>((set) => ({
    activeUserId: null,
    setActiveUserId: (id: string | null) => {
        set((state) => ({
            activeUserId: id,
        }))
    },
  }));
  