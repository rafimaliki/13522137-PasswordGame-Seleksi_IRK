import bmMatch from "./algorithm/BM";
import kmpMatch from "./algorithm/KMP";

var countExcludedLetters = 2;

var matchingAlgorithm = kmpMatch;

const setMatchingAlgorithm = (algorithm) => {
  if (algorithm === "BM") {
    matchingAlgorithm = bmMatch;
  } else {
    matchingAlgorithm = kmpMatch;
  }
};

var difficulty = "Easy";

const setDifficulty = (newDifficulty) => {
  difficulty = newDifficulty;
};

var excludedLetters = [];

const modifyExcludedLetters = (letters) => {
  // if letter not in excluded and excluded size < 2 add to list
  if (
    !excludedLetters.includes(letters) &&
    excludedLetters.length < countExcludedLetters
  ) {
    excludedLetters.push(letters);
    return true;
  } else if (excludedLetters.includes(letters)) {
    // if letter in excluded remove from list
    excludedLetters = excludedLetters.filter((letter) => letter !== letters);
    return true;
  }
  return false;
};

export {
  matchingAlgorithm,
  setMatchingAlgorithm,
  difficulty,
  setDifficulty,
  excludedLetters,
  modifyExcludedLetters,
  countExcludedLetters,
};
