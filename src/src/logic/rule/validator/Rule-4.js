const Rule4 = (password) => {
  return /[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>/?]/.test(password);
};

export default Rule4;
