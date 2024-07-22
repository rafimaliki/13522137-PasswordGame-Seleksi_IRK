/**
 * @file Rule-2.js
 * @brief Implements Rule 2 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule2Validator = (password) => {
  return /\d/.test(password);
};

const Rule2JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung angka</p>
    </RuleBox>
  );
};

export { Rule2Validator, Rule2JSX };
