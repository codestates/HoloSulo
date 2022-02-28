require("dotenv").config();
const finder = require("../modules/finder");

module.exports = async (req, res) => {
  try {
    const { tag } = req.query;
    const findTag = await finder.findTag(tag);
    const findTagId = await finder.findTagId(findTag.dataValues.id);
    const findPlaylist = await finder.findPlaylist(
      findTagId.map((list) => list.dataValues.playlistId)
    );
    const song = await finder.findSong(
      findPlaylist.map((list) => list.dataValues.id)
    );
    //userId 개인이 만든것만 나오게 다른유저가 만든건 안나오게
    if (!findPlaylist || !song) {
      return res.status(400).send({ response: "err" });
    } else {
      return res.status(200).send({
        data: findPlaylist.map((list) => {
          return {
            id: list.dataValues.id,
            tag,
            coverUrl: list.dataValues.coverUrl,
            title: list.dataValues.title,
            description: list.dataValues.description,
            songs: song.filter(
              (item) => item.dataValues.playlistId === list.dataValues.id
            ),
          };
        }),
        response: "ok",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
