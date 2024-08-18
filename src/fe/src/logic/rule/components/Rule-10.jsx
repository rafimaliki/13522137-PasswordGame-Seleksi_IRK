import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";
import { useEffect, useState } from "react";

var hasBurned = false;
var hasFire = false;

const SetFire = (password, setPassword) => {
  const fireIndex = password.indexOf("🔥");
  if (fireIndex === -1 && !hasFire) {
    hasFire = true;
    setPassword(password.slice(0, -1) + "🔥");
  } else if (fireIndex > 0) {
    const newPassword =
      password.substring(0, fireIndex - 1) +
      "🔥" +
      password.substring(fireIndex);
    setPassword(newPassword);
  }
};

const isAllFire = (password) => {
  return password.indexOf("🔥") === 0;
};

const Rule10Cheat = (password, setPassword, difficulty, wrongData) => {
  const newPassword = password.replace(/🔥/g, "");

  setTimeout(() => {
    setPassword(newPassword);
  }, 20);
};
const Rule10Validator = (password) => {
  let result = !password.includes("🔥");

  if (!hasBurned) {
    hasBurned = true;
    result = false;
  }
  return {
    correct: result,
    wrongData: [],
  };
};

const Rule10JSX = ({
  difficulty,
  rule,
  password,
  setPassword,
  ruleProps,
  setGameResult,
}) => {
  // const [isFireActive, setIsFireActive] = useState(false);

  const isFireActive = ruleProps.isFireActive;
  const setIsFireActive = ruleProps.setIsFireActive;

  useEffect(() => {
    if (rule.correct) return;
    let timerId;
    if (rule.correct === false && !isFireActive && !hasFire) {
      SetFire(password, setPassword);
      setIsFireActive(true);
    } else if (rule.correct && isFireActive) {
      console.log("Rule 10 passed");
      setIsFireActive(false);
      clearInterval(timerId);
    } else if (!rule.correct && isAllFire(password)) {
      console.log("Rule 10 failed");
      setIsFireActive(false);
      setGameResult(0);
      clearInterval(timerId);
    } else if (isFireActive) {
      timerId = setInterval(() => {
        SetFire(password, setPassword);
      }, difficultyData[difficulty].burnSpeed);
    }
    return () => {
      if (isFireActive) {
        clearInterval(timerId);
      }
    };
  }, [isFireActive, password, setPassword]);

  return (
    <RuleBox rule={rule}>
      <p>Oh tidak! Password kamu terbakar 🔥. Cepat padamkan!</p>
    </RuleBox>
  );
};

export { Rule10Validator, Rule10JSX, Rule10Cheat };
