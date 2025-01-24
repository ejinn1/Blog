'use client';

import useTheme from 'next-theme';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="rounded-md bg-gray-100 p-4 text-gray-900 transition-colors duration-300 dark:bg-gray-400 dark:text-gray-100"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Image
            src="/svg/ic-dark.svg"
            width={24}
            height={24}
            alt="dark mode button"
          />
        ) : (
          <Image
            src="/svg/ic-light.svg"
            width={24}
            height={24}
            alt="light mode button"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
