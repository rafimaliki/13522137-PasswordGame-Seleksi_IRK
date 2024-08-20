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
      if (diff > 9) {
        diff = 9;
      }
      password = diff.toString() + password;
      currentSum += diff;
    }
  } else {
    const prevLength = password.length;
    while (currentSum > targetSum) {
      let diffIndex = password.search(/\d/);
      let diff = parseInt(password[diffIndex]);
      password = password.slice(0, diffIndex) + password.slice(diffIndex + 1);

      currentSum -= diff;
    }

    while (currentSum !== targetSum) {
      let diff = targetSum - currentSum;
      if (diff > 9) {
        diff = 9;
      }

      password = diff.toString() + password;
      currentSum += diff;
    }

    const newLength = password.length;
    const diffLength = prevLength - newLength;
    const randomChars =
      "ABEFGHJKNOPQRSTUWYZabcdefghijklmnopqrstuvwxyz0!@#$%^&*()_+";
    // console.log("diffLength", diffLength);
    for (let i = 0; i < diffLength; i++) {
      password += randomChars[Math.floor(Math.random() * randomChars.length)];
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
