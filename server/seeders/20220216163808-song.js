"use strict";
const playlistIds = [1, 2, 3, 4, 5, 6, 7, 8];
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Songs",
      playlistIds.map((id) => {
        return {
          songUrl: `${process.env.S3_DOMAIN}/naked.mp3`,
          songTitle: "Naked",
          playlistId: id,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Songs", null, {});
  },
};
