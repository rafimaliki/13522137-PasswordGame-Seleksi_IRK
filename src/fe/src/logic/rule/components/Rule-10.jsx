import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";
import { useEffect, useState } from "react";

var hasBurned = false;
var hasFire = false;

const Rule10Validator = (password) => {
  if (!hasBurned) {
    hasBurned = true;
    return false;
  }
  return !password.includes("🔥");
};

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

const Rule10JSX = ({ difficulty, rule, password, setPassword }) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (rule.correct) return;
    let timerId;
    if (rule.correct === false && !isRunning && !hasFire) {
      SetFire(password, setPassword);
      setIsRunning(true);
    } else if (rule.correct && isRunning) {
      console.log("Rule 10 passed");
      setIsRunning(false);
      clearInterval(timerId);
    } else if (!rule.correct && isAllFire(password)) {
      console.log("Rule 10 failed");
      setIsRunning(false);
      clearInterval(timerId);
    } else if (isRunning) {
      timerId = setInterval(() => {
        SetFire(password, setPassword);
      }, difficultyData[difficulty].burnSpeed);
    }
    return () => {
      if (isRunning) {
        clearInterval(timerId);
      }
    };
  }, [isRunning, password, setPassword]);

  return (
    <RuleBox rule={rule}>
      <p>Oh tidak! Password kamu terbakar 🔥. Cepat padamkan!</p>
    </RuleBox>
  );
};

export { Rule10Validator, Rule10JSX };
