const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/components/common/**/*.stories.mdx",
    "../src/components/common/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
  "framework": "@storybook/react"
}