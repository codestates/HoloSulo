require("dotenv").config();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const userData = req.body;
    if (
      userData.email === "" ||
      userData.nickname === "" ||
      userData.password === ""
    ) {
      res.status(400).send({ message: "빈 항목 존재" });
    } else {
      const saltRounds = 10;
      bcrypt.hash(userData.password, saltRounds, (err, hash) => {
        User.findOrCreate({
          where: {
            email: userData.email,
            password: hash,
            username: userData.nickname,
          },
        }).then(([User, created]) => {
          if (created) {
            return res
              .status(201)
              .send({ data: { user: User }, response: "ok" });
          } else {
            return res.status(400).send({ response: "err" });
          }
        });
      });
    }
  } catch {
    return res.status(500).send("err");
  }
};
