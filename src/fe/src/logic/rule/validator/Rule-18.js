/**
 * @file Rule-18.js
 * @brief Implements Rule 18 for password validation.
 * Uses the Knuth-Morris-Pratt algorithm for string matching.
 */

import kmpMatch from "../../stringMatching/KMP";

/**
 * Rule 18 function for password validation.
 *
 * Checks if the password contains its own length as a substring.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains its own length as a substring, false otherwise.
 */
const Rule18 = (password) => {
  const length = password.length.toString();
  return kmpMatch(password, length);
};

export default Rule18;
