'use strict';

const {
  formatContentBlock,
  formatConversionBlock,
  formatHero2,
} = require('../../../formatters');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(populate) {
    const [servicesPage] = await strapi
      .query('services-page')
      .find({ _limit: 1 }, populate);

    if (servicesPage.hero != null) {
      servicesPage.hero = formatHero2(servicesPage.hero);
    }

    if (servicesPage.blocks != null) {
      servicesPage.blocks = servicesPage.blocks.map(formatContentBlock);
    }

    if (servicesPage.conversion != null) {
      servicesPage.conversion = formatConversionBlock(servicesPage.conversion);
    }

    return servicesPage;
  },
};
