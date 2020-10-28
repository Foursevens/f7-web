'use strict';

const marked = require('marked');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(populate) {
    const [servicesPage] = await strapi
      .query('services-page')
      .find({ _limit: 1 }, populate);

    if (servicesPage.hero?.content != null) {
      servicesPage.hero.content.en = marked(servicesPage.hero.content.en);
    }

    if (servicesPage.blocks != null) {
      servicesPage.blocks = servicesPage.blocks.map((contentBlock) => {
        return {
          ...contentBlock,
          content:
            contentBlock.content == null
              ? undefined
              : { en: marked(contentBlock.content.en) },
        };
      });
    }

    return servicesPage;
  },
};
