import React from 'react'
import type { Preview } from "@storybook/react";
import { Geist } from "next/font/google";
import "../src/app/globals.css";
import { themes } from "@storybook/theming";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable: '--font-geist-sans'
});

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <main className={`${geist.className}`}>
        <Story />
      </main>
    )
  ]
};

export default preview;
