const scoreCounter = (password, difficulty) => {
  const lowercaseRegex = /[a-z]/g;
  const uppercaseRegex = /[A-Z]/g;
  const digitRegex = /\d/g;
  const specialCharRegex = /[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>/?]/g;

  const lowercaseCount = (password.match(lowercaseRegex) || []).length;
  const uppercaseCount = (password.match(uppercaseRegex) || []).length;
  const digitCount = (password.match(digitRegex) || []).length;
  const specialCharCount = (password.match(specialCharRegex) || []).length;

  let score =
    lowercaseCount * 7 +
    uppercaseCount * 11 +
    digitCount * 5 +
    specialCharCount * 15;

  if (password.length > 100) {
    const extraLength = password.length - 100;

    const minusFactor = 10;
    score -= extraLength * minusFactor;
  }

  if (score < 0) {
    score = 0;
  }

  if (difficulty === "Medium") {
    score *= 1.5;
  } else if (difficulty === "Hard") {
    score *= 2;
  }

  return score;
};

export default scoreCounter;
