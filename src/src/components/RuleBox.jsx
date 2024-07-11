import React from "react";

const RuleBox = ({ correct, ruleNumber, children }) => {
  return (
    <div
      className={`flex flex-col w-[30rem] h-fit mt-2 min-h-28 items-center text-black rounded-lg overflow-hidden border-4 box-shadow ${
        correct
          ? "border-[#0b910f] bg-[#e3ffe3]"
          : "border-[#af1313] bg-[#ffecec]"
      }`}
    >
      <div
        className={`flex w-full h-10 items-center border-b-4 ${
          correct
            ? "border-[#0b910f] bg-[#aef3ae]"
            : "border-[#af1313] bg-[#ffc7c7]"
        }`}
      >
        {correct ? (
          <p className="text-2xl font-bold pl-3 pr-2 py-1 text-[#0b910f]">✓</p>
        ) : (
          <p className="text-2xl font-bold pl-3 pr-2 py-1 text-[#af1313]">✕</p>
        )}

        <p className="py-1 font-medium"> Rule {ruleNumber}</p>
      </div>
      <div className="mt-2  w-full px-3 font-light">{children}</div>
    </div>
  );
};

export default RuleBox;
