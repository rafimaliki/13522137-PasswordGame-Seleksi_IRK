import React from "react";
import { motion } from "framer-motion";
import RuleBox from "./RuleBox";
import Rules from "../logic/rule/RuleList";

const RuleContainer = ({ password }) => {
  return (
    <motion.div
      className="mb-10"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {Rules.checkAll(password)
        .customSort()
        .map((rule) => (
          <RuleBox
            number={rule.number}
            correct={rule.correct}
            key={rule.number}
          >
            <p>{rule.text}</p>
            <div>{rule.JSXdata}</div>
          </RuleBox>
        ))}
    </motion.div>
  );
};

export default RuleContainer;
