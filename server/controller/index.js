module.exports = {
  login: require("./user/login.js"),
  userName: require("./user/username.js"),
  deleteUser: require("./user/deleteUser.js"),
  signup: require("./user/signup.js"),
  email: require("./user/email.js"),
  order: require("./order/order"),
  playlist: require("./playlist/playlist"),
  youtubePlaylist: require("./playlist/youtubePlaylist"),
  userinfo: require("./user/userInfo"),
  passwordchange: require("./user/passwordChange"),
  namechange: require("./user/nameChange"),
  naverLogin: require("./user/naverLogin"),
  kakaoCallback: require("./user/kakaoCallback"),
};
