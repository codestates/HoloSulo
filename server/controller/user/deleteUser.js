require("dotenv").config();
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  if (!req.headers.Authorization) {
    return res.status(401).send("Unauthorized");
  }
  return deleteUser(req.headers.Authorization);
};
