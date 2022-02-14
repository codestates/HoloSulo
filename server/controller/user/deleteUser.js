require("dotenv").config();
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (res, req) => {
  if (req.headers.authorized) {
    return res.status(401).send("Unauthorized");
  }
  return deleteUser(req.headers.authorized);
};
