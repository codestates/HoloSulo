require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },
  refreshToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "14d" });
  },
  sendAccessToken: (res, accessToken) => {
    res.cookie("jwt", accessToken);
  },
  isAuthorized: (token) => {
    return verify(token, process.env.ACCESS_SECRET, (err, decode) => {
      if (err) return false;
      else return decode;
    });
  },
};
