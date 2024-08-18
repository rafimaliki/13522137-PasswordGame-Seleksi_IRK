import { React, useState, useEffect } from "react";
import HistoryBox from "../components/HistoryBox";
const HistoryPage = ({ pageIndex }) => {
  const [history, setHistory] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const getHighScore = (history) => {
    let highScore = 0;
    history.forEach((entry) => {
      if (entry.score > highScore) {
        highScore = entry.score;
      }
    });

    return highScore;
  };

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
    history.reverse();
    setHistory(history);
    setHighScore(getHighScore(history));
  }, [pageIndex]);

  const handleDelete = () => {
    const updatedHistory =
      JSON.parse(localStorage.getItem("passwordHistory")) || [];
    setHistory(updatedHistory);
    setHighScore(getHighScore(updatedHistory));
  };

  return (
    <div>
      {history.length > 0 ? (
        <>
          <p>Skor Tertinggi: {highScore}</p>
          <div>
            {history.map((entry, idx) => (
              <HistoryBox
                entry={entry}
                index={idx}
                key={entry.entryId}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      ) : (
        <p>Riwayat kosong.</p>
      )}
    </div>
  );
};

export default HistoryPage;
