require("dotenv").config();
const { isAuthorized } = require("./tokenFunction");
const { User } = require("../../models");

module.exports = {
  deleteUser: async (userInfo) => {
    const checkUser = await isAuthorized(userInfo);

    if (!checkUser) {
      return;
    } else {
      const user = await User.destroy({ where: { email: checkUser.email } });
      return true;
    }
  },
};
