'use client';

import { useTopRefStore } from '../model/useTopRefStore';

import ArrowUp from '@/shared/svg/ic-arrow-up.svg';

const TopButton = () => {
  const { topRef } = useTopRefStore();

  const scrollToTop = () => {
    if (topRef?.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex-center size-32 rounded-md bg-gray-100 text-black transition-colors duration-300 dark:bg-black dark:text-gray-300 dark:hover:text-gray-200"
    >
      <ArrowUp />
    </button>
  );
};

export default TopButton;
