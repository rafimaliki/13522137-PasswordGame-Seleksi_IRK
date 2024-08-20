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

const closestBiggerPrime = (num) => {
  while (!isPrime(num)) {
    num++;
  }
  return num;
};

const Rule19Cheat = (password, setPassword, difficulty, wrongData) => {
  const randomChars =
    "ABEFGHJKNOPQRSTUWYZabcdefghijklmnopqrstuvwxyz0!@#$%^&*()_+";
  let length = password.length;
  let newLength = closestBiggerPrime(length);

  let newPassword = password + newLength.toString();
  let countZero = newLength - newPassword.length;

  for (let i = 0; i < countZero; i++) {
    newPassword += randomChars[Math.floor(Math.random() * randomChars.length)];
  }

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule19Validator = (password) => {
  let result = isPrime(password.length);

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule19JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Panjang password kamu harus berupa bilangan prima</p>
    </RuleBox>
  );
};

export { Rule19Validator, Rule19JSX, Rule19Cheat };
