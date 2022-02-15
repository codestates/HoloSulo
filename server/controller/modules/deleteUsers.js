require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { User } = require("../../models");

module.exports = {
  deleteUser: async (userInfo) => {
    const checkUser = await verify(
      userInfo,
      process.env.ACCESS_SECRET,
      (err, decode) => {
        if (err) throw err;
        else return decode;
      }
    );

    if (!checkUser) {
      return;
    } else {
      const user = await User.destroy({ where: { email: checkUser.email } });
      return true;
    }
  },
};
