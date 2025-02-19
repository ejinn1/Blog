import useTheme from 'next-theme';
import { useState } from 'react';

import { cn } from '@/shared/util/className';

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [clicked, setClicked] = useState<'class' | 'system'>('class');

  const handleClickedClassButton = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setClicked('class');
  };

  const hanldeClickedSystemButton = () => {
    setTheme('system');
    setClicked('system');
  };

  const buttonClass = (value: 'class' | 'system') =>
    cn(
      'rounded-8 p-4 text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-black transition-colors-base',
      clicked === value && '!text-gray-200',
    );

  return {
    theme,
    handleClickedClassButton,
    hanldeClickedSystemButton,
    buttonClass,
  };
};
