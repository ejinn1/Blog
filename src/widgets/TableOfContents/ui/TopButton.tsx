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
      className="flex-center transition-colors-base size-32 rounded-8 text-black hover:bg-beige-400 dark:text-gray-300 dark:hover:bg-gray-400/0 dark:hover:text-gray-200"
    >
      <ArrowUp />
    </button>
  );
};

export default TopButton;
