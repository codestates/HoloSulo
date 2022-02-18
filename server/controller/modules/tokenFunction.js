require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },
  refreshToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "14d" });
  },
  isAuthorized: (token) => {
    return verify(token, process.env.ACCESS_SECRET, (err, decode) => {
      if (err) throw err;
      else return decode;
    });
  },
};
