import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-styling-webpack",
  ],
  framework: "@storybook/nextjs",
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};

export default config;





// import type { StorybookConfig } from '@storybook/nextjs';

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
//   ],
//   "addons": [
//     {
//       "name": "@storybook/addon-essentials",
//       "options": {
//         "docs": false
//       }
//     },
//     "@storybook/addon-onboarding",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//   ],
//   "framework": {
//     "name": "@storybook/nextjs",
//     "options": {}
//   },
//   "staticDirs": [
//     "..\\public"
//   ]
// };
// export default config;