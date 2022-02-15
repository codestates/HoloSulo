"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Playlist_Tags", "tagId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Playlist_Tags", "playlistId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Playlist_Tags", {
      fields: ["tagId"],
      type: "foreign key",
      references: {
        table: "Tags",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Playlist_Tags", {
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
    await queryInterface.removeColumn("Playlist_Tags", "tagId");
    await queryInterface.removeColumn("Playlist_Tags", "playlistId");
  },
};
