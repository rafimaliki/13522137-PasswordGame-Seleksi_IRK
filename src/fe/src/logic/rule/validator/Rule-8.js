/**
 * @file Rule-8.js
 * @brief Implements Rule 8 for password validation using the Knuth-Morris-Pratt algorithm for string matching.
 */

import kmpMatch from "../../stringMatching/KMP";

/**
 * List of forbidden words for Rule 8 validation.
 * @type {Array.<string>}
 */
var Negara = [];

/**
 * Rule 8 validation function.
 * Checks if the password contains any of the forbidden words.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is valid according to Rule 8, false otherwise.
 */
const Rule8 = (password) => {
  // if (Negara.length === 0) return true;
  for (let i = 0; i < Negara.length; i++) {
    if (kmpMatch(password.toLowerCase(), Negara[i])) {
      return true;
    }
  }
  return false;
};

export { Rule8, Negara };
