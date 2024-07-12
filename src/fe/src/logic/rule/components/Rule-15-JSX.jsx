import { React, useState } from "react";
import { excludedLetters, modifyExcludedLetters } from "../../gameState";

const KeyboardButton = ({ char }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    const success = modifyExcludedLetters(char);
    if (success) setIsActive(!isActive);
  };
  return (
    <button
      className={`${
        isActive ? "bg-[#aef3ae]" : "bg-white"
      } w-6 h-8 flex items-center justify-center text-center border-2 border-white rounded-md`}
      onClick={handleClick}
    >
      <p className="w-full">{char}</p>
    </button>
  );
};

const Rule15Keyboard = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const random10alphabet = alphabets
    .split("")
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <div className="w-full flex justify-center items-center mb-4">
      {/* render button with random alphabet in 5x2 grid */}
      <div className="grid grid-cols-5 gap-2 w-[10rem]">
        {random10alphabet.map((char, index) => (
          <KeyboardButton key={index} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Rule15Keyboard;
