import React from "react";
import { motion } from "framer-motion";
import RuleBox from "./RuleBox";
import Rules from "../logic/rule/class/Rule";

const RuleContainer = ({ password }) => {
  const sortedRules = [...Rules].sort((a, b) => {
    const aCorrect = a.checker(password);
    const bCorrect = b.checker(password);

    if (aCorrect === bCorrect) {
      return b.ruleNumber - a.ruleNumber;
    }

    return bCorrect - aCorrect;
  });

  return (
    <motion.div
      className="mb-10"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {sortedRules.map((rule, _) => (
        <motion.div
          key={rule.ruleNumber}
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <RuleBox
            ruleNumber={rule.ruleNumber}
            correct={rule.checker(password)}
          >
            {rule.text}
          </RuleBox>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RuleContainer;
