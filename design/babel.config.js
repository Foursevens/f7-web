'use strict';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      'inline-react-svg',
      !IS_PRODUCTION && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
