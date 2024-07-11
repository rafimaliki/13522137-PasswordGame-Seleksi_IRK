/**
 * @file Rule-13.js
 * @brief Implements Rule 13 for password validation.
 */

/**
 * Determines if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

/**
 * Checks if the password contains any leap years.
 * @param {string} password - The password to check for leap years.
 * @returns {boolean} True if the password contains at least one leap year, false otherwise.
 */
const Rule13 = (password) => {
  const yearPattern = /[\d]+/g; // Regular expression to match any sequence of digits representing years

  const years = password.match(yearPattern);

  if (!years) {
    return false; // Return false if no years are found in the password
  }

  // Check if any of the matched years are leap years
  const leapYear = years.find((yearStr) => {
    const year = parseInt(yearStr);
    console.log(year);
    return isLeapYear(year);
  });

  return leapYear !== undefined; // Return true if at least one leap year is found, false otherwise
};

export default Rule13;
