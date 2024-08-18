/**
 * @file Rule-5.js
 * @brief Implements Rule 5 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";

const Rule5Cheat = (password, setPassword, difficulty, wrongData) => {
  let currentSum = wrongData[0];
  const targetSum = wrongData[1];

  // console.log("currentSum", currentSum);
  // console.log("targetSum", targetSum);

  if (currentSum < targetSum) {
    while (currentSum !== targetSum) {
      let diff = targetSum - currentSum;
      let digit = diff % 10;
      if (digit === 0) {
        digit = 9;
      }
      digit = Math.floor(Math.random() * digit) + 1;
      password = digit.toString() + password;
      currentSum += digit;
    }
  } else {
    const prevLength = password.length;
    while (currentSum > targetSum) {
      let digitIndex = password.search(/\d/);
      let digit = parseInt(password[digitIndex]);
      password = password.slice(0, digitIndex) + password.slice(digitIndex + 1);

      currentSum -= digit;
    }

    while (currentSum !== targetSum) {
      let diff = targetSum - currentSum;
      let digit = diff % 10;
      if (digit === 0) {
        digit = 9;
      }
      digit = Math.floor(Math.random() * digit) + 1;

      password = digit.toString() + password;
      currentSum += digit;
    }

    const newLength = password.length;
    const diffLength = prevLength - newLength;
    // console.log("diffLength", diffLength);
    for (let i = 0; i < diffLength; i++) {
      password += "0";
    }
  }

  setTimeout(() => {
    setPassword(password);
  }, 20);
};

const Rule5Validator = (password, difficulty) => {
  const sum = password.split("").reduce((acc, char) => {
    if (/\d/.test(char)) {
      return acc + parseInt(char);
    }
    return acc;
  }, 0);

  const result = sum === difficultyData[difficulty].sumNumber;

  return {
    correct: result,
    wrongData: [sum, difficultyData[difficulty].sumNumber],
  };
};

const Rule5JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>
        Digit pada password kamu harus berjumlah{" "}
        {difficultyData[difficulty].sumNumber}{" "}
      </p>
    </RuleBox>
  );
};

export { Rule5Validator, Rule5JSX, Rule5Cheat };
