"use strict";
const playlistIds = [1, 2, 3, 4, 5, 6, 7, 8];
const songs = [
  {
    videoId: "kpEI2p_XK3o",
    songTitle: "Want To",
  },
  {
    videoId: "No3OajzT1G8",
    songTitle: "Lost at Sea",
  },
  {
    videoId: "3uUuPz_zP2o",
    songTitle: "days like this",
  },
  {
    videoId: "GEAy7eXb2lo",
    songTitle: "Be Like That",
  },
];
const data = [];
for (let i = 0; i < playlistIds.length * 3; i++) {
  let random = Math.floor(Math.random() * songs.length);
  data.push({
    songUrl: songs[random].videoId,
    songTitle: songs[random].songTitle,
    playlistId: (i % playlistIds.length) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Songs", data);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Songs", null, {});
  },
};
