import React from "react";
import { motion } from "framer-motion";
import RuleBox from "./RuleBox";
import Rules from "../logic/rule/RuleList";

const RuleContainer = ({ password }) => {
  const renderRules = () => {
    Rules.checkAll(password);
    return Rules.customSort().map((rule, _) => (
      <motion.div
        key={rule.number}
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <RuleBox number={rule.number} correct={rule.correct}>
          {rule.text}
        </RuleBox>
      </motion.div>
    ));
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
      {renderRules()}
    </motion.div>
  );
};

export default RuleContainer;
