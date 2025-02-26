import type { StorybookConfig } from "@storybook/nextjs";
import '../src/app/globals.css; // Import TailwindCSS or other global styles

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    "@storybook/addon-onboarding",
    '@storybook/addon-links',
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: 'webpack5', // Use Webpack 5 (default for Storybook 6+)
  },
  staticDirs: ["../public"],
};
export default config;