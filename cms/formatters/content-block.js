'use strict';

const marked = require('marked');

function formatContentBlock(contentBlock) {
  return {
    ...contentBlock,
    content:
      contentBlock.content == null
        ? undefined
        : { en: marked(contentBlock.content.en) },
  };
}

module.exports = { formatContentBlock };
