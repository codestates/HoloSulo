require("dotenv").config();
const axios = require("axios");
const { User } = require("../../models");
const { generateAccessToken } = require("../modules/tokenFunction");
const kakaoClientID = process.env.KAKAO_CLIENT_ID;
const redirect = process.env.KAKAO_REDIRECT_URL;

module.exports = async (req, res) => {
  console.log("\n req.body:", req.body, "\n");

  if (!req.body) {
    console.log("no code in request body");
    return res.status(400).send({ message: "Code does not exist" });
  }

  const kakao = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${kakaoClientID}&redirect_uri=${redirect}&code=${req.body.authorizationCode}`;

  // 토큰발급 => 클라이언트에서 받은 code를 이용해서 카카오 oauth 서버에서 token 받아오는 요청
  const tokenCheck = await axios.get(kakao).catch((err) => {
    console.log(err);
  });

  if (!tokenCheck) {
    console.log("no token data");
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
  console.log(
    "email:",
    email,
    "\nnickname:",
    nickname,
    "\naccess_token:",
    access_token
  );

  //받아온 email, nickname, token(password)을 가지고 회원가입
  User.findOrCreate({
    where: {
      email: email,
      password: access_token,
      username: nickname,
    },
  })
    .then(([User, created]) => {
      if (created) {
        return res.status(201).send({ data: { user: User }, response: "ok" });
      } else {
        return res.status(400).send({ response: "err" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ message: "query error" });
    });
};
