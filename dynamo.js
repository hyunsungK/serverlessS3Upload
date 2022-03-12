const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.registerUser = (userInfo) => {
    console.log('Register userInfo');

    const newUserInfo = {
        type: "profile",
        ...userInfo
    };
    console.log(newUserInfo);
    const userItem = {
        TableName: "aulab-voice-user-table",
        Item: newUserInfo,
    };
    return dynamoDb.put(userItem).promise()
        .then(res => newUserInfo);
};

module.exports.createUserInfo = (
    uuid,
    profileNickname,
    profileThumbnailImage,
    favorite=false) => {
    const timestamp = new Date().getTime();
    return {
        uuid,
        profileNickname,
        profileThumbnailImage,
        favorite,
        createdAt: timestamp,
        updatedAt: timestamp,
    };
};
