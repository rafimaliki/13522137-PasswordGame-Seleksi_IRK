/**
 * @file Rule-17.js
 * @brief Implements Rule 17 for password validation.
 */

/**
 * Checks if the password contains at least a minimum percentage of digits.
 * @param {string} password - The password to check.
 * @returns {boolean} True if the password contains at least 10% digits, false otherwise.
 */
const Rule17 = (password) => {
  const minimumPercentage = 0.1; // Minimum percentage of digits required

  var count = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      count++;
    }
  }

  return count / password.length >= minimumPercentage; // Check if the percentage of digits meets the minimum requirement
};

export default Rule17;
