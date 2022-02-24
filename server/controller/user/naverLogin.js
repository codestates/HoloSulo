require("dotenv").config();
const axios = require("axios");
const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
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
    }).then(async (el) => {
      await axios({
        method: "get",
        url: "https://openapi.naver.com/v1/nid/me",
        headers: {
          Authorization: `Bearer ${el.data.access_token}`,
        },
      }).then((el) => {
        console.log(el);
        return res.status(200).send({
          data: {
            email: el.data.response.email,
            nickname: el.data.response.nickname,
            mobile: el.data.response.mobile,
          },
          state: state,
        });
      });
    });
  },
};
/**
 *       
      return res.status(200).send({
        accessToken: el.data,
        state: query.state,
      });

            await axios({
        method:"post",
        url:"https://openapi.naver.com/v1/nid/me",
        
      }
 */
