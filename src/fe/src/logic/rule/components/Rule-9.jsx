/**
 * @file Rule-9.js
 * @brief Implements Rule 9 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData, matchingAlgorithm } from "../../gameData";

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

const numberToRoman = (number) => {
  const romanNumeralValues = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";
  let remainingNumber = number;

  for (let i = 0; i < romanNumeralValues.length; i++) {
    const [value, romanChar] = romanNumeralValues[i];
    while (remainingNumber >= value) {
      result += romanChar;
      remainingNumber -= value;
    }
  }

  return result;
};

const Rule9Cheat = (password, setPassword, difficulty, wrongData) => {
  let sum = wrongData[0];
  const targetSum = wrongData[1];
  const romanNumeralValues = wrongData[2];

  // console.log(sum, targetSum, romanNumeralValues);

  for (let i = 0; i < romanNumeralValues.length; i++) {
    const index = matchingAlgorithm(password, romanNumeralValues[i]);
    password =
      password.slice(0, index) +
      password.slice(index + romanNumeralValues[i].length);
  }

  const targetRoman = difficultyData[difficulty].sumRoman;
  const targetRomanNumeral = numberToRoman(targetRoman);

  password += targetRomanNumeral;

  setTimeout(() => {
    setPassword(password);
  }, 20);
};

const Rule9Validator = (password, difficulty) => {
  const targetSum = difficultyData[difficulty].sumRoman;
  const romanNumeralMatches = password.match(/[IVXLCDM]+/g);

  let result = false;
  let sum = 0;
  let validRomanNumerals = [];

  if (romanNumeralMatches) {
    validRomanNumerals = romanNumeralMatches.filter(isValidRomanNumeral);
    let romanNumeralValues = validRomanNumerals.map(romanToNumber);
    sum = romanNumeralValues.reduce((acc, val) => acc * val, 1);
    result = sum === targetSum;
  }

  return {
    correct: result,
    wrongData: [sum, targetSum, validRomanNumerals],
  };
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

export { Rule9Validator, Rule9JSX, Rule9Cheat };
