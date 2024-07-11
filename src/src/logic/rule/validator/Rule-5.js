const Rule5 = (password) => {
  return (
    password.split("").reduce((acc, char) => {
      if (/\d/.test(char)) {
        return acc + parseInt(char);
      }
      return acc;
    }, 0) === 25
  );
};

export default Rule5;
