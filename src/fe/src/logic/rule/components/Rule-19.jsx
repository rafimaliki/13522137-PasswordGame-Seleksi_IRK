/**
 * @file Rule-19.js
 * @brief Implements Rule 19 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const Rule19Validator = (password) => {
  return isPrime(password.length);
};

const Rule19JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Panjang password kamu harus berupa bilangan prima</p>
    </RuleBox>
  );
};

export { Rule19Validator, Rule19JSX };
