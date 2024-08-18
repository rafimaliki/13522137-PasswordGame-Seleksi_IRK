/**
 * @file Rule-4.js
 * @brief Implements Rule 4 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule4Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password + "!";
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule4Validator = (password) => {
  let result = /[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>/?]/.test(password);
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule4JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung karakter spesial</p>
    </RuleBox>
  );
};

export { Rule4Validator, Rule4JSX, Rule4Cheat };
