/**
 * @file Rule-7.js
 * @brief Implements Rule 7 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const Rule7Validator = (password) => {
  return /[IVXLCDM]/.test(password);
};

const Rule7JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung angka romawi</p>
    </RuleBox>
  );
};

export { Rule7Validator, Rule7JSX };
