import { React, useState, useEffect } from "react";
import HistoryBox from "../components/HistoryBox";
const HistoryPage = ({ pageIndex }) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
    history.reverse();
    setHistory(history);
  }, [pageIndex]);

  const handleDelete = () => {
    const updatedHistory =
      JSON.parse(localStorage.getItem("passwordHistory")) || [];
    setHistory(updatedHistory);
  };

  return (
    <div>
      {history.length > 0 ? (
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
      ) : (
        <p>Riwayat kosong.</p>
      )}
    </div>
  );
};

export default HistoryPage;
