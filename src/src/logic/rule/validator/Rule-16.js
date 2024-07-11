import kmpMatch from "../../stringMatching/KMP";

const IRK = ["I want IRK", "I need IRK", "I love IRK"];

const Rule16 = (password) => {
  for (let i = 0; i < IRK.length; i++) {
    if (kmpMatch(password, IRK[i])) {
      return true;
    }
  }
  return false;
};

export default Rule16;
