require("dotenv").config();
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  const userData = isAuthorized(req.headers.Authorization);
  if (!userData) {
    res.status(401).send({ Response: "err" });
  } else {
    const findUser = await User.findOne({ where: { id: userData.id } });
    const saltRounds = 10;
    bcrypt.hash(userData.password, saltRounds, (err, hash) => {
      try {
        await findUser.update({ password: hash });
        res.status(200).send({ response: "ok" });
      } catch (err) {
        res.status(200).send({ response: "err" });
      }
    });
  }
};
