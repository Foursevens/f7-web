'use strict';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: (config) => {
    /* eslint-disable no-param-reassign */
    config.plugins = [
      !IS_PRODUCTION && new ReactRefreshWebpackPlugin(),
      ...config.plugins,
    ].filter(Boolean);
    return config;
  },
};
