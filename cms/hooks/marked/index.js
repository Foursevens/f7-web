'use strict';

const { spread } = require('lodash/fp');
const marked = require('marked');

const { replaceProperty } = require('./utils');

module.exports = (strapi) => {
  /**
   * @param {object} object
   * @param {string[]} properties
   * @return {object}
   */
  function markProperties(object, properties) {
    return properties.reduce(markPropertySegments, object);
  }

  /**
   * @param {object} object
   * @param {Array<string>} propertySegments
   * @return {object}
   */
  function markPropertySegments(object, propertySegments) {
    if (propertySegments.length === 1) {
      const [objectSegment] = propertySegments;
      return replaceProperty(objectSegment, marked, object);
    }
    const [arraySegment, ...remainingSegments] = propertySegments;
    return replaceProperty(
      arraySegment,
      (array) =>
        array.map((nestedObject) =>
          markPropertySegments(nestedObject, remainingSegments),
        ),
      object,
    );
  }

  /**
   * @param {string} apiName
   * @param {Strapi.Api} api
   * @return {void}
   */
  function wrapApi(apiName, api) {
    const markedControllerConfigs = api.config.marked;
    Object.entries(markedControllerConfigs).forEach(
      ([controllerName, markedControllerConfig]) => {
        const { properties = [] } = markedControllerConfig;
        const splitProperties = properties.map((property) =>
          property.split('[*].'),
        );
        const controller = api.controllers[controllerName];
        if (controller == null) {
          strapi.log.error(
            `hook-marked: no controller found for ${apiName}.controllers.${controllerName}`,
          );
          return;
        }
        controller.find = wrapApiControllerMethod(
          controller.find,
          splitProperties,
        );
        if (controller.findOne != null) {
          controller.findOne = wrapApiControllerMethod(
            controller.findOne,
            splitProperties,
          );
        }
      },
    );
  }

  /**
   * @param {Strapi.Api.Controller.Method} method
   * @param {string[]} properties
   * @return {Strapi.Api.Controller.Method}
   */
  function wrapApiControllerMethod(method, properties) {
    return async (ctx) => {
      const returnValue = await method(ctx);
      const isCollectionType = Array.isArray(returnValue);
      return isCollectionType
        ? returnValue.map((item) => markProperties(item, properties))
        : markProperties(returnValue, properties);
    };
  }

  return {
    async initialize() {
      Object.entries(strapi.api)
        .filter(([, api]) => api.config.marked != null)
        .forEach(spread(wrapApi));
    },
  };
};
