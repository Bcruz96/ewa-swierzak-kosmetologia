import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ivory': '#F8F4EC',
        'warm-white': '#FFFDF8',
        'beige': '#E8DDCC',
        'champagne': '#D6BE8A',
        'charcoal': '#2C2723',
        'muted': '#7A6E61',
        primary: {
          DEFAULT: '#2C2723',
          gold: '#B89B5E',
          white: '#FFFDF8',
        },
        background: {
          light: '#F8F4EC',
          dark: '#2C2723',
        },
        text: {
          light: '#FFFDF8',
          dark: '#2C2723',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-body)', 'Montserrat', 'sans-serif'],
        ui: ['var(--font-ui)', 'Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
