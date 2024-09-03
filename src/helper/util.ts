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
