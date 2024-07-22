/**
 * @file Rule-16.js
 * @brief Implements Rule 16 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const IRK = ["I want IRK", "I need IRK", "I love IRK"];

const Rule16Validator = (password) => {
  for (let i = 0; i < IRK.length; i++) {
    if (matchingAlgorithm(password, IRK[i])) {
      return true;
    }
  }
  return false;
};

const Rule16JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>
        Password kamu harus mengandung salah satu dari kata berikut [I want IRK
        | I need IRK | I love IRK]
      </p>
    </RuleBox>
  );
};

export { Rule16Validator, Rule16JSX };
