import kmpMatch from "../../stringMatching/KMP";

const Bulan = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];

const Rule6 = (password) => {
  for (let i = 0; i < Bulan.length; i++) {
    if (kmpMatch(password.toLowerCase(), Bulan[i])) {
      return true;
    }
  }
  return false;
};

export default Rule6;
