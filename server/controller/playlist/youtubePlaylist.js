const { response } = require("express");
const { Playlist, Song } = require("../../models");

module.exports = {
  createPlaylist: async (req, res) => {
    const playlist = req.body;
    const coverFileUrl = req.file.path;
    const songsParser = JSON.parse(playlist.songs);
    if (!playlist) {
      res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      const createPlaylist = Playlist.create({
        coverUrl: coverFileUrl,
        title: playlist.title,
        description: playlist.description,
      });
      const createSong = songsParser.map(async (data) => {
        Song.create({
          songUrl: data.url,
          songTitle: data.title,
        });
      });
      res.status(200).send({
        data: { playlists: createPlaylist, songs: createSong },
        response: "ok",
      });
    } catch (error) {
      console.log("error : ", error);
    }
  },
  updatePlaylist: async (req, res) => {
    const updateBody = req.body;
    const updateFile = req.file.path;
    const updateSongsParser = JSON.parse(updateBody.songs);
    if (!request) {
      res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      const updatePlaylist = await Playlist.update(
        {
          id: updateBody.id,
          coverUrl: updateFile,
          title: updateBody.title,
          description: updateBody.description,
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
            createdAt: song.createdAt,
            updatedAt: song.updatedAt,
          },
          { where: { id: song.id } }
        );
        res.status(200).send({
          data: { playlists: updatePlaylist, songs: updateSong },
          response: "ok",
        });
      });
    } catch (error) {
      res.status(500).send({ response: "err" });
    }
  },
  deletePlaylist: async (req, res) => {
    const playlistId = await Playlist.findOne({
      where: { id: req.body.playliteId },
    });
    if (!playlistId) {
      res.status(400).send({ response: "잘못된 접근입니다." });
    }
    try {
      await Playlist.destroy({ where: { id: playlistId.dataValues.id } });
      await Song.destroy({ where: { playlistId: playlistId.dataValues.id } });
      res.status(200).send({ response: "ok" });
    } catch (error) {
      res.status(500).send("error : ", error);
    }
  },
};
