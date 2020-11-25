'use strict';

const marked = require('marked');

function formatHero2(hero2) {
  return {
    ...hero2,
    content:
      hero2.content == null ? undefined : { en: marked(hero2.content.en) },
  };
}

module.exports = { formatHero2 };
