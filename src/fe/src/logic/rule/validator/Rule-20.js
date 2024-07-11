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

  var currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  var currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  const time = `${currentHour}:${currentMinute}`;

  return kmpMatch(password, time); // Uses KMP string matching algorithm to check if password matches the current time
};

export default Rule20;
