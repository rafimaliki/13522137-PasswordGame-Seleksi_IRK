/**
 * @file Rule-1.js
 * @brief Implements Rule 1 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";

const Rule1Validator = (password, difficulty) => {
  return password.length >= difficultyData[difficulty].minChar;
};

const Rule1JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>
        Password kamu harus setidaknya {difficultyData[difficulty].minChar}{" "}
        karakter
      </p>
    </RuleBox>
  );
};

export { Rule1Validator, Rule1JSX };
