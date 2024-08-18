/**
 * @file Rule-11.js
 * @brief Implements Rule 11 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { useEffect } from "react";

var eggState = 0;
var setEggState;

const Rule11Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password + "🥚";

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule11Validator = (password) => {
  let result;

  if (eggState === 0) {
    result = password.includes("🥚");
  } else if (eggState === 1) {
    result = password.includes("🥚");
  } else {
    result = true;
  }

  return {
    correct: result,
    wrongData: [],
  };
};

const Rule11JSX = ({ rule, ruleProps, password, setGameResult }) => {
  setEggState = ruleProps.setEggState;
  eggState = ruleProps.eggState;

  useEffect(() => {
    if (eggState === 0 && Rule11Validator(password).correct) {
      setEggState(1);
    } else if (eggState === 1 && !Rule11Validator(password).correct) {
      setGameResult(0);
    }
  }, [password]);

  return (
    <RuleBox rule={rule}>
      <p>
        🥚 Ini ayam saya Paul. Dia belum menetas. Tolong sertakan dia dalam
        password kamu agar dia aman.
      </p>
    </RuleBox>
  );
};

export { Rule11Validator, Rule11JSX, Rule11Cheat };
