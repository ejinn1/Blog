import type { Config } from 'tailwindcss';

import { colors } from './src/styles/custom/colors';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pxToRem = require('tailwindcss-preset-px-to-rem');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const typoGraphy = require('@tailwindcss/typography');

export default {
  presets: [pxToRem],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: '750px',
          },
        },
      }),
    },
  },
  plugins: [typoGraphy],
} satisfies Config;
