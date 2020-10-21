'use strict';

const marked = require('marked');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(populate) {
    const [homepage] = await strapi
      .query('homepage')
      .find({ _limit: 1 }, populate);

    if (homepage.hero != null && homepage.hero.content != null) {
      homepage.hero.content = { en: marked(homepage.hero.content.en) };
    }

    return homepage;
  },
};
