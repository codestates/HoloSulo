require("dotenv").config();
const axios = require("axios");
const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
const callback = "http://localhost:8080/naver/callback";
const state = "qwe123";
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
    }).then((el) => {
      return res.status(200).send({
        accessToken: el.data,
        state: query.state,
      });
    });
  },
};
