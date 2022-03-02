require("dotenv").config();
// const res = require("express/lib/response");
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    await deleteUser(req.headers.authorization);
    res.send({ message: "success delete" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "server error" });
  }
};
