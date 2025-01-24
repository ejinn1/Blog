'use client';

import { ThemeProvider } from 'next-theme';
import { ReactNode } from 'react';

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
