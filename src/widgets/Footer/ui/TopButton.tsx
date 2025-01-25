'use client';

import Image from 'next/image';

import { useTopRefStore } from '../model/useTopRefStore';

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
      className="flex-center size-32 rounded-md bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-gray-400"
    >
      <Image
        src="/svg/ic-arrow-up.svg"
        width={30}
        height={30}
        alt="top button"
      />
    </button>
  );
};

export default TopButton;
