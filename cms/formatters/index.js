'use strict';

const contentBlock = require('./content-block');
const conversionBlock = require('./conversion-block');
const hero2 = require('./hero2');

module.exports = {
  ...contentBlock,
  ...conversionBlock,
  ...hero2,
};
