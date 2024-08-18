/**
 * @file Rule-7.js
 * @brief Implements Rule 7 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule7Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password + "I";
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule7Validator = (password) => {
  let result = /[IVXLCDM]/.test(password);

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule7JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung angka romawi</p>
    </RuleBox>
  );
};

export { Rule7Validator, Rule7JSX, Rule7Cheat };
