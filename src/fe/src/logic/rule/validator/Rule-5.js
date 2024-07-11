/**
 * @file Rule-5.js
 * @brief Implements Rule 5 for password validation.
 */

/**
 * Rule 5 function for password validation.
 *
 * Checks if the sum of digits in the password equals 25.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the sum of digits in the password equals 25, false otherwise.
 */
const Rule5 = (password) => {
  return (
    password.split("").reduce((acc, char) => {
      if (/\d/.test(char)) {
        return acc + parseInt(char);
      }
      return acc;
    }, 0) === 25
  );
};

export default Rule5;
