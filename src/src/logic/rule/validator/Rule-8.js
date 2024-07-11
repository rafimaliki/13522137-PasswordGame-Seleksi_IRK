import kmpMatch from "../../stringMatching/KMP";

const Negara = [
  "Indonesia",
  "Malaysia",
  "Belanda",
  "Jerman",
  "Italia",
  "Jepang",
  "Brazil",
  "Argentina",
  "Perancis",
  "Spanyol",
];

const RandomNegara = Negara.sort(() => 0.5 - Math.random()).slice(0, 3);
const RandomNegaraString = "[" + RandomNegara.join(" | ") + "]";

const Rule8 = (password) => {
  for (let i = 0; i < RandomNegara.length; i++) {
    if (kmpMatch(password, RandomNegara[i])) {
      return true;
    }
  }
  return false;
};

export { Rule8, RandomNegaraString };
