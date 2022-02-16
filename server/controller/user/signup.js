require("dotenv").config();
const { User } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userData = req.body;
    if (
      userData.email === "" ||
      userData.username === "" ||
      userData.password === ""
    ) {
      res.status(400).send({ message: "빈 항목 존재" });
    } else {
      User.findOrCreate({
        where: { email: userData.email },
        default: {
          password: userData.password,
          username: userData.username,
        },
      }).then(([User, created]) => {
        if (created) {
          return res.status(201).send({ response: "ok" });
        } else {
          return res.status(400).send({ response: "err" });
        }
      });
    }
  } catch {
    return res.status(500).send("err");
  }
};
