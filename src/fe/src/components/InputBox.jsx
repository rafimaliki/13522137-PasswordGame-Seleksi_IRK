import React from "react";
import { matchingAlgorithm } from "../logic/gameData";
import Rules from "../logic/rule/RuleList";

const InputBox = ({ password, setPassword }) => {
  const handleInputChange = (e) => {
    var newPasword = e.target.value;
    setPassword(newPasword);
    // console.log("Password:", newPasword);
  };

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="flex flex-col w-[30rem] h-fit mt-10 items-center">
      <div className="flex justify-between w-full">
        <p className="font-bold w-fit py-2 text-white text-shadow">
          Masukkan Password
        </p>
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
