"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Songs", [
      {
        songUrl: "ddd/ddd.com",
        songTitle: "happyhappy",
        playlistId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
