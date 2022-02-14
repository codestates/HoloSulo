require("dotenv").config();
const { userNameCheck } = require("../modules/nameCheck");

module.exports = async (res, req) => {
  const check = userNameCheck(req.bdoy.username);

  if (check === true) {
    return res.status(409).send("user name conflict");
  } else {
    return res.status(200).send("ok");
  }
};
