/**
 * @file Rule-20.js
 * @brief Implements Rule 17 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const Rule20Validator = (password) => {
  const now = new Date();

  var currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  var currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  const time = `${currentHour}:${currentMinute}`;

  return matchingAlgorithm(password, time);
};

const Rule20JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung waktu sekarang</p>
    </RuleBox>
  );
};

export { Rule20Validator, Rule20JSX };
