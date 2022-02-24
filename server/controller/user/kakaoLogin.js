require("dotenv").config();
const axios = require("axios");
const { User } = require("../../models");
const {
  generateAccessToken,
  sendAccessToken,
} = require("../modules/tokenFunction");
// 카카오 인가코드 받기
module.exports = {
  kakao: async (req, res) => {
    return res.redirect(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}/kakaocallback&response_type=code`
    );
  },

  kakaocallback: async (req, res) => {
    const authorizationCode = req.body.authorizationCode;

    try {
      // 카카오 토큰 발급
      let kakaoToken = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}/kakaocallback&code=${authorizationCode}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          withCredentials: true,
        }
      );

      // 카카오 토큰을 통한 유저 정보 GET
      let userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${kakaoToken.data.access_token}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8;",
        },
        withCredentials: true,
      });

      //const { id } = userInfo.data;
      const { email } = userInfo.data.kakao_account.email;
      const { nickname } = userInfo.data.kakao_account.profile;

      // DB 테이블 저장
      const [userData] = await User.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          email: email,
          username: nickname,
          password: "",
        },
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);

      return res.status(201).json({ success: true, message: "로그인이 완료" });
    } catch (err) {
      return res.status(400).send({ success: false, message: "로그인에 실패" });
    }
  },
};
