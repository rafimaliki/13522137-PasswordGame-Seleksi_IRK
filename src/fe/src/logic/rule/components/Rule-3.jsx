/**
 * @file Rule-3.js
 * @brief Implements Rule 3 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule3Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password + "A";
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule3Validator = (password) => {
  let result = /[A-Z]/.test(password);
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule3JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung huruf kapital</p>
    </RuleBox>
  );
};

export { Rule3Validator, Rule3JSX, Rule3Cheat };
