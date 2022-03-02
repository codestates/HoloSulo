const { compareSync } = require("bcrypt");
const { Playlist, Song, Playlist_Tag, Tag } = require("../../models");
const { isAuthorized } = require("../modules/tokenFunction");
module.exports = {
  createPlaylist: async (req, res) => {
    const playlist = req.body;
    const coverFileUrl = req.file.path;
    const songsParser = JSON.parse(playlist.songs);
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);
    const tagId = await Tag.findOne({ where: { tag: playlist.tag } });
    if (!playlist) {
      return res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      const createPlaylist = await Playlist.create({
        coverUrl:
          process.env.DEV_DOMAIN + process.env.PORT + "/" + coverFileUrl,
        title: playlist.title,
        description: playlist.description,
        userId: userId.id,
      });
      const createSong = [];
      for await (const data of songsParser) {
        createSong.push(
          await Song.create({
            songUrl: data.songUrl,
            songTitle: data.songTitle,
            playlistId: createPlaylist.dataValues.id,
          })
        );
      }
      // const createSong = songsParser.map(async (data) => {
      //   await Song.create({
      //     songUrl: data.songUrl,
      //     songTitle: data.songTitle,
      //     playlistId: createPlaylist.dataValues.id,
      //   });
      // });
      const createJoinTable = await Playlist_Tag.create({
        tagId: tagId.dataValues.id,
        playlistId: createPlaylist.dataValues.id,
      });
      return res.status(200).send({
        data: {
          playlists: createPlaylist,
          songs: createSong,
          Playlist_Tag: createJoinTable,
        },
        response: "ok",
      });
    } catch (error) {
      // console.log("error : ", error);
    }
  },
  updatePlaylist: async (req, res) => {
    const updateBody = req.body;
    const updateFile = req.file && req.file.path;
    const updateSongsParser = JSON.parse(updateBody.songs);
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);

    const OriginalSong = await Song.findAll({
      where: { playlistId: updateBody.id },
    });
    if (!updateBody) {
      return res.status(400).send({ response: "잘못된 요청입니다" });
    }
    try {
      if (
        OriginalSong.length === updateBody.length ||
        OriginalSong.length > updateBody.length
      ) {
        //새로 추가된 Song이 없을 시
        await Playlist.update(
          {
            coverUrl:
              updateFile &&
              process.env.DEV_DOMAIN + process.env.PORT + "/" + updateFile,
            title: updateBody.title,
            description: updateBody.description,
            userId: userId.id,
            createdAt: updateBody.createdAt,
            updatedAt: updateBody.updatedAt,
          },
          { where: { id: updateBody.id } }
        );
        const updatePlaylist = await Playlist.findOne({
          where: { id: updateBody.id },
        });
        const updateSong = updateSongsParser.map(async (song) => {
          await Song.update(
            {
              id: song.id,
              songUrl: song.songUrl,
              songTitle: song.songTitle,
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
      } else {
        //새로 추가된 Song이 있을 시
        await Playlist.update(
          {
            coverUrl:
              updateFile &&
              process.env.DEV_DOMAIN + process.env.PORT + "/" + updateFile,
            title: updateBody.title,
            description: updateBody.description,
            userId: userId.id,
            createdAt: updateBody.createdAt,
            updatedAt: updateBody.updatedAt,
          },
          { where: { id: updateBody.id } }
        );
        const updatePlaylist = await Playlist.findOne({
          where: { id: updateBody.id },
        });
        //song Separation
        const copySong = updateSongsParser.slice(0, OriginalSong.length);
        const addSong = updateSongsParser.slice(OriginalSong.length);
        // original Song update
        for await (const song of copySong) {
          await Song.update(
            {
              id: song.id,
              songUrl: song.songUrl,
              songTitle: song.songTitle,
              playlistId: updateBody.id,
              createdAt: song.createdAt,
              updatedAt: song.updatedAt,
            },
            { where: { id: song.id } }
          );
        }
        // const originalPlaylistSong = copySong.map(async (song) => {
        //   await Song.update(
        //     {
        //       id: song.id,
        //       songUrl: song.songUrl,
        //       songTitle: song.songTitle,
        //       playlistId: updateBody.id,
        //       createdAt: song.createdAt,
        //       updatedAt: song.updatedAt,
        //     },
        //     { where: { id: song.id } }
        //   );
        // });
        // console.log(originalPlaylistSong);
        // new song update

        for await (const song of addSong) {
          await Song.create({
            songUrl: song.songUrl,
            songTitle: song.songTitle,
            playlistId: updateBody.id,
          });
        }
        // const addUpdateSong = addSong.map(async (song) => {
        // await Song.create({
        //   songUrl: song.songUrl,
        //   songTitle: song.songTitle,
        //   playlistId: updateBody.id,
        // });
        // });
        const songs = await Song.findAll({
          where: { playlistId: updateBody.id },
        });

        return res.status(200).send({
          data: {
            playlists: updatePlaylist,
            songs,
          },
          response: "ok",
        });
      }
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
  deletePlaylist: async (req, res) => {
    const authorization = req.headers.authorization;
    const userId = isAuthorized(authorization);
    const playlistId = await Playlist.findOne({
      where: { id: req.body.playlistId },
    });

    if (!playlistId || !userId) {
      return res.status(400).send({ response: "잘못된 접근입니다." });
    }
    try {
      await Playlist.destroy({ where: { id: playlistId.dataValues.id } });
      await Song.destroy({ where: { playlistId: playlistId.dataValues.id } });
      await Playlist_Tag.destroy({
        where: { playlistId: playlistId.dataValues.id },
      });
      return res.status(200).send({ response: "ok" });
    } catch (error) {
      res.status(500).send("error : ", error);
    }
  },
};
