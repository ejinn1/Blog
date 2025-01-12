'use client';

import { useState } from 'react';

import { useCategoryStore } from '@/features/category/store/useCategoryStore';
import Chip from '@/shared/ui/Chip';
import { cn } from '@/shared/util/className';

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  const [isActive, setIsActive] = useState(false);

  const addCategory = useCategoryStore((state) => state.addCategory);
  const removeCategory = useCategoryStore((state) => state.removeCategory);

  const handleClickCategory = () => {
    setIsActive((prev) => !prev);
    if (isActive) {
      removeCategory(category);
    } else {
      addCategory(category);
    }
  };

  const categoryClass = cn(
    'px-16 py-4 text-black rounded-full border text-14 font-medium transition-colors duration-300 ease-in-out hover:bg-green-100 hover:border-green-100',
    isActive ? 'bg-green-200 border-green-200' : 'bg-white border-gray-100',
  );

  return (
    <Chip
      label={category}
      className={categoryClass}
      onClick={handleClickCategory}
    />
  );
};

export default Category;
