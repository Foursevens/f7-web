'use strict';

const withPlugins = require('next-compose-plugins');
const withModules = require('next-transpile-modules');

module.exports = withPlugins([withModules(['@f7-web/design'])], {
  i18n: {
    locales: ['en', 'fr', 'nl'],
    defaultLocale: 'nl',
  },
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.(?<ext>svg)$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
