/**
 * @file Rule-3.js
 * @brief Implements Rule 3 for password validation.
 */

/**
 * Rule 3 function for password validation.
 *
 * Checks if the password contains at least one uppercase letter (A-Z).
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains at least one uppercase letter, false otherwise.
 */
const Rule3 = (password) => {
  return /[A-Z]/.test(password);
};

export default Rule3;
