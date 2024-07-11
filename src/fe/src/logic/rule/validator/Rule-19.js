/**
 * @file Rule-19.js
 * @brief Implements Rule 19 for password validation.
 */

/**
 * Rule 19 function for password validation.
 *
 * Checks if the length of the password is a prime number.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the length of the password is a prime number, false otherwise.
 */
const Rule19 = (password) => {
  return isPrime(password.length);
};

/**
 * Checks if a given number is a prime number.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default Rule19;
