import type { Config } from 'tailwindcss';

import { colors } from './src/styles/colors';
import { fontWeight } from './src/styles/fontWeight';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pxToRem = require('tailwindcss-preset-px-to-rem');

export default {
  presets: [pxToRem],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontWeight: fontWeight,
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
