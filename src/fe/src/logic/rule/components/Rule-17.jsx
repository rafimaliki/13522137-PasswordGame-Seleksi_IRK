/**
 * @file Rule-17.js
 * @brief Implements Rule 17 for password validation.
 */

import { difficultyData } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const Rule17Validator = (password, difficulty) => {
  const digitPercentage = difficultyData[difficulty].digitPercentage;

  var count = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      count++;
    }
  }

  return count / password.length >= digitPercentage; // Check if the percentage of digits meets the digit requirement
};

const Rule17JSX = ({ difficulty, rule }) => {
  const percentage = (decimal) => {
    // return string representation of percentage
    return `${decimal * 100}%`;
  };

  return (
    <RuleBox rule={rule}>
      <p>
        Setidaknya {percentage(difficultyData[difficulty].digitPercentage)} dari
        password kamu harus berupa angka
      </p>
    </RuleBox>
  );
};

export { Rule17Validator, Rule17JSX };
