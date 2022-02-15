require("dotenv").config();
const createUser = require("../modules/createUser");

module.exports = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    await createUser.createUser({
      email: email,
      password: password,
      username: username,
    });
    return res.status(201).send({ response: "ok" });
  } catch {
    return res.status(400).send({ response: "err" });
  }
};
