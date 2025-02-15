// s3FolderCreator.js
const config = require("./../config");
const AWS = require('aws-sdk');
const fs = require('fs');

// Set up AWS credentials and S3 configuration
AWS.config.update({
  accessKeyId: config.awsCredentials.accessKeyId,
  secretAccessKey: config.awsCredentials.secretAccessKey,
  region: config.awsCredentials.region // e.g., 'us-east-1'
});

const s3 = new AWS.S3();

// Define the function to create an S3 folder
function createS3Folder(filePath, fileData, callback) {
  // Upload the file content to S3
  // s3.putObject({
    s3.upload({
    Bucket: config.awsCredentials.bucketName,
    Key: filePath,
    Body: fileData
  }, (err, data) => {
    if (err) {
      console.error("Error uploading file to S3:", err);
      callback(err);
    } else {
      // console.log("File uploaded successfully to S3:", filePath);
      // callback(null);
      callback(null, data.Location);
    }
  });
}

module.exports = createS3Folder;
