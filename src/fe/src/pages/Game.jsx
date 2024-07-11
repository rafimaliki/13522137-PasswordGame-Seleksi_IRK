import React, { useState } from "react";
import InputBox from "../components/InputBox";
import RuleContainer from "../components/RuleContainer";

const GamePage = () => {
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center text-white font-ubuntu bg-custom">
        <p className="mt-5 font-bold text-4xl text-shadow">
          137 - The Password Game
        </p>
        <InputBox password={password} setPassword={setPassword} />
        <RuleContainer password={password} />
      </div>
    </>
  );
};

export default GamePage;
