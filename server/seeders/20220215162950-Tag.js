"use strict";
const tags = [
  "#조용한",
  "#재즈",
  "#모던한",
  "#차분한",
  "#뉴에이지",
  "#신나는",
  "#시끌벅적한",
  "#일렉트로닉",
];
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Tags",
      tags.map((tag) => {
        return {
          tag,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
