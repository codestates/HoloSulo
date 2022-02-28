"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Songs", {
      fields: ["playlistId"],
      type: "foreign key",
      references: {
        table: "Playlists",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Songs", "playlistId");
  },
};
