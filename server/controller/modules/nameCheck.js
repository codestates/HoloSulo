require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  userNameCheck: (username) => {
    const userInfo = User.findOne({ where: { username: username } });
    if (userInfo.dataValues.username === username) {
      return true;
    } else {
      return false;
    }
  },
};
