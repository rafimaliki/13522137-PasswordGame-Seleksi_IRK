/**
 * @file Rule-2.js
 * @brief Implements Rule 2 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule2Cheat = (password, setPassword, difficulty, wrongData) => {
  const randomNumbers = "0123456789";
  const newPassword = randomNumbers[Math.floor(Math.random() * 10)] + password;
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule2Validator = (password) => {
  let result = /\d/.test(password);
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule2JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung angka</p>
    </RuleBox>
  );
};

export { Rule2Validator, Rule2JSX, Rule2Cheat };
