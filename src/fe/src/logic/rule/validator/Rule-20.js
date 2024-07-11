/**
 * @file Rule-20.js
 * @brief Implements Rule 17 for password validation.
 */

import kmpMatch from "../../stringMatching/KMP";

/**
 * Checks if the password matches the current time.
 * @param {string} password - The password to check against the current time.
 * @returns {boolean} True if the password matches the current time, false otherwise.
 */
const Rule20 = (password) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const time = `${currentHour}:${currentMinute}`;

  return kmpMatch(password, time); // Uses KMP string matching algorithm to check if password matches the current time
};

export default Rule20;
