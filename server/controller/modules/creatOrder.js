const { Order } = require("../../models");

module.exports = {
  creatOrder: async (tag, time) => {
    await Order.create({
      theme: tag,
      time: time,
    });
  },
};
