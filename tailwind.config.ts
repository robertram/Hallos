import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'white-10': 'rgba(255, 255, 255, 0.1)',
      },
      colors: {
        'white-10': 'rgba(255, 255, 255, 0.5)',
        light: {
          primary: "#CB1BC3",
          secondary: "#6E236E",
          neutral: "#4C4C58",
          background: "#FFFFFF",
          text: "#171717",
        },
        dark: {
          primary: "#6E236E",
          secondary: "#CB1BC3",
          background: "#171717",
          text: "#FFFFFF",
        },
        customGray: {
          49: 'rgba(217, 217, 217, 0.49)',
          0: 'rgba(217, 217, 217, 0)',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #1A82FE, #A14BFC)',
        'glass-gradient': 'linear-gradient(to top, #D9D9D90F, #D9D9D900)',
        'custom-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.06) 0%, rgba(217, 217, 217, 0.00) 125.86%)',
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      fontSize: {
        'h1': ['66px', { lineHeight: '66px', letterSpacing: '-3px' }],
        'h2': ['44px', { lineHeight: '55px', letterSpacing: '-3px' }],
        'h3': ['30px', { lineHeight: '40px', letterSpacing: '-1px' }],
        'h4': ['20px', { lineHeight: '28px', letterSpacing: '-1px' }],
        'h5': ['16px', { lineHeight: '24px', letterSpacing: '-0.5px' }],

        // Button styles
        'button1': ['16px', { lineHeight: '19.84px', letterSpacing: '-0.5px' }],
        'button2': ['14px', { lineHeight: '17.36px', letterSpacing: '-0.5px' }],

        // Text styles
        'text1': ['16px', { lineHeight: '24px' }],
        'text2': ['14px', { lineHeight: '20px' }],

        // Caption style
        'caption': ['12px', { lineHeight: '16px' }],
      },
      fontWeight: {
        semibold: '600',
      },
    },
  },
  plugins: [],
} satisfies Config;
