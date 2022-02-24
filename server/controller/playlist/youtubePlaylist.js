const { Playlist, Tag, Song } = require("../../models");

module.exports = {
  createPlaylist: async (req, res) => {
    const playlist = req.body;
    const coverFileUrl = req.file.path;
    const songsParser = JSON.parse(playlist.songs);
    if (!playlist) {
      res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      Playlist.create({
        coverUrl: coverFileUrl,
        title: playlist.title,
        description: playlist.description,
      }),
        Tag.create({
          tag: playlist.tag,
        });
      songsParser.map(async (data) => {
        Song.create({
          songUrl: data.url,
          songTitle: data.title,
        });
      });
    } catch (error) {
      console.log("error : ", error);
    }
  },
  updatePlaylist: async (req, res) => {},
  deletePlaylist: async (req, res) => {},
};
