const { Order } = require("../../models");

module.exports = {
  creatOrder: async (tag, time) => {
    if (tag === null || time === null) {
      return console.log("err");
    }
    await Order.create({
      theme: tag,
      time: time,
    });
  },
};
