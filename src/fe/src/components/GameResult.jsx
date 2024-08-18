import React, { useState, useEffect } from "react";
import Rules from "../logic/rule/RuleList";

const getDuration = (startDate) => {
  const endDate = new Date();

  const timeElapsed = endDate - startDate;

  const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
  const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  const formattedTime =
    (hours ? hours + " jam " : "") +
    (minutes ? minutes + " menit " : "") +
    seconds +
    " detik";

  return formattedTime;
};

const getCompletedRules = () => {
  let completedRules = [];
  for (let i = 0; i < Rules.list.length; i++) {
    if (Rules.list[i].correct) {
      completedRules.push(Rules.list[i].number);
    }
  }
  completedRules = "[" + completedRules.join(", ") + "]";

  return completedRules;
};

const GameResult = ({ password, result, startDate, difficulty, score }) => {
  const handleReset = () => {
    window.location.reload();
  };

  const completedRules = getCompletedRules();

  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const savePasswordToHistory = () => {
      const duration = getDuration(startDate);
      setFormattedTime(duration);

      const history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
      // const history = [];

      const date = new Date().toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const newEntry = {
        entryId:
          history.length === 0 ? 0 : history[history.length - 1].entryId + 1,
        password: password,
        date: date,
        timeElapsed: duration,
        difficulty: difficulty,
        status: result,
        completedRules: completedRules,
        score: result ? score : 0,
      };

      history.push(newEntry);

      // console.log("New history", history);

      localStorage.setItem("passwordHistory", JSON.stringify(history));
    };

    savePasswordToHistory();
  }, [password]);

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

      <p className="border border-black bg-white rounded-md px-4 py-2 mt-2 focus:outline-none text-black w-full resize-none overflow-hidden box-shadow">
        {password}
      </p>

      <div
        className={`flex flex-col w-[30rem] h-fit mt-2 mb-2 items-center text-black rounded-lg overflow-hidden border-4 box-shadow ${
          result
            ? "border-[#0b910f] bg-[#e3ffe3]"
            : "border-[#af1313] bg-[#ffecec]"
        }`}
      >
        {result ? (
          <p className="w-full p-2 text-center">
            <strong>Selamat!</strong> Kamu berhasil memecahkan password dengan
            panjang {password.length} karakter dalam waktu {formattedTime}.
          </p>
        ) : (
          <p className="w-full p-2 text-center">
            <strong>Maaf!</strong> Kamu gagal memecahkan password :(
          </p>
        )}
      </div>

      <button
        onClick={handleReset}
        className="font-light mb-16 mt-2 px-4 py-2 bg-[#0b910f] text-white rounded-md hover:bg-[#af1313] transition-colors duration-200"
      >
        Main lagi
      </button>
    </div>
  );
};

export default GameResult;
