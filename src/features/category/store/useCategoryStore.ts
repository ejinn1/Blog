import { create } from 'zustand';

interface CategoryStore {
  selectedCategory: string[];
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: [],

  addCategory: (category) =>
    set((state) => {
      if (!state.selectedCategory.includes(category)) {
        return {
          selectedCategory: [...state.selectedCategory, category],
        };
      }
      return state;
    }),

  removeCategory: (category) =>
    set((state) => ({
      selectedCategory: state.selectedCategory.filter(
        (item) => item !== category,
      ),
    })),
}));
