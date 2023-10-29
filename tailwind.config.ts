import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/public/bgIntro.svg')",

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#074CA1',
        'secondary': '#fff',
      },
      minWidth: {
        '64': '64rem'
      },
      textColor: {
        'primary': '#074CA1'
      },
      borderColor: {
        'primary': '#074CA1'
      }
    },
  },
  plugins: [],
};
export default config;
