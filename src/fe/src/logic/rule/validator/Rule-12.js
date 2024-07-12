/**
 * @file Rule-12.js
 * @brief Implements Rule 8 for password validation using the Knuth-Morris-Pratt algorithm for string matching.
 */

import { matchingAlgorithm } from "../../gameState";

/**
 * List of forbidden words for Rule 8 validation.
 * @type {Array.<string>}
 */
var Captcha = [];

/**
 * Rule 12 validation function.
 * Checks if the password contains any of the forbidden words.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is valid according to Rule 8, false otherwise.
 */
const Rule12 = (password) => {
  //   if (Captcha.length === 0) return true;
  for (let i = 0; i < Captcha.length; i++) {
    if (matchingAlgorithm(password, Captcha[i])) {
      return true;
    }
  }
  return false;
};

export { Rule12, Captcha };
