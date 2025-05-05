import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        raleway: 'var(--font-raleway)',
      },
    },
  },
  plugins: [],
};

export default config;