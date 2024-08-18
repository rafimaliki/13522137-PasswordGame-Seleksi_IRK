/**
 * @file Rule-13.js
 * @brief Implements Rule 13 for password validation.
 */

import RuleBox from "../../../components/RuleBox";

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const Rule13Cheat = (password, setPassword, difficulty, wrongData) => {
  const randomLeapYearList = [
    2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040,
  ];

  const randomIndex = Math.floor(Math.random() * randomLeapYearList.length);

  const newPassword = password + randomLeapYearList[randomIndex];

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule13Validator = (password) => {
  const yearPattern = /[\d]+/g;

  const years = password.match(yearPattern);

  if (!years) {
    return {
      correct: false,
      wrongData: [],
    };
  }

  const leapYear = years.find((yearStr) => {
    const year = parseInt(yearStr);
    // console.log(year);
    return isLeapYear(year);
  });

  let result = leapYear !== undefined;

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule13JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung tahun kabisat</p>
    </RuleBox>
  );
};

export { Rule13Validator, Rule13JSX, Rule13Cheat };
