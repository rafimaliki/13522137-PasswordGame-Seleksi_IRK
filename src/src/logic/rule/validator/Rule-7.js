import kmpMatch from "../../stringMatching/KMP";

const Roman = [
  "I",
  // "II", "III", "IV",
  "V",
  // "VI",
  // "VII", "VIII", "IX",
  "X",
];

const Rule7 = (password) => {
  for (let i = 0; i < Roman.length; i++) {
    // make password all lowercase
    if (kmpMatch(password, Roman[i])) {
      return true;
    }
  }
  return false;
};

export default Rule7;
