require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  userNameCheck: async (username) => {
    const userInfo = await User.findOne({ where: { username: username } });
    if (userInfo.dataValues.username) {
      return true;
    } else {
      return false;
    }
  },
};
