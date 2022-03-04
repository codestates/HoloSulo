require("dotenv").config();
const { User, Order } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");
const schedule = require("node-schedule");

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
      const userOrderData = await Order.findOne({
        where: {
          userId: accessToken.id,
        },
      });
      /*const weekVisitCount = schedule.scheduleJob('0 0 0 * * 1', async()=>{
        const mondayreset = 
      })*/
      return res.status(200).send({
        data: {
          username: userData.username,
          useremail: userData.email,
          visitCount: userData.visitCount,
          weekVisitCount: "0",
          totalHour: userOrderData.time,
        },
        response: "ok",
      });
    }
  } catch {
    return res.status(404).send({ response: "err" });
  }
};
