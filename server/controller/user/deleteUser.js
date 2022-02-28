require("dotenv").config();
const res = require("express/lib/response");
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  if (!req.headers.Authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  return await deleteUser(req.headers.Authorization);
};
try {
  res.send({ message: "success delete" });
} catch (err) {
  console.log(err);
}
