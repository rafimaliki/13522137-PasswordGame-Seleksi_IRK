import kmpMatch from "../../stringMatching/KMP";

const Rule18 = (password) => {
  const length = password.length.toString();
  return kmpMatch(password, length);
};

export default Rule18;
