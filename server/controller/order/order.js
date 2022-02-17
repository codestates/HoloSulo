require("dotenv").config();
const { creatOrder } = require("../modules/creatOrder");
const finder = require("../modules/finder");

module.exports = async (req, res) => {
  const { tag, playlistId, time } = req.body;
  const findTag = await finder.findTag(tag);
  const findSong = await finder.findSong(playlistId);
  if (!findTag || !findSong) {
    return res.status(400).send("not find tag");
  }
  await creatOrder(tag, time);
  return res
    .status(200)
    .send({ data: { tag: tag, song: findSong }, response: "ok" });
};
