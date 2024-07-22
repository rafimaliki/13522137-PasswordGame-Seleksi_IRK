/**
 * @file Rule-9.js
 * @brief Implements Rule 9 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";

const isValidRomanNumeral = (romanNumeral) => {
  const romanNumeralPattern =
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanNumeralPattern.test(romanNumeral);
};

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

const Rule9Validator = (password) => {
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

const Rule9JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>
        Angka romawi pada password kamu harus menghasilkan{" "}
        {difficultyData[difficulty].sumRoman} jika dikalikan
      </p>
    </RuleBox>
  );
};

export { Rule9Validator, Rule9JSX };
