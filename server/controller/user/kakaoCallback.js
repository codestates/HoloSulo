require("dotenv").config();
const axios = require("axios");
const { User } = require("../../models");
const { generateAccessToken } = require("../modules/tokenFunction");
const kakaoClientID = process.env.KAKAO_CLIENT_ID;
const redirect = process.env.KAKAO_REDIRECT_URL;

module.exports = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Code does not exist" });
  }

  const kakao = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${kakaoClientID}&redirect_uri=${redirect}&code=${req.query.code}`;

  // 토큰발급 => 클라이언트에서 받은 code를 이용해서 카카오 oauth 서버에서 token 받아오는 요청
  const tokenCheck = await axios.get(kakao).catch((err) => {
    console.log(err);
  });

  if (!tokenCheck) {
    return res.status(401).send({ message: "Failed kakao access token" });
  }

  const { access_token } = tokenCheck.data;

  // 카카오 oauth 서버에서 받아온 token을 이용해 유저정보 요청(email, nickname, token)
  const getData = await axios({
    method: "get",
    url: "https://kapi.kakao.com/v2/user/me",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).catch((err) => {
    console.log(err);
  });

  if (!getData) {
    return res.status(403).send({ message: "not data" });
  }

  const { email } = getData.data.kakao_account;
  const { nickname } = getData.data.kakao_account.profile;

  //받아온 email, nickname을 가지고 회원가입 & 로그인
  User.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
      username: nickname,
    },
  })
    .then(([data, created]) => {
      if (!created) {
        User.findOne({ where: { email } })
          .then((findData) => {
            const holosuloAccessToken = generateAccessToken(
              findData.dataValues
            );
            return res.status(200).send({
              data: { accessToken: holosuloAccessToken },
              message: "kakao social login success",
            });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).send({ message: "query error" });
          });
      } else {
        const holosuloAccessToken = generateAccessToken(data.dataValues);
        return res.status(200).send({
          data: { accessToken: holosuloAccessToken },
          message: "kakao social login success",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ message: "query error" });
    });
};
