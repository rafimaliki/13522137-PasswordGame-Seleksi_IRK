/**
 * @file Rule-9.js
 * @brief Implements Rule 9 for password validation.
 */

/**
 * Checks if a given string is a valid Roman numeral.
 *
 * @param {string} romanNumeral - The Roman numeral to validate.
 * @returns {boolean} True if the input is a valid Roman numeral, false otherwise.
 */
const isValidRomanNumeral = (romanNumeral) => {
  const romanNumeralPattern =
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanNumeralPattern.test(romanNumeral);
};

/**
 * Converts a valid Roman numeral to its integer equivalent.
 *
 * @param {string} romanNumeral - The Roman numeral to convert.
 * @returns {number} The integer value of the Roman numeral.
 */
const romanToNumber = (romanNumeral) => {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

/**
 * Rule 9 function for password validation.
 *
 * Validates if the sum of valid Roman numeral values in the password equals 36.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the sum of valid Roman numeral values equals 36, false otherwise.
 */
const Rule9 = (password) => {
  const targetSum = 36;
  const romanNumeralMatches = password.match(/[IVXLCDM]+/g);

  if (romanNumeralMatches) {
    var validRomanNumerals = romanNumeralMatches.filter(isValidRomanNumeral);
    var romanNumeralValues = validRomanNumerals.map(romanToNumber);
    const sum = romanNumeralValues.reduce((acc, val) => acc * val, 1);
    return sum === targetSum;
  }

  return false;
};

export default Rule9;
