const { Playlist, Song } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = {
  createPlaylist: async (req, res) => {
    const playlist = req.body;
    const coverFileUrl = req.file.path;
    const songsParser = JSON.parse(playlist.songs);
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);
    if (!playlist) {
      return res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      const createPlaylist = await Playlist.create({
        coverUrl: process.env.DEV_DOMAIN + process.env.PORT + coverFileUrl,
        title: playlist.title,
        description: playlist.description,
        userId: userId.id,
      });
      const createSong = songsParser.map(async (data) => {
        await Song.create({
          songUrl: data.songUrl,
          songTitle: data.songTitle,
          playlistId: createPlaylist.dataValues.id,
        });
      });
      return res.status(200).send({
        data: { playlists: createPlaylist, songs: createSong },
        response: "ok",
      });
    } catch (error) {
      // console.log("error : ", error);
    }
  },
  updatePlaylist: async (req, res) => {
    const updateBody = req.body;
    const updateFile = req.file.path;
    const updateSongsParser = JSON.parse(updateBody.songs);
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);
    if (!updateBody) {
      return res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      const updatePlaylist = await Playlist.update(
        {
          id: updateBody.id,
          coverUrl: updateFile,
          title: updateBody.title,
          description: updateBody.description,
          userId: userId.id,
          createdAt: updateBody.createdAt,
          updatedAt: updateBody.updatedAt,
        },
        { where: { id: updateBody.id } }
      );
      const updateSong = updateSongsParser.map(async (song) => {
        await Song.update(
          {
            id: song.id,
            songUrl: song.url,
            songTitle: song.title,
            playlistId: song.playlistId,
            createdAt: song.createdAt,
            updatedAt: song.updatedAt,
          },
          { where: { id: song.id } }
        );
      });
      return res.status(200).send({
        data: { playlists: updatePlaylist, songs: updateSong },
        response: "ok",
      });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
  deletePlaylist: async (req, res) => {
    console.log(req.body);
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);
    const playlistId = await Playlist.findOne({
      where: { id: req.body.id },
    });

    if (!playlistId || !userId) {
      return res.status(400).send({ response: "잘못된 접근입니다." });
    }
    try {
      await Playlist.destroy({ where: { id: playlistId.dataValues.id } });
      await Song.destroy({ where: { playlistId: playlistId.dataValues.id } });
      return res.status(200).send({ response: "ok" });
    } catch (error) {
      res.status(500).send("error : ", error);
    }
  },
};
