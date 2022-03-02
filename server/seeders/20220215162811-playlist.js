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
  }/quiet.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/jazz.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/modern.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/calm.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/newage.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/party.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/noisy.jpg`,
  `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DOMAIN + process.env.PORT + "/static"
      : process.env.S3_DOMAIN
  }/electronic.jpg`,
];

const quietPlaylist1 = {
  title: playlists[0],
  description: "조용할 때 들으면 좋은 노래입니다",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[0],
};
const jazzPlaylist1 = {
  title: playlists[1],
  description: "편안한 분위기에 어울리는 재즈 노래입니다",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[1],
};
const modernPlaylist1 = {
  title: playlists[2],
  description: "트렌디하고 힙한 노래입니다",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[2],
};
const calmPlaylist1 = {
  title: playlists[3],
  description: "듣기만 해도 마음이 차분해지는 힐링 노래",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[3],
};
const newagePlaylist1 = {
  title: playlists[4],
  description: "세련된 카페에 있는 듯한 착각",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[4],
};
const excitingPlaylist1 = {
  title: playlists[5],
  description: "기분이 좋아지고 신나는 플레이리스트",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[5],
};
const noisyPlaylist1 = {
  title: playlists[6],
  description: "충전이 필요하다면?",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[6],
};
const electronicPlaylist1 = {
  title: playlists[7],
  description: "스타일리쉬한 테크하우스",
  userId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  coverUrl: coverUrls[7],
};
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Playlists", [
      quietPlaylist1,
      jazzPlaylist1,
      modernPlaylist1,
      calmPlaylist1,
      newagePlaylist1,
      excitingPlaylist1,
      noisyPlaylist1,
      electronicPlaylist1,
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Playlists", null, {});
  },
};
