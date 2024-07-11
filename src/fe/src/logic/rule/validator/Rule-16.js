/**
 * @file Rule-16.js
 * @brief Implements Rule 16 for password validation.
 * Uses the Knuth-Morris-Pratt algorithm for string matching.
 */

import kmpMatch from "../../stringMatching/KMP";

/**
 * List of phrases containing "IRK".
 * @type {string[]}
 */
const IRK = ["I want IRK", "I need IRK", "I love IRK"];

/**
 * Rule 16 function for password validation.
 *
 * Checks if the password contains any of the specified phrases containing "IRK".
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains any of the specified phrases, false otherwise.
 */
const Rule16 = (password) => {
  for (let i = 0; i < IRK.length; i++) {
    if (kmpMatch(password, IRK[i])) {
      return true;
    }
  }
  return false;
};

export default Rule16;
