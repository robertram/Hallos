import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#CB1BC3",
          secondary: "#6E236E",
          background: "#FFFFFF",
          text: "#171717",
        },
        dark: {
          primary: "#6E236E",
          secondary: "#CB1BC3",
          background: "#171717",
          text: "#FFFFFF",
        },
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
