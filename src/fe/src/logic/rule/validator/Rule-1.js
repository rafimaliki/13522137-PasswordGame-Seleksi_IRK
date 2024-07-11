/**
 * @file Rule-1.js
 * @brief Implements Rule 1 for password validation.
 */

/**
 * Rule 1 function for password validation.
 *
 * Checks if the password length is at least 5 characters.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password length is at least 5 characters, false otherwise.
 */
const Rule1 = (password) => {
  return password.length >= 5;
};

export default Rule1;
