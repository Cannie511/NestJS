// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPasswordHelper = async (password: string) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (
  plainPassword: string,
  hashPassword: string,
) => {
  try {
    return await bcrypt.compare(plainPassword, hashPassword);
  } catch (error) {
    console.log(error);
  }
};

export const generateRandomCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString();
};
