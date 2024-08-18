/**
 * @file Rule-6.js
 * @brief Implements Rule 6 for password validation.
 */

import { matchingAlgorithm } from "../../gameData";
import RuleBox from "../../../components/RuleBox";

const Bulan = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];

const Rule6Cheat = (password, setPassword, difficulty, wrongData) => {
  const randomBulan = Bulan[Math.floor(Math.random() * Bulan.length)];
  const newPassword = password + randomBulan;
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule6Validator = (password) => {
  let result = false;
  for (let i = 0; i < Bulan.length; i++) {
    if (matchingAlgorithm(password.toLowerCase(), Bulan[i]) !== -1) {
      result = true;
      break;
    }
  }
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule6JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung nama bulan</p>
    </RuleBox>
  );
};

export { Rule6Validator, Rule6JSX, Rule6Cheat };
