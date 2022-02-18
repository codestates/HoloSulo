require("dotenv").config();
const { User } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  const userData = isAuthorized(req.headers.Authorization);
  if (!userData) {
    res.status(401).send({ response: "err" });
  } else {
    const findUser = await User.findOne({ where: { id: userData.id } });
    await findUser.update({ username: req.body.username });
    res.status(200).send({ response: "ok" });
  }
};
