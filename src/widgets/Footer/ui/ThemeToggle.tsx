'use client';

import useTheme from 'next-theme';
import { useEffect, useState } from 'react';

import DarkIcon from '@/shared/svg/ic-dark.svg';
import LightIcon from '@/shared/svg/ic-light.svg';
import MonitorIcon from '@/shared/svg/ic-monitor.svg';
import { cn } from '@/shared/util/className';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [clicked, setClicked] = useState<'class' | 'system'>('class');

  const buttonClass = (value: 'class' | 'system') =>
    cn(
      'rounded-md bg-gray-100 p-4 text-black transition-colors-base dark:bg-black dark:text-gray-300 dark:hover:text-gray-200',
      clicked === value && '!text-gray-200',
    );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        className={buttonClass('class')}
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
          setClicked('class');
        }}
      >
        {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      </button>
      <button
        onClick={() => {
          setTheme('system');
          setClicked('system');
        }}
        className={buttonClass('system')}
      >
        <MonitorIcon />
      </button>
    </>
  );
};

export default ThemeToggle;
