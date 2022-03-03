const { Order } = require("../../models");

module.exports = {
  creatOrder: async (tag, time, id) => {
    if (tag === null || time === null || id === null) {
      return console.log("err");
    }
    await Order.create({
      theme: tag,
      time: time,
      userId: id,
    });
  },
};
