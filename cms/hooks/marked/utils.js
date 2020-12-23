'use strict';

const { get, set } = require('lodash/fp');

module.exports = {
  /**
   * Replace a nested property within an object using the provided transformer.
   *
   * @param {string|string[]} path
   * @param {function} transformer
   * @param {object} object
   * @return {object}
   */
  replaceProperty(path, transformer, object) {
    const oldValue = get(path, object);
    if (oldValue == null) {
      return object;
    }
    return set(path, transformer(oldValue), object);
  },
};
