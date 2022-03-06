require("dotenv").config();
const { User, Order } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  try {
    const accessToken = isAuthorized(req.headers.authorization);
    console.log(accessToken);
    if (!accessToken) {
      res.status(401).send({ message: "유효하지 않은 토큰" });
    } else {
      const userData = await User.findOne({
        where: {
          id: accessToken.id,
        },
      });
      console.log("userData", userData);
      const userOrderData = await Order.findOne({
        where: {
          userId: accessToken.id,
        },
      });
      console.log("userOrderData", userOrderData);
      /*const weekVisitCount = schedule.scheduleJob('0 0 0 * * 1', async()=>{
        const mondayreset = 
      })*/
      return res.status(200).send({
        data: {
          username: userData.username,
          useremail: userData.email,
          visitCount: userData.visitCount,
          weekVisitCount: "0",
          totalHour: userOrderData ? userOrderData.time : 0,
        },
        response: "ok",
      });
    }
  } catch {
    return res.status(404).send({ response: "err" });
  }
};
