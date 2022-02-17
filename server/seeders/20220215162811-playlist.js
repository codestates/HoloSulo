"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Playlists", [
      {
        coverUrl: "ddd/ddd.com",
        title: "happy",
        description: "해피해",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Playlists", null, {});
  },
};
