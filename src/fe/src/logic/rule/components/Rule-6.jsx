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

const Rule6Validator = (password) => {
  for (let i = 0; i < Bulan.length; i++) {
    if (matchingAlgorithm(password.toLowerCase(), Bulan[i])) {
      return true;
    }
  }
  return false;
};

const Rule6JSX = ({ difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>Password kamu harus mengandung nama bulan</p>
    </RuleBox>
  );
};

export { Rule6Validator, Rule6JSX };
