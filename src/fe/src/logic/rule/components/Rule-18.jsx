/**
 * @file Rule-18.js
 * @brief Implements Rule 18 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const Rule18Validator = (password) => {
  const length = password.length.toString();
  return matchingAlgorithm(password, length);
};

const Rule18JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung panjang password</p>
    </RuleBox>
  );
};

export { Rule18Validator, Rule18JSX };
