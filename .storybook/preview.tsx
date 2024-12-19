import React from 'react'
import type { Preview } from "@storybook/react";
import { Geist } from "next/font/google";
import "../src/app/globals.css";
// import withAppRouterContext from '../src/provider/withAppRouterContext'

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable: '--font-geist-sans'
});

const preview: Preview = {
  parameters: {
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
  // decorators: [withAppRouterContext],
};

export default preview;
