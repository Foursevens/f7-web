'use strict';

const { formatConversionBlock, formatHero2 } = require('../../../formatters');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(populate) {
    const [aboutPage] = await strapi
      .query('about-page')
      .find({ _limit: 1 }, populate);

    if (aboutPage.hero != null) {
      aboutPage.hero = formatHero2(aboutPage.hero);
    }

    if (aboutPage.conversion != null) {
      aboutPage.conversion = formatConversionBlock(aboutPage.conversion);
    }

    return aboutPage;
  },
};
