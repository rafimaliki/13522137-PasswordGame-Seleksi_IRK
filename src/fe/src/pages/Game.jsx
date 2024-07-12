import React, { useState } from "react";
import InputBox from "../components/InputBox";
import RuleContainer from "../components/RuleContainer";
import ComboBox from "../components/ComboBox";
import { setMatchingAlgorithm, setDifficulty } from "../logic/gameState";

const GamePage = () => {
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center text-white font-ubuntu bg-custom">
        <p className="mt-5 font-bold text-4xl text-shadow">
          137 - The Password Game
        </p>
        <div className="w-[30rem] flex flex-col items-end mt-2">
          <ComboBox
            title="Algoritma"
            options={["KMP", "BM"]}
            setter={setMatchingAlgorithm}
          ></ComboBox>
          <ComboBox
            title="Level"
            options={["Easy", "Medium", "Hard"]}
            setter={setDifficulty}
          ></ComboBox>
        </div>
        <InputBox password={password} setPassword={setPassword} />
        <RuleContainer password={password} />
      </div>
    </>
  );
};

export default GamePage;
