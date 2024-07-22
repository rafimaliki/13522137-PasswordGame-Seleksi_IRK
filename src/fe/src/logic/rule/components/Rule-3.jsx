/**
 * @file Rule-3.js
 * @brief Implements Rule 3 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule3Validator = (password) => {
  return /[A-Z]/.test(password);
};

const Rule3JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung huruf kapital</p>
    </RuleBox>
  );
};

export { Rule3Validator, Rule3JSX };
