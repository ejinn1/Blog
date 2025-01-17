'use client';

import { useActiveCategory } from '../model/useActiveCategory';

import Chip from '@/shared/ui/Chip';
import { cn } from '@/shared/util/className';

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  const { isActive, handleClickCategory } = useActiveCategory(category);

  const categoryClass = cn(
    'px-16 py-4 text-black rounded-full border !text-14 font-medium transition-colors-base hover:bg-green-50 hover:border-gray-100',
    isActive
      ? 'text-green-500 border-green-300 bg-green-50'
      : 'bg-white border-gray-100',
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
