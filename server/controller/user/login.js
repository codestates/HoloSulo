require("dotenv").config();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  console.log(req.body);
  const user = req.body;
  if (user.email === null) {
    res.status(400).send("아이디를 입력하세요");
  }
  if (user.password === null) {
    res.status.sedn("비밀번호를 입력하세요");
  }

  const userInfo = await User.findOne({
    where: { email: user.email },
  });
  console.log(userInfo);
  try {
    if (!userInfo) {
      return res.status(404).send("이메일 혹은 비밀번호가 일치하지 않습니다.");
    } else {
      const match = bcrypt.compare(user.password, userInfo.dataValues.password);
      if (!match) {
        res.status(400).send("이메일 혹은 비밀번호가 일치하지 않습니다.");
      } else {
        const payload = {
          id: userInfo.dataValues.id,
          email: userInfo.dataValues.email,
          username: userInfo.dataValues.username,
          visitCount: userInfo.dataValues.visitCount,
          createdAt: userInfo.dataValues.createdAt,
          updatedAt: userInfo.dataValues.updatedAt,
        };
        const accessToken = generateAccessToken(payload);
        return res.status(200).send({
          response: "ok",
          data: {
            accessToken: accessToken,
            userInfo: { username: userInfo.dataValues.username },
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ err: err.message });
  }
};
