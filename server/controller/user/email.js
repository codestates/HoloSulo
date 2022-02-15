require("dotenv").config();
const { userEmailCheck } = require("../modules/nameCheck");

module.exports = async (req, res) => {
  console.log(req);
  const check = await userEmailCheck(req.body);

  if (check === true) {
    return res.status(409).send("user email conflict");
  } else {
    return res.status(200).send("ok");
  }
};
