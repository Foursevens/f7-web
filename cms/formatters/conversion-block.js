'use strict';

const marked = require('marked');

function formatConversionBlock(conversionBlock) {
  return {
    ...conversionBlock,
    content:
      conversionBlock.content == null
        ? undefined
        : { en: marked(conversionBlock.content.en) },
  };
}

module.exports = { formatConversionBlock };
