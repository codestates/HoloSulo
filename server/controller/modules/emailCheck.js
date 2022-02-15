require("dotenv").config();
const { User } = require("../../models");

module.exports = {
  userEmailCheck: async (userbody) => {
    console.log(userbody);
    const userInfo = await User.findOne({
      where: { email: userbody.email },
    });
    if (!userInfo) {
      return false;
    }
    if (userInfo.dataValues.email) {
      return true;
    }
  },
};
