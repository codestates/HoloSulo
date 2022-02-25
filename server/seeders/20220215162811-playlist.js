"use strict";
const playlists = [
  "조용한 노래",
  "재즈 노래",
  "모던한 노래",
  "차분한 노래",
  "뉴에이지 노래",
  "신나는 노래",
  "시끌벅적한 노래",
  "일렉트로닉 노래",
];
const description = "듣고만 있어도 행복한 노래들과 더더욱 행복하세요 :)";
const coverUrls = [
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/calm.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/party.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/quiet.jpg`,
];
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Playlists",
      playlists.map((playlist) => {
        return {
          coverUrl: coverUrls[Math.floor(Math.random() * coverUrls.length)],
          title: playlist,
          description,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      })
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Playlists", null, {});
  },
};
