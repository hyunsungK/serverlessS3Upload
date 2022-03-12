'use strict';

var AWS = require('aws-sdk');
var queryString = require('query-string');

module.exports.requestDownloadURL = async (event, context, callback) => {

  // Create new S3 instance to handle our request for a new upload URL.
  var s3 = new AWS.S3();

  // Parse out the parameters of the file the client would like to upload.
  var params = event.queryStringParameters;

  console.log("################");
  console.log(params);
  // Assemble a dictionary of parameters to hand to S3: the S3 bucket name, the file name, the file type, and permissions.  Other paramters like expiration can be specified here.  See the documentation for this method for more details.
  var s3Params = {
    Bucket: 'aulab-voice-bucket',
    Key:  params.name
    // Key: 'hello_world.mp3'
  };
  try{
    // Ask S3 for a temporary URL that the client can use.
    var uploadURL = await s3.getSignedUrlPromise('getObject', s3Params);
  }catch(e){
    console.log(e);
    callback(e);
  }

  // Return success message to the client, with the upload URL in the payload.
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ uploadURL: uploadURL }),
  })
}
