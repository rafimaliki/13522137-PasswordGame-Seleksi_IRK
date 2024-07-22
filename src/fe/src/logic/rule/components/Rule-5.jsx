/**
 * @file Rule-5.js
 * @brief Implements Rule 5 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";

const Rule5Validator = (password) => {
  return (
    password.split("").reduce((acc, char) => {
      if (/\d/.test(char)) {
        return acc + parseInt(char);
      }
      return acc;
    }, 0) === 25
  );
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

export { Rule5Validator, Rule5JSX };
