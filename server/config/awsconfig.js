require("dotenv").config();
module.exports = {
  accessKeyId: `${S3_ACCESSKEYID}`,
  secretAccessKey: `${S3_SECRETACCESSKEY}`,
  region: `${S3_REGION}`,
};
