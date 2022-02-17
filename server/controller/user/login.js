require("dotenv").config();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  console.log(req.body);

  const userInfo = await User.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (!userInfo) {
    return res.status(404).send("invaild user");
  } else {
    const payload = {
      id: userInfo.dataValues.id,
      email: userInfo.dataValues.email,
      password: userInfo.dataValues.password,
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
};
