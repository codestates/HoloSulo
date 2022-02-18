require("dotenv").config();
const { isAuthorized } = require("../modules/tokenFunction");

module.exports = async (req, res) => {
  try {
    const validate = await isAuthorized.isAuthorized(req.headers.Authorization);
    if (!validate) return res.status(401).send({ response: "err" });
    return res.status(200).send({ response: "ok" });
  } catch {
    return res.status(500).send("err");
  }
};
