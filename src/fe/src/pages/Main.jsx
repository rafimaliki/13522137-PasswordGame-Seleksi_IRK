import React, { useState } from "react";
import GamePage from "./Game";
import HistoryPage from "./History";
import RankPage from "./Rank";

import NavButton from "../components/NavButton";

const MainPage = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center text-white font-ubuntu bg-custom">
      <p className="mt-5 font-bold text-4xl text-shadow">
        137 - The Password Game
      </p>
      <div className="mb-4 w-[30rem] flex justify-center">
        <NavButton text="Permainan" onClick={() => setPageIndex(0)} />
        {/* <NavButton text="Papan Peringkat" onClick={() => setPageIndex(1)} /> */}
        <NavButton text="Riwayat" onClick={() => setPageIndex(2)} />
      </div>

      <div className={pageIndex === 0 ? "block" : "hidden"}>
        <GamePage />
      </div>
      <div className={pageIndex === 1 ? "block" : "hidden"}>
        <RankPage />
      </div>
      <div className={pageIndex === 2 ? "block" : "hidden"}>
        <HistoryPage pageIndex={pageIndex} />
      </div>
    </div>
  );
};

export default MainPage;
