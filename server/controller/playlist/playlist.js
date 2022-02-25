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
        // song: song.map((song) => {
        //   return {
        //     songUrl: song.dataValues.songUrl,
        //     songTitle: song.dataValues.songTitle,
        //   };
        // }),
        response: "ok",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
/**
 * 
 * 
 *       const payload = {
        id: findPlaylist.dataValues.id,
        coverUrl: findPlaylist.dataValues.coverUrl,
        title: findPlaylist.dataValues.title,
        description: findPlaylist.dataValues.description,
        createdAt: findPlaylist.dataValues.createdAt,
        updatedAt: findPlaylist.dataValues.updatedAt,
      };
 *            id: payload.id,
            coverUrl: payload.coverUrl,
            title: payload.title,
            description: payload.description
 */
