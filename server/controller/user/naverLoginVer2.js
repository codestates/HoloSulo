require("dotenv").config();
const axios = require("axios");
const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
const callback = "http://localhost:8080/naver/callback";
const state = "qwe123";
module.exports = {
  // 방법 1 -> 서버에서 state 생성
  // 방법 2 -> 클라이언트에서 해더로 보내주는 state
  getNaverLoginVer2: async (req, res) => {
    // const state = req.headers.state;
    console.log(req);
    const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${callback}&state=${state}`;
    return await axios({
      method: "get",
      url: url,
    });
  },
  getNaverCallback: async (req, res) => {
    const query = req.query;
    let url = `https://nid.naver.com/oauth2.0/token?client_id=q4rVdqPg4Nfjz9ZZ89a0&client_secret=2cGjCP9zTS&grant_type=authorization_code&state=qwe123&code=${query.code}`;
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
    }).then((el) => {
      return res
        .status(200)
        .send({ accessToken: el.data.access_token, state: query.state });
    });
  },
};
