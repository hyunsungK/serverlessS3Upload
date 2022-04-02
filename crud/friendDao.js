const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const friendTable = "aulab-voice-friend-table"

module.exports.registerFriend= (userInfo) => {
    console.log('Register userInfo');

    const newUserInfo = {
        type: "friend",
        ...userInfo
    };
    console.log(newUserInfo);
    const userItem = {
        TableName: friendTable,
        Item: newUserInfo,
    };
    return dynamoDb.put(userItem).promise()
        .then(res => newUserInfo);
};

module.exports.getFriend = (userId) => {
    console.log('getUser userInfo');
    const params = {
        TableName: friendTable,
        Key: {
            uuid: userId,
            type: "friend"
        }
    };
    return dynamoDb.get(params).promise()
        .then(result => result);
}

module.exports.deleteFriend = (userId) => {
    console.log('deleteUser userInfo');
    const params = {
        TableName: friendTable,
        Key: {
            uuid: userId,
            type: "friend"
        }
    };
    return dynamoDb.delete(params).promise()
        .then(result => result);
}

module.exports.createFriendInfo = (
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
