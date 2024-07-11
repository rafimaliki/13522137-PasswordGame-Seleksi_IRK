/**
 * @file Rule-8.js
 * @brief Implements Rule 8 for password validation.
 * Uses the Knuth-Morris-Pratt algorithm for string matching.
 */

import kmpMatch from "../../stringMatching/KMP";
// import getRandomImagesFromBucket from "./api/fetch";

/**
 * List of country names.
 * @type {string[]}
 */
const Negara = [
  "indonesia",
  "malaysia",
  "belanda",
  "jerman",
  "itali",
  "jepang",
  "brazil",
  "argentina",
  "india",
  "spanyol",
];

/**
 * Randomly selected country names.
 * @type {string[]}
 */
const RandomNegara = Negara.sort(() => 0.5 - Math.random()).slice(0, 3);

/**
 * String representation of randomly selected country names.
 * @type {string}
 */
const RandomNegaraString = "[" + RandomNegara.join(" | ") + "]";

// const NegaraFromBucket = getRandomImagesFromBucket("bendera", 3);
// console.log(NegaraFromBucket);

/**
 * Rule 8 function for password validation.
 *
 * Checks if the password contains any of the randomly selected country names.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password contains any of the randomly selected country names, false otherwise.
 */
const Rule8 = (password) => {
  for (let i = 0; i < RandomNegara.length; i++) {
    if (kmpMatch(password.toLowerCase(), RandomNegara[i])) {
      return true;
    }
  }
  return false;
};

export { Rule8, RandomNegaraString };
