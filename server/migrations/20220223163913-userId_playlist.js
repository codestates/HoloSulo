"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Playlists", "userId", {
      type: Sequelize.INTEGER,
    });
    // await queryInterface.addConstraint("Playlists", {
    //   fields: ["userId"],
    //   type: "foreign key",
    //   references: {
    //     table: "Users",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Playlists", "userId");
  },
};
