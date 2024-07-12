import React from "react";
import { motion } from "framer-motion";

const RuleBox = ({ correct, number, children }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
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
            <p className="text-2xl font-bold pl-3 pr-2 py-1 text-[#0b910f]">
              ✓
            </p>
          ) : (
            <p className="text-2xl font-bold pl-3 pr-2 py-1 text-[#af1313]">
              ✕
            </p>
          )}

          <p className="py-1 font-medium"> Rule {number}</p>
        </div>
        <div className="mt-2  w-full px-3 font-light flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default RuleBox;
