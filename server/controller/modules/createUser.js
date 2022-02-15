require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  createUser: async ({ email, username, password }) => {
    await User.create({
      email: email,
      username: username,
      password: password,
    });
  },
};
