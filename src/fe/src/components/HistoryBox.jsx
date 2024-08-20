import React from "react";

const TextData = ({ title, textColor, text }) => {
  return (
    <div className="flex">
      <p className={`${textColor} font-semibold w-28 `}>{title}</p>
      <p className={`${textColor} font-semibold w-2`}>:</p>
      <p className="break-all overflow-wrap-break-word whitespace-normal w-full ">
        {text}
      </p>
    </div>
  );
};

const HistoryBox = ({ entry, index, onDelete }) => {
  const isFailed = !entry.status;
  const borderColor = isFailed ? "border-[#af1313]" : "border-[#0b910f]";
  const bgColor = isFailed ? "bg-[#ffecec]" : "bg-[#e3ffe3]";
  const textColor = isFailed ? "text-[#af1313]" : "text-black";
  const indexBgColor = isFailed ? "bg-[#af1313]" : "bg-[#0b910f]";

  const [isClicked, setIsClicked] = React.useState(false);

  const deleteEntry = (entryId) => {
    if (!isClicked) {
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
      return;
    }

    let history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
    history = history.filter((item) => item.entryId !== entryId);
    localStorage.setItem("passwordHistory", JSON.stringify(history));

    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div
      className={`relative border-4 rounded-lg my-2 w-[30rem] p-2 ${borderColor} ${bgColor} text-black`}
    >
      <div
        className={`w-10 text-center font-bold text-xl absolute top-[0px] left-[-50px] p-2 ${indexBgColor} text-white rounded`}
      >
        {index + 1}
      </div>
      <TextData title="Password" textColor={textColor} text={entry.password} />
      <TextData title="Tanggal" textColor={textColor} text={entry.date} />
      <TextData title="Waktu" textColor={textColor} text={entry.timeElapsed} />
      <TextData title="Level" textColor={textColor} text={entry.difficulty} />
      <TextData
        title="Selesai"
        textColor={textColor}
        text={entry.completedRules}
      />
      <TextData
        title="Status"
        textColor={textColor}
        text={entry.status ? "Berhasil" : "Gagal"}
      />
      <TextData title="Skor" textColor={textColor} text={entry.score} />
      <button
        className={`font-bold text-xl absolute bottom-[0px] right-0 p-2 rounded text-[#af1313]`}
        onClick={() => deleteEntry(entry.entryId)}
      >
        ✕
      </button>
    </div>
  );
};

export default HistoryBox;
