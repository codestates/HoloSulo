"use strict";
const playlistIds = [1, 2, 3, 4, 5, 6, 7, 8];
const songs = [
  { songTitle: "Naked", fileName: "naked" },
  { songTitle: "To Me", fileName: "toMe" },
  { songTitle: "Lately", fileName: "lately" },
];
const data = [];
for (let i = 0; i < playlistIds.length * 3; i++) {
  let random = Math.floor(Math.random() * songs.length);
  data.push({
    songUrl: `${
      process.env.NODE_ENV === "development"
        ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
        : process.env.S3_DOMAIN
    }/${songs[random].fileName}.mp3`,
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
