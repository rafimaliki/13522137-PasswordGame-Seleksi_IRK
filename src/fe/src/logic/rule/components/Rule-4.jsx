/**
 * @file Rule-4.js
 * @brief Implements Rule 4 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule4Validator = (password) => {
  return /[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>/?]/.test(password);
};

const Rule4JSX = ({ password, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung karakter spesial</p>
    </RuleBox>
  );
};

export { Rule4Validator, Rule4JSX };
