/**
 * @file Rule-13.js
 * @brief Implements Rule 13 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const Rule13Validator = (password) => {
  const yearPattern = /[\d]+/g;

  const years = password.match(yearPattern);

  if (!years) {
    return false;
  }

  const leapYear = years.find((yearStr) => {
    const year = parseInt(yearStr);
    // console.log(year);
    return isLeapYear(year);
  });

  return leapYear !== undefined; // Return true if at least one leap year is found, false otherwise
};

const Rule13JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung tahun kabisat</p>
    </RuleBox>
  );
};

export { Rule13Validator, Rule13JSX };
