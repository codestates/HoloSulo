const { Oder } = require("../../models");

module.exports = {
  creatOrder: async (tag, time) => {
    await Oder.create({
      theme: tag,
      time: time,
    });
  },
};
