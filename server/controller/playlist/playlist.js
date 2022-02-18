require("dotenv").config();
const finder = require("../modules/finder");

module.exports = async (req, res) => {
  try {
    const { tag } = req.query;
    const findTag = await finder.findTag(tag);
    const findTagId = await finder.findTagId(findTag.dataValues.id);
    const findPlaylist = await finder.findPlaylist(
      findTagId.dataValues.playlistID
    );

    const song = await finder.findSong(1);
    console.log(song);

    if (!findPlaylist || !song) {
      return res.status(400).send({ response: "err" });
    } else {
      const payload = {
        id: findPlaylist.dataValues.id,
        coverUrl: findPlaylist.dataValues.coverUrl,
        title: findPlaylist.dataValues.title,
        description: findPlaylist.dataValues.description,
        createdAt: findPlaylist.dataValues.createdAt,
        updatedAt: findPlaylist.dataValues.updatedAt,
      };
      return res.status(200).send({
        data: [
          {
            coverUrl: payload.coverUrl,
            title: payload.title,
            description: payload.description,
            song: song.map((song) => {
              return {
                songUrl: song.dataValues.songUrl,
                songTitle: song.dataValues.songTitle,
              };
            }),
          },
        ],
        response: "ok",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
