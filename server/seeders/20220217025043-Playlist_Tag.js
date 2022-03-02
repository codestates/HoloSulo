"use strict";

let playlistTags = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  playlistId: i,
  tagId: i,
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Playlist_Tags", playlistTags);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Playlist_Tags", null, {});
  },
};
