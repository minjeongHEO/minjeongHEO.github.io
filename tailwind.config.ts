import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      width: {
        '44': '11rem',
      },
      fontFamily: {
        apple: ['SF Pro Display', 'sans-serif'],
        sandol: ['AppleSDGothicNeo', 'sans-serif'],
      },
      colors: {
        testColor: 'var(--testColor)',
        mainColor: 'var(--mainColor)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        background2: 'var(--background-2)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        light: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 6px -1px rgba(227, 227, 227, 0.1), 0 2px 4px -2px rgba(227, 227, 227, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addBase }: PluginAPI) {
      addBase({
        a: { textDecoration: 'none' },
      });
    },
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.align-content-center': {
          'align-content': 'center',
        },
      });
    },
  ],
} satisfies Config;

export default config;
