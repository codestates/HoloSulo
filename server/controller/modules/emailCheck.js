require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  userEmailCheck: async (userbody) => {
    const userInfo = await User.findOne({
      where: { email: userbody.email },
    });
    if (userInfo === null) {
      return false;
    }
    if (userInfo.dataValues.email) {
      return true;
    }
  },
};
