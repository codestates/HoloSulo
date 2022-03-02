require("dotenv").config();
const finder = require("../modules/finder");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { tag } = req.query;
    const findTag = await finder.findTag(tag);
    const findTagId = await finder.findTagId(findTag.dataValues.id);
    const findPlaylist = await finder.findPlaylist(
      findTagId.map((list) => list.dataValues.playlistId)
    );
    const song = await finder.findSong(
      findPlaylist.map((list) => list.dataValues.id)
    );
    // console.log(token);
    //user token 이 있다면
    if (token === "null") {
      //기존 playlist
      try {
        const defaultPlaylist = findPlaylist.filter(
          (list) => list.dataValues.userId === null
        );
        console.log(defaultPlaylist);
        if (!findPlaylist || !song) {
          return res.status(400).send({ response: "err" });
        } else {
          return res.status(200).send({
            data: defaultPlaylist.map((list) => {
              return {
                id: list.dataValues.id,
                tag,
                coverUrl: list.dataValues.coverUrl,
                title: list.dataValues.title,
                description: list.dataValues.description,
                songs: song.filter(
                  (item) => item.dataValues.playlistId === list.dataValues.id
                ),
                userId: list.dataValues.userId,
              };
            }),
            response: "ok",
          });
        }
      } catch (error) {
        res.status(500).send({ error: error });
      }
    } else {
      try {
        const userId = isAuthorized(token);
        //user playlist
        const userPlaylist = findPlaylist.filter(
          (list) => list.dataValues.userId === userId.id
        );
        //기존 playlist
        const defaultPlaylist = findPlaylist.filter(
          (list) => list.dataValues.userId === null
        );
        // playlist 합본
        // console.log(defaultPlaylist);
        const newPlaylist = [...defaultPlaylist, ...userPlaylist];

        if (!findPlaylist || !song) {
          return res.status(400).send({ response: "err" });
        } else {
          return res.status(200).send({
            data: newPlaylist.map((list) => {
              return {
                id: list.dataValues.id,
                tag,
                coverUrl: list.dataValues.coverUrl,
                title: list.dataValues.title,
                description: list.dataValues.description,
                songs: song.filter(
                  (item) => item.dataValues.playlistId === list.dataValues.id
                ),
                userId: list.dataValues.userId,
              };
            }),
            response: "ok",
          });
        }
      } catch (error) {
        res.status(500).send({ error: error });
      }
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
