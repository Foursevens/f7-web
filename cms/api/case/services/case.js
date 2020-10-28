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

      if (mappedCase.problem != null) {
        mappedCase.problem.en = marked(mappedCase.problem.en);
      }

      if (mappedCase.solution != null) {
        mappedCase.solution.en = marked(mappedCase.solution.en);
      }

      if (mappedCase.result != null) {
        mappedCase.result.en = marked(mappedCase.result.en);
      }

      return mappedCase;
    });
  },
};
