require("dotenv").config();
// const res = require("express/lib/response");
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  if (!req.headers.Authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    await deleteUser(req.headers.Authorization);
    res.status(200).json({ message: "success delete" });
  } catch (err) {
    console.log(err);
  }
};
