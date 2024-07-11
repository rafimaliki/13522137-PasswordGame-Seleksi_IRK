/**
 * @file Rule-2.js
 * @brief Implements Rule 2 for password validation.
 */

/**
 * Rule 2 function for password validation.
 *
 * Checks if the password contains at least one digit.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains at least one digit, false otherwise.
 */
const Rule2 = (password) => {
  return /\d/.test(password);
};

export default Rule2;
