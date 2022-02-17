require("dotenv").config();
const { Song, Palylist, Tag, Palylist_Tag } = require("../../models");

module.exports = {
  findSong: async (playlistId) => {
    const findSong = Song.findOne({ where: { playlistId: playlistId } });
    return findSong;
  },
  findPlaylist: async (playlistId) => {
    const findPlaylist = await Palylist.findOne({
      where: { playlistId: playlistId },
    });
    return findPlaylist;
  },
  findTag: async (tag) => {
    const findTag = await Tag.findOne({ where: { tag: tag } });
    return findTag;
  },
  findTagId: async (tagId) => {
    const findTagId = await Playlist_Tag.findOne({
      where: { tagId: tagId },
    });
    return findTagId;
  },
};
