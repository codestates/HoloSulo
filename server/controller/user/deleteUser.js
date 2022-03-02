require("dotenv").config();
// const res = require("express/lib/response");
const { deleteUser } = require("../modules/deleteUsers");

module.exports = async (req, res) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized" });
  }
<<<<<<< HEAD
  await deleteUser(req.headers.Authorization);
  return res.send({ message: "success delete" });
};
try {
} catch (err) {
  console.log(err);
}
=======
  try {
    await deleteUser(req.headers.authorization);
    res.send({ message: "success delete" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "server error" });
  }
};
>>>>>>> c52cc7c6c083400a63959de2d2da7997dd48e561
