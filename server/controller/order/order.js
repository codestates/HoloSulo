require("dotenv").config();
const { User } = require("../../models");
const { creatOrder } = require("../modules/creatOrder");
const { isAuthorized } = require("../modules/tokenFunction");
const finder = require("../modules/finder");

module.exports = async (req, res) => {
  try {
    const { tag, playlistId, time } = req.body;
    const Authorization = req.headers.authorization;
    const findTag = await finder.findTag(tag);
    const findSong = await finder.findSong(playlistId);
    const userInfo = isAuthorized(Authorization);

    if (!findTag || !findSong) {
      return res.status(400).send("not find tag");
    }
    if (!Authorization || !userInfo) {
      return res
        .status(200)
        .send({ data: { tag: tag, song: findSong }, response: "ok" });
    } else {
      await User.increment({ visitCount: 1 }, { where: { id: userInfo.id } });
      await creatOrder(tag, time, userInfo.id);
      return res
        .status(200)
        .send({ data: { tag: tag, song: findSong }, response: "ok" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
