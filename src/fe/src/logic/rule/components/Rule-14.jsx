/**
 * @file Rule-14.js
 * @brief Implements Rule 14 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";
import { matchingAlgorithm } from "../../gameData";
import { useEffect } from "react";

var cheatActivated = false;

const Rule14Cheat = (password, setPassword, difficulty, wrongData) => {
  cheatActivated = true;
  const newPassword = password + "🐛";
  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};

const Rule14Validator = (password, difficulty) => {
  let result = matchingAlgorithm(password, "🐛") !== -1;
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule14JSX = ({
  difficulty,
  rule,
  setPassword,
  password,
  ruleProps,
  setGameResult,
}) => {
  // rule start: replace telur jadi ayam
  useEffect(() => {
    const eggIndex = matchingAlgorithm(password, "🥚");
    if (eggIndex !== -1) {
      ruleProps.setEggState(2);

      const newPassword = password.replace("🥚", "🐔");

      const timer = setTimeout(() => {
        setPassword(newPassword);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [password, setPassword, ruleProps]);

  // rule ongoing: cek cacing tiap interval
  useEffect(() => {
    if (cheatActivated) return;

    const wormCheckInterval = setInterval(() => {
      // console.log("Cek cacing");
      const wormIndex = matchingAlgorithm(password, "🐛");
      if (wormIndex !== -1) {
        const newPassword = password.replace("🐛", "");
        setPassword(newPassword);
      } else {
        setGameResult(0);
        clearInterval(wormCheckInterval);
      }
    }, difficultyData[difficulty].paulEatTime);

    return () => clearInterval(wormCheckInterval);
  }, [password, setPassword]);

  useEffect(() => {
    if (ruleProps.eggState === 2 && matchingAlgorithm(password, "🐔") === -1) {
      setGameResult(0);
    }
  }, [password]);

  return (
    <RuleBox rule={rule}>
      <p>
        🐔 Paul sudah menetas! Jangan lupa beri dia makan. Dia memakan 1 🐛 tiap{" "}
        {difficultyData[difficulty].paulEatTime / 1000} detik
      </p>
    </RuleBox>
  );
};

export { Rule14Validator, Rule14JSX, Rule14Cheat };
