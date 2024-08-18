/**
 * @file Rule-20.js
 * @brief Implements Rule 17 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const getCurrentTime = () => {
  const now = new Date();

  var currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  var currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  return `${currentHour}:${currentMinute}`;
};

const Rule20Cheat = (password, setPassword, difficulty, wrongData) => {
  const regex = /\b\d{2}:\d{2}\b/;
  const match = password.match(regex);

  const currentTime = getCurrentTime();

  if (match) {
    password.replace(match[0], getCurrentTime());
  } else {
    password += currentTime;
  }

  setTimeout(() => {
    setPassword(password);
  }, 20);
};

const Rule20Validator = (password) => {
  const time = getCurrentTime();

  let result = matchingAlgorithm(password, time) !== -1;

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule20JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung waktu sekarang</p>
    </RuleBox>
  );
};

export { Rule20Validator, Rule20JSX, Rule20Cheat };
