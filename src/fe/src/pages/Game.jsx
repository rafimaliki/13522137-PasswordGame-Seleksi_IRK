import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import RuleContainer from "../components/RuleContainer";
import ComboBox from "../components/ComboBox";
import { setMatchingAlgorithm } from "../logic/gameData";
import GameResult from "../components/GameResult";

const GamePage = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("Easy");

  const [startDate, setStartDate] = useState(null);
  useEffect(() => {
    setStartDate(new Date());
  }, []);

  // special rule props usestate
  const [isFireActive, setIsFireActive] = useState(false); // false: fire inactive, true: fire active
  const [eggState, setEggState] = useState(0); // 0: egg not placed yet, 1: egg placed, 2: egg hatched

  const ruleProps = {
    isFireActive: isFireActive,
    setIsFireActive: setIsFireActive,
    eggState: eggState,
    setEggState: setEggState,
  };

  const [gameResult, setGameResult] = useState(-1); // -1: game not finished, 0: game lost, 1: game won

  useEffect(() => {
    if (gameResult === 0) {
    } else if (gameResult === 1) {
    }
  }, [gameResult]);

  return (
    <>
      <div className="w-[30rem] flex flex-col items-end mt-2">
        <ComboBox
          title="Algoritma"
          options={["KMP", "BM"]}
          setter={setMatchingAlgorithm}
        />
        <ComboBox
          title="Level"
          options={["Easy", "Medium", "Hard"]}
          setter={setDifficulty}
        />
      </div>
      {gameResult === -1 ? (
        <InputBox
          password={password}
          setPassword={setPassword}
          score={score}
          setScore={setScore}
          difficulty={difficulty}
        />
      ) : (
        <GameResult
          password={password}
          result={gameResult}
          startDate={startDate}
          difficulty={difficulty}
          score={score}
        />
      )}
      <RuleContainer
        password={password}
        setPassword={setPassword}
        difficulty={difficulty}
        ruleProps={ruleProps}
        setGameResult={setGameResult}
        gameResult={gameResult}
      />
    </>
  );
};

export default GamePage;
