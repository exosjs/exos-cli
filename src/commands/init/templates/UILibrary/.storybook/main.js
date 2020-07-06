const path = require("path");
const exosWebpack = require("exos-scripts/lib/webpack/webpack.config.js").default;

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs", "@storybook/addon-a11y"],
  webpackFinal: async config => {
    config.resolve = exosWebpack.resolve;
    config.module.rules = exosWebpack.module.rules;

    return config;
  }
};
