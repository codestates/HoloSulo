require("dotenv").config();
const axios = require("axios");
const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
module.exports = async (req, res) => {
  const query = req.query;
  const url = `https://nid.naver.com/oauth2.0/tokenhttps://nid.naver.com/oauth2.0/token?client_id=${clientId}0&client_secret=${clientSecret}&grant_type=authorization_code&state=${query.state}&code=${query.code}`;
  await axios({
    method: "post",
    url: url,
    headers: {
      accept: "application/json",
    },
    data: {
      client_id: clientID,
      client_secret: clientSecret,
      code: query.code,
    },
  }).then((el) => {
    return res
      .status(200)
      .send({ accessToken: el.data.access_token, state: query.state });
  });
};
