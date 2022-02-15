require("dotenv").config();

module.exports = async (req, res) => {
  if (!req.headers.accessToken) {
    return res.status(401).send("err");
  } else return res.status(200).json({ accessToken: null, message: "ok" });
};
