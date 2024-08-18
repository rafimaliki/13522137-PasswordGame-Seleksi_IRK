import React from "react";
import { difficulty } from "../logic/gameData";
import scoreCounter from "../logic/utils/ScoreCounter";
import Rules from "../logic/rule/RuleList";

const InputBox = ({ password, setPassword, score, setScore, difficulty }) => {
  const handleInputChange = (e) => {
    const newPasword = e.target.value;
    setPassword(newPasword);
    // console.log("Password:", newPasword);

    const newScore = scoreCounter(newPasword, difficulty);
    setScore(newScore);
  };

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="flex flex-col w-[30rem] h-fit mt-10 items-center">
      <div className="flex justify-between w-full">
        <div className="flex">
          <p className="font-bold w-fit py-2 text-white text-shadow">
            Masukkan Password
          </p>
          <p className="font-light w-fit py-2 text-white text-shadow pl-2">
            (Skor: {score})
          </p>
        </div>
        <p className="font-bold w-fit py-2 text-white text-shadow">
          {password.length}
        </p>
      </div>
      <textarea
        value={password}
        onChange={handleInputChange}
        onInput={handleInput}
        rows={1}
        className="border border-black rounded-md px-4 py-2 mt-2 focus:outline-none text-black w-full resize-none overflow-hidden box-shadow"
        spellCheck={false}
        id="password-input"
      />
    </div>
  );
};

export default InputBox;
