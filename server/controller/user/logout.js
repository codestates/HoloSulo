require("dotenv").config();
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  try {
    const validate = isAuthorized();
    if (!req.body.accessToken)
      return res.status(400).send({ response: "empty body" });
    if (!validate)
      return res.status(401).send({ response: "err", message: "jwt expired" });

    return res.status(200).send({ response: "ok" });
  } catch {
    return res.status(500).send("err");
  }
};
