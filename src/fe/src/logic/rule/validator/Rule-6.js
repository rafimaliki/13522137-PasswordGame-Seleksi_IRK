/**
 * @file Rule-6.js
 * @brief Implements Rule 6 for password validation.
 * Uses the Knuth-Morris-Pratt algorithm for string matching.
 */

import { matchingAlgorithm } from "../../gameState";

/**
 * List of months in Indonesian.
 * @type {string[]}
 */
const Bulan = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];

/**
 * Rule 6 function for password validation.
 *
 * Checks if the password contains any Indonesian month name.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains an Indonesian month name, false otherwise.
 */
const Rule6 = (password) => {
  for (let i = 0; i < Bulan.length; i++) {
    if (matchingAlgorithm(password.toLowerCase(), Bulan[i])) {
      return true;
    }
  }
  return false;
};

export default Rule6;
