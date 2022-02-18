"use strict";

let playlistTags = [];

for (let i = 1; i < 9; i++) {
  playlistTags.push({
    playlistId: i,
    tagId: Math.floor(Math.random() * 8) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Playlist_Tags", playlistTags);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Playlist_Tags", null, {});
  },
};
