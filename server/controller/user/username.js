require("dotenv").config();
const { userNameCheck } = require("../modules/nameCheck");

module.exports = async (req, res) => {
  const check = await userNameCheck(req.body);

  if (check === true) {
    return res.status(409).send({ message: "user name conflict" });
  } else {
    return res.status(200).send({ response: "ok" });
  }
};
