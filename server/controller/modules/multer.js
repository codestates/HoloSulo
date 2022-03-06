const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/../../config/awsconfig.json");
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "holosulo-assets",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cd) {
      cd(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});
module.exports = upload;
