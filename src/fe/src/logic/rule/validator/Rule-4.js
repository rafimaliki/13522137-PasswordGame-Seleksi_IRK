/**
 * @file Rule-4.js
 * @brief Implements Rule 4 for password validation.
 */

/**
 * Rule 4 function for password validation.
 *
 * Checks if the password contains at least one special character from `~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?`.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains at least one special character, false otherwise.
 */
const Rule4 = (password) => {
  return /[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>/?]/.test(password);
};

export default Rule4;
