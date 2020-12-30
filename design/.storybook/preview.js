'use strict';

require('../globals.css');

module.exports.parameters = {
  backgrounds: {
    default: 'twitter',
    values: [
      { name: 'white1', value: '#ffffff' },
      { name: 'white2', value: '#f7f7f7' },
      { name: 'primary1', value: '#367d7e' },
      { name: 'primary2', value: '#e1ecec' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};
