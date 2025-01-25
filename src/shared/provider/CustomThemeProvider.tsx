'use client';

import { ThemeProvider } from 'next-theme';
import { ReactNode, useEffect, useState } from 'react';

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
