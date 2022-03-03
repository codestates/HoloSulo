require("dotenv").config();
const { User } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  try {
    const accessToken = isAuthorized(req.headers.authorization);

    if (!accessToken) {
      res.status(401).send({ message: "유효하지 않은 토큰" });
    } else {
      const userData = await User.findOne({
        where: {
          id: accessToken.id,
        },
      });
      return res.status(200).send({
        data: {
          username: userData.username,
          useremail: userData.useremail,
          visitCount: userData.visitCount,
          weekVisitCount: "0",
          totalHour: "13.5",
        },
        response: "ok",
      });
    }
  } catch {
    return res.status(404).send({ response: "err" });
  }
};
