const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: process.env.S3_SECRET_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY,
});

const s3 = new aws.s3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "amazon_web_clone_bucket",
    acl: "public-read",
    metadata: (_, file, cb) => {
      cb(null, { fieldName: file.fieldName });
    },
    key: (_, _, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
