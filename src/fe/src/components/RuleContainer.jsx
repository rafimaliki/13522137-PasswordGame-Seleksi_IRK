import React from "react";
import { motion } from "framer-motion";
import Rules from "../logic/rule/RuleList";

const RuleContainer = ({ password, setPassword, difficulty }) => {
  const sortRules = () => {
    Rules.checkAll(password, difficulty);
    const jsxObjects = Rules.list
      .filter((rule) => rule.correct !== null)
      .map((rule) => ({
        ...rule,
        jsx: (
          <div key={rule.number}>
            <rule.JSXdata
              rule={rule}
              difficulty={difficulty}
              password={password}
              setPassword={setPassword}
            />
          </div>
        ),
      }));

    const sortedJsxObjects = jsxObjects.sort((a, b) => {
      if (a.correct === b.correct) {
        if (a.correct) {
          return b.number - a.number;
        } else {
          return a.number - b.number;
        }
      }
      return a.correct - b.correct;
    });

    return sortedJsxObjects.map((obj) => obj.jsx);
  };
  return (
    <motion.div
      className="mb-10"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {sortRules()}
    </motion.div>
  );
};

export default RuleContainer;
