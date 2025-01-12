'use client';

import { useState } from 'react';

import Chip from '@/shared/ui/Chip';
import { cn } from '@/shared/util/className';

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickCategory = () => {
    setIsActive((prev) => !prev);
  };

  const categoryClass = cn(
    'px-16 py-4 text-black rounded-full border',
    isActive ? 'bg-green-50 border-green-50' : 'bg-white border-gray-100',
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
