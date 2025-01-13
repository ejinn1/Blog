import { useState } from 'react';

import { useCategoryStore } from '@/features/category/store/useCategoryStore';

export const useActiveCategory = (category: string) => {
  const { selectedCategory, addCategory, removeCategory } = useCategoryStore();

  const [isActive, setIsActive] = useState(selectedCategory.includes(category));

  const handleClickCategory = () => {
    setIsActive((prev) => !prev);
    if (isActive) {
      removeCategory(category);
    } else {
      addCategory(category);
    }
  };

  return { isActive, handleClickCategory };
};
