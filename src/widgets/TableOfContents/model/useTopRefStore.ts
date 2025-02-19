import { create } from 'zustand';

interface TopRefStore {
  topRef: React.RefObject<HTMLDivElement | null> | null;
  setTopRef: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export const useTopRefStore = create<TopRefStore>((set) => ({
  topRef: null,
  setTopRef: (ref) => set({ topRef: ref }),
}));
