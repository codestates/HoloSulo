"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Orders", {
      fields: ["userId"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "userId");
  },
};
