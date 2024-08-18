/**
 * @file Rule-1.js
 * @brief Implements Rule 1 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";

const Rule1Cheat = (password, setPassword, difficulty, wrongData) => {
  const extraLength = difficultyData[difficulty].minChar - password.length;
  const newPassword = password + "a".repeat(extraLength);

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule1Validator = (password, difficulty) => {
  let result = password.length >= difficultyData[difficulty].minChar;
  return {
    correct: result,
    wrongData: [],
  };
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

export { Rule1Validator, Rule1JSX, Rule1Cheat };
