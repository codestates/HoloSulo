"use strict";
const playlistIds = [1, 2, 3, 4, 5, 6, 7, 8];

const quietSong1 = {
  songUrl: "https://www.youtube.com/watch?v=d5p6TceFInU",
  songTitle: "Psycho, Pt. 2",
  playlistId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const quietSong2 = {
  songUrl: "https://www.youtube.com/watch?v=ISMYAihJxzs",
  songTitle: "rosemary",
  playlistId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const quietSong3 = {
  songUrl: "https://www.youtube.com/watch?v=iL4LojxXSz8",
  songTitle: "Patchwork",
  playlistId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const jazzSong1 = {
  songUrl: "https://www.youtube.com/watch?v=Tua5OtxUBRQ",
  songTitle: "Where Are You?",
  playlistId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const jazzSong2 = {
  songUrl: "https://www.youtube.com/watch?v=qbd0oDkSqVQ",
  songTitle: "Alone And I",
  playlistId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const jazzSong3 = {
  songUrl: "https://www.youtube.com/watch?v=FX5HHLcEyXQ",
  songTitle: "I Hear A Rhapsody",
  playlistId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const modernSong1 = {
  songUrl: "https://www.youtube.com/watch?v=W1FmONDwELM",
  songTitle: "Another Life",
  playlistId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const modernSong2 = {
  songUrl: "https://www.youtube.com/watch?v=syXGn3CZbts",
  songTitle: "Susie Save Your Love",
  playlistId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const calmSong1 = {
  songUrl: "https://www.youtube.com/watch?v=VCd_Bnh3bGE",
  songTitle: "Good People",
  playlistId: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const calmSong2 = {
  songUrl: "https://www.youtube.com/watch?v=zKPgTyrXshQ",
  songTitle: "Rendezvous",
  playlistId: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const calmSong3 = {
  songUrl: "https://www.youtube.com/watch?v=lQPK9ZCZDZc",
  songTitle: "Starbucks",
  playlistId: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const newageSong1 = {
  songUrl: "https://www.youtube.com/watch?v=cg-UNCivrkk",
  songTitle: "More Than Friends",
  playlistId: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const newageSong2 = {
  songUrl: "https://www.youtube.com/watch?v=shzyeJYcqfo",
  songTitle: "Cool Being You",
  playlistId: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const newageSong3 = {
  songUrl: "https://www.youtube.com/watch?v=Z5YbF8CN4u8",
  songTitle: "Nobody",
  playlistId: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const excitingSong1 = {
  songUrl: "https://www.youtube.com/watch?v=cHIGQ3mQT1I",
  songTitle: "TV In The Morning",
  playlistId: 6,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const excitingSong2 = {
  songUrl: "https://www.youtube.com/watch?v=BRxtTJZxqgA",
  songTitle: "Worship",
  playlistId: 6,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const excitingSong3 = {
  songUrl: "https://www.youtube.com/watch?v=22dNClv6zes",
  songTitle: "Wet Clothes",
  playlistId: 6,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const noisySong1 = {
  songUrl: "https://www.youtube.com/watch?v=g5WaJyEPP5g",
  songTitle: "Checklist",
  playlistId: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const noisySong2 = {
  songUrl: "https://www.youtube.com/watch?v=k7jeYJA9bgY",
  songTitle: "Nice To Meet Ya",
  playlistId: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const noisySong3 = {
  songUrl: "https://www.youtube.com/watch?v=wd9_QCH8Eq4",
  songTitle: "Don't Start Now",
  playlistId: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const electronicSong1 = {
  songUrl: "https://www.youtube.com/watch?v=3ETvye7GgHY",
  songTitle: "The Aztecs",
  playlistId: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const electronicSong2 = {
  songUrl: "https://www.youtube.com/watch?v=88vLSbgQBs4",
  songTitle: "ALL GOOD",
  playlistId: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const electronicSong3 = {
  songUrl: "https://www.youtube.com/watch?v=uz5zjBexK6E",
  songTitle: "So Serious",
  playlistId: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const data = [
  quietSong1,
  quietSong2,
  quietSong3,
  jazzSong1,
  jazzSong2,
  jazzSong3,
  modernSong1,
  modernSong2,
  calmSong1,
  calmSong2,
  calmSong3,
  newageSong1,
  newageSong2,
  newageSong3,
  excitingSong1,
  excitingSong2,
  excitingSong3,
  noisySong1,
  noisySong2,
  noisySong3,
  electronicSong1,
  electronicSong2,
  electronicSong3,
];
// for (let i = 0; i < playlistIds.length * 3; i++) {
//   let random = Math.floor(Math.random() * songs.length);
//   data.push({
//     songUrl: songs[random].videoId,
//     songTitle: songs[random].songTitle,
//     playlistId: (i % playlistIds.length) + 1,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
// }

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Songs", data);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Songs", null, {});
  },
};
