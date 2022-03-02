require("dotenv").config();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
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
  // console.log(userInfo);
  try {
    if (!userInfo) {
      return res.status(404).send("이메일 혹은 비밀번호가 일치하지 않습니다.");
    } else {
      const match = await bcrypt.compare(
        user.password,
        userInfo.dataValues.password
      );
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
            userInfo: {
              id: userInfo.dataValues.id,
              username: userInfo.dataValues.username,
              email: userInfo.dataValues.email,
              visitCount: userInfo.dataValues.visitCount,
            },
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ err: err.message });
  }
};
