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

module.exports.getUser = (userId) => {
    console.log('getUser userInfo');
    const params = {
        TableName: "aulab-voice-user-table",
        Key: {
            uuid: userId,
            type: "profile"
        }
    };
    return dynamoDb.get(params).promise()
        .then(result => result);
}

module.exports.deleteUser = (userId) => {
    console.log('deleteUser userInfo');
    const params = {
        TableName: "aulab-voice-user-table",
        Key: {
            uuid: userId,
            type: "profile"
        }
    };
    return dynamoDb.delete(params).promise()
        .then(result => result);
}

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
