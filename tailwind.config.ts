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
        sans: ['Geist', 'sans-serif'],
        // or if you want to use it as a specific class
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
