'use client';

import { useEffect, useState } from 'react';

import { useThemeToggle } from '../model/useThemeToggle';

import DarkIcon from '@/shared/svg/ic-dark.svg';
import LightIcon from '@/shared/svg/ic-light.svg';
import MonitorIcon from '@/shared/svg/ic-monitor.svg';

const ThemeToggle = () => {
  const {
    theme,
    handleClickedClassButton,
    hanldeClickedSystemButton,
    buttonClass,
  } = useThemeToggle();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        className={buttonClass('class')}
        onClick={handleClickedClassButton}
      >
        {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      </button>
      <button
        onClick={hanldeClickedSystemButton}
        className={buttonClass('system')}
      >
        <MonitorIcon />
      </button>
    </>
  );
};

export default ThemeToggle;
