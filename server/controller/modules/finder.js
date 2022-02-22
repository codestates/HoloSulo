require("dotenv").config();
const { Song, Playlist, Tag, Playlist_Tag, User } = require("../../models");

module.exports = {
  findSong: async (playlistId) => {
    if (playlistId === null) {
      return "ERR";
    }
    const findSong = await Song.findAll({
      where: { playlistId: playlistId },
    });
    return findSong;
  },
  findPlaylist: async (playlistId) => {
    const findPlaylist = await Playlist.findAll({
      where: { id: playlistId },
    });
    return findPlaylist;
  },
  findTag: async (tag) => {
    const findTag = await Tag.findOne({ where: { tag: tag } });
    return findTag;
  },
  findTagId: async (tagId) => {
    const findTagId = await Playlist_Tag.findAll({
      where: { tagId: tagId },
    });
    return findTagId;
  },
  findUserByEmail: async (email) => {
    const findUserByEmail = await User.findOne({
      where: { email: email },
    });
    return findUserByEmail;
  },
};
