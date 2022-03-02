require("dotenv").config();
// const res = require("express/lib/response");
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  if (!req.headers.Authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  await deleteUser(req.headers.Authorization);
  return res.send({ message: "success delete" });
};
try {
} catch (err) {
  console.log(err);
}
