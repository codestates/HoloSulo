require("dotenv").config();
const { verify } = require("jsonwebtoken");
const { User } = require("../../models");

module.exports = {
  deleteUser: (userInfo) => {
    const checkUser = verify(
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
      const user = User.destroy({ where: { email: checkUser.email } });
      return true;
    }
  },
};
