// module.exports = {
//   stories: ['../src/components/**/*.stories.js'],
//    staticDirs: ['../public'],
//    addons: [
//      '@storybook/addon-links',
//      '@storybook/addon-essentials',
//      '@storybook/preset-create-react-app',
//      '@storybook/addon-interactions',
//    ],
//    features: {
//      postcss: false,
//    },
//    framework: '@storybook/react',
//    core: {
//      builder: 'webpack4',
//    },
//  };


// 원본
 /** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;
