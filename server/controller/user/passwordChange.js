require("dotenv").config();
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  const userData = isAuthorized(req.headers.authorization);
  if (!userData) {
    res.status(401).send({ message: "err" });
  } else {
    const findUser = await User.findOne({ where: { id: userData.id } });
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      try {
        await findUser.update({ password: hash });
        res.status(200).send({ message: "ok" });
      } catch (err) {
        res.status(500).send({ message: "err" });
      }
    });
  }
};
