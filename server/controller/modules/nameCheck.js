require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  userNameCheck: async (userbody) => {
    const userInfo = await User.findOne({
      where: { username: userbody.username },
    });
    if (!userInfo) {
      return false;
    }
    if (userInfo.dataValues.username) {
      return true;
    }
  },
};
