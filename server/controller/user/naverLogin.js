require("dotenv").config();
const axios = require("axios");
const { User } = require("../../models");
const { generateAccessToken } = require("../modules/tokenFunction");
const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
module.exports = {
  getNaverCallback: async (req, res) => {
    const query = req.body;
    let url = `https://nid.naver.com/oauth2.0/token?client_id=q4rVdqPg4Nfjz9ZZ89a0&client_secret=2cGjCP9zTS&grant_type=authorization_code&state=${query.state}&code=${query.code}`;
    await axios({
      method: "post",
      url: url,
      headers: {
        accept: "application/json",
      },
      data: {
        client_id: clientId,
        client_secret: clientSecret,
        code: query.code,
      },
    }).then(async (el) => {
      await axios({
        method: "get",
        url: "https://openapi.naver.com/v1/nid/me",
        headers: {
          Authorization: `Bearer ${el.data.access_token}`,
        },
      }).then(async (el) => {
        // console.log(el.data.response.id);
        try {
          User.findOrCreate({
            where: {
              email: el.data.response.email,
              username: el.data.response.nickname,
            },
          }).then((el) => {
            const payload = {
              id: el[0].dataValues.id,
              email: el[0].dataValues.email,
              username: el[0].dataValues.username,
            };
            const accessToken = generateAccessToken(payload);
            return res.status(200).send({
              response: "ok",
              data: {
                accessToken: accessToken,
                userInfo: { username: el[0].dataValues.username },
              },
            });
          });
        } catch (error) {
          console.log("error : ", error);
          res.state(500).send({ response: "잘못된 접근입니다" });
        }
      });
    });
  },
};
