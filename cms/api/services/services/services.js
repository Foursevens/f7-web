'use strict';

const marked = require('marked');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(populate) {
    const [services] = await strapi
      .query('services')
      .find({ _limit: 1 }, populate);
    services.content_blocks = services.content_blocks.map((contentBlock) => {
      return {
        ...contentBlock,
        content_en: marked(contentBlock.content_en),
      };
    });
    return services;
  },
};
