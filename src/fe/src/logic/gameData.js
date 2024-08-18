import bmMatch from "./algorithm/BM";
import kmpMatch from "./algorithm/KMP";

const difficultyData = {
  Easy: {
    minChar: 5,
    sumNumber: 50,
    sumRoman: 16,
    burnSpeed: 3000,
    paulEatTime: 30000,
    sacrifice: 2,
    digitPercentage: 0.1,
  },
  Medium: {
    minChar: 10,
    sumNumber: 35,
    sumRoman: 42,
    burnSpeed: 2000,
    paulEatTime: 20000,
    sacrifice: 4,
    digitPercentage: 0.2,
  },
  Hard: {
    minChar: 15,
    sumNumber: 25,
    sumRoman: 19,
    burnSpeed: 1000,
    paulEatTime: 10000,
    sacrifice: 6,
    digitPercentage: 0.3,
  },
};

// difficulty level
var difficulty = "Easy";
const setDifficulty = (newDifficulty) => {
  difficulty = newDifficulty;
};

// matching algorithm for KMP / BM
var matchingAlgorithm = kmpMatch;
const setMatchingAlgorithm = (algorithm) => {
  if (algorithm === "BM") {
    matchingAlgorithm = bmMatch;
  } else {
    matchingAlgorithm = kmpMatch;
  }
};

export {
  matchingAlgorithm,
  setMatchingAlgorithm,
  difficulty,
  difficultyData,
  setDifficulty,
};
