import React from "react";

const HistoryBox = ({ entry, index, onDelete }) => {
  const isFailed = !entry.status;
  const borderColor = isFailed ? "border-[#af1313]" : "border-[#0b910f]";
  const bgColor = isFailed ? "bg-[#ffecec]" : "bg-[#e3ffe3]";
  const textColor = isFailed ? "text-[#af1313]" : "text-black";
  const indexBgColor = isFailed ? "bg-[#af1313]" : "bg-[#0b910f]";

  const deleteEntry = (entryId) => {
    let history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
    history = history.filter((item) => item.entryId !== entryId);
    localStorage.setItem("passwordHistory", JSON.stringify(history));

    // Call the onDelete function to update the parent component's state
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div
      className={`relative border-4 rounded-lg my-2 w-[30rem] p-2 ${borderColor} ${bgColor} text-black `}
    >
      <div
        className={`font-bold text-xl absolute top-[0px] left-[-35px] p-2 ${indexBgColor} text-white rounded`}
      >
        {index + 1}
      </div>
      <p>
        <span className={`font-semibold ${textColor}`}>Password</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span>{" "}
        <span className="break-all overflow-wrap-break-word whitespace-normal">
          {entry.password}
        </span>
      </p>
      <p>
        <span className={`font-semibold ${textColor} mr-3`}>Tanggal</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span> {entry.date}
      </p>
      <p>
        <span className={`font-semibold ${textColor} mr-6`}>Waktu</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span>{" "}
        {entry.timeElapsed}
      </p>
      <p>
        <span className={`font-semibold ${textColor} mr-8`}>Level</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span>{" "}
        {entry.difficulty}
      </p>
      <p>
        <span className={`font-semibold ${textColor} mr-5`}>Selesai</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span>{" "}
        {entry.completedRules}
      </p>
      <p>
        <span className={`font-semibold ${textColor} mr-6`}>Status</span>{" "}
        <span className={`font-semibold ${textColor}`}>:</span>{" "}
        {entry.status ? "Berhasil" : "Gagal"}
      </p>
      <button
        className={`font-bold text-xl absolute bottom-[0px] right-0 p-2 rounded`}
        onClick={() => deleteEntry(entry.entryId)}
      >
        ❌
      </button>
    </div>
  );
};

export default HistoryBox;
