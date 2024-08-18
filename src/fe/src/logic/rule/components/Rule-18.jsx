/**
 * @file Rule-18.js
 * @brief Implements Rule 18 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const Rule18Cheat = (password, setPassword, difficulty, wrongData) => {
  let length = password.length;

  while ((password + length.toString()).length != length) {
    length++;
  }

  const newPassword = password + length.toString();

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule18Validator = (password) => {
  const length = password.length.toString();
  let result = matchingAlgorithm(password, length) !== -1;

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule18JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung panjang password</p>
    </RuleBox>
  );
};

export { Rule18Validator, Rule18JSX, Rule18Cheat };
