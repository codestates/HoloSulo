require("dotenv").config();
const { userEmailCheck } = require("../modules/emailCheck");

module.exports = async (req, res) => {
  const check = await userEmailCheck(req.body);

  if (check === true) {
    return res.status(409).send({ message: "user email conflict" });
  } else {
    return res.status(200).send({ response: "ok" });
  }
};
