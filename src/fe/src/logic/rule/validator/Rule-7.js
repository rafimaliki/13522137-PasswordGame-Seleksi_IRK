/**
 * @file Rule-7.js
 * @brief Implements Rule 7 for password validation.
 */

/**
 * Rule 7 function for password validation.
 *
 * Checks if the password contains at least one Roman numeral character (I, V, X, L, C, D, M).
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains at least one Roman numeral character, false otherwise.
 */
const Rule7 = (password) => {
  return /[IVXLCDM]/.test(password);
};

export default Rule7;
