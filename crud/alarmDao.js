const AWS = require('aws-sdk');
const UUID = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const AlarmTableName = "aulab-voice-alarm-table";

module.exports.insertAlarm = (alarmInfo) => {
    console.log('insertAlarm userInfo');

    const newAlarmInfo = {
        ...alarmInfo
    };
    const alrmItem = {
        TableName: AlarmTableName,
        Item: alarmInfo,
    };
    return dynamoDb.put(alrmItem).promise()
        .then(res => newAlarmInfo);
};

module.exports.getAlarm = (received_id) => {
    console.log('getAlarm');
    const params = {
        TableName: AlarmTableName,
        Key: {
            received_id
        }
    };
    return dynamoDb.get(params).promise()
        .then(result => result);
}

module.exports.queryAlarm = (received_id) => {
    console.log('queryAlarm');
    const params = {
        TableName: AlarmTableName,
        Key: {
            received_id
        }
    };
    return dynamoDb.query(params).promise()
        .then(result => result);
}


module.exports.deleteAlarm = (received_id) => {
    console.log('deleteAlarmdeleteAlarm');
    const params = {
        TableName: AlarmTableName,
        Key: {
            received_id
        }
    };
    return dynamoDb.delete(params).promise()
        .then(result => result);
}

module.exports.editAlarm = (
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
