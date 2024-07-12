import { excludedLetters, countExcludedLetters } from "../../gameState";

const Rule15 = (password) => {
  if (excludedLetters.length === countExcludedLetters) {
    // console.log(excludedLetters, countExcludedLetters);
    for (let i = 0; i < countExcludedLetters; i++) {
      if (password.toLowerCase().includes(excludedLetters[i].toLowerCase())) {
        // console.log("Rule 15 failed");
        return false;
      }
    }
    // console.log("Rule 15 passed");
    return true;
  }
};

export default Rule15;
