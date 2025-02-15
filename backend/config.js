// config.js
require("dotenv").config();

const port = process.env.PORT || 8081;

const database = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const jwtToken = {
  tokenSecret: process.env.ACCESS_TOKEN_SECRET,
  tokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
  refTokenSecret: process.env.REF_TOKEN_SECRET,
  refTokenExpiry: process.env.REF_TOKEN_EXPIRY,
};

const awsCredentials = {
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION,
  bucketName:process.env.AWS_BUCKET_NAME,
  acl:process.env.AWS_ACL,
}

module.exports = { port, database, jwtToken,awsCredentials };
