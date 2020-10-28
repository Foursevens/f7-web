'use strict';

const marked = require('marked');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(parameters, populate) {
    const cases = await strapi.query('case').find(parameters, populate);
    return cases.map((caseItem) => {
      const mappedCase = { ...caseItem };

      if (mappedCase.introduction != null) {
        mappedCase.introduction.en = marked(mappedCase.introduction.en);
      }

      if (mappedCase.problem?.content?.en != null) {
        mappedCase.problem.content.en = marked(mappedCase.problem.content.en);
      }

      if (mappedCase.solution?.content?.en != null) {
        mappedCase.solution.content.en = marked(mappedCase.solution.content.en);
      }

      if (mappedCase.result?.content?.en != null) {
        mappedCase.result.content.en = marked(mappedCase.result.content.en);
      }

      return mappedCase;
    });
  },
};
