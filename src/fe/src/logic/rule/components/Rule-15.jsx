/**
 * @file Rule-15.js
 * @brief Implements Rule 15 for password validation.
 */

import RuleBox from "../../../components/RuleBox";
import { difficultyData } from "../../gameData";
import { useEffect, useState } from "react";

var excludedLetters = [];

const modifyExcludedLetters = (letters, difficulty) => {
  if (
    !excludedLetters.includes(letters) &&
    excludedLetters.length < difficultyData[difficulty].sacrifice
  ) {
    excludedLetters.push(letters);
    return true;
  } else if (excludedLetters.includes(letters)) {
    excludedLetters = excludedLetters.filter((letter) => letter !== letters);
    return true;
  }
  return false;
};

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const choiceLetters = alphabets
  .split("")
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

const Rule15Validator = (password, difficulty) => {
  // console.log("Rule 15 validator");
  if (excludedLetters.length === difficultyData[difficulty].sacrifice) {
    for (let i = 0; i < difficultyData[difficulty].sacrifice; i++) {
      if (password.toLowerCase().includes(excludedLetters[i].toLowerCase())) {
        // console.log("Rule 15 failed");
        return false;
      }
    }
    // console.log("Rule 15 passed");
    return true;
  }
  return false;
};

// export { Rule15, excludedLetters, modifyExcludedLetters, choiceLetters };

const KeyboardButton = ({ char, rule, password, difficulty }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(false);
    excludedLetters.length = 0;
  }, [difficulty]);
  const handleClick = () => {
    const success = modifyExcludedLetters(char, difficulty);
    if (success) {
      setIsActive(!isActive);
      rule.check(password, difficulty);
    }
  };
  return (
    <button
      className={`${
        isActive ? "bg-[#aef3ae]" : "bg-white"
      } w-6 h-8 flex items-center justify-center text-center border-2 border-white rounded-md`}
      onClick={handleClick}
    >
      <p className="w-full">{char}</p>
    </button>
  );
};

const Rule15JSX = ({ password, difficulty, rule }) => {
  return (
    <RuleBox rule={rule}>
      <p>
        {`Tumbal harus dilakukan. Pilih ${difficultyData[difficulty].sacrifice} huruf yang tidak bisa lagi kamu gunakan`}
      </p>
      <div className="w-full flex justify-center items-center mb-4">
        <div className="grid grid-cols-5 gap-2 w-[10rem]">
          {choiceLetters.map((char, index) => (
            <KeyboardButton
              key={index}
              char={char}
              rule={rule}
              password={password}
              difficulty={difficulty}
            />
          ))}
        </div>
      </div>
    </RuleBox>
  );
};

export { Rule15Validator, Rule15JSX };
