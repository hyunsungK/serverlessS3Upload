'use strict';

const {
    registerFriend,
    createFriendInfo,
    getFriend,
    deleteFriend
} = require('./crud/friendDao');

module.exports.insert = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    console.warn(requestBody);
    const {
        uuid,
        profileNickname,
        profileThumbnailImage,
        favorite=false
    } = requestBody;

    const userInfo = createFriendInfo(
        uuid,
        profileNickname,
        profileThumbnailImage,
        favorite)

    registerFriend(userInfo)
        .then((res) => {
            const response = {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'Insert friend',
                    output: res
                }),
            };
            callback(null, response);
        })
        .catch(err => {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Fail to insert friend',
                    output: err
                }),
            };
            callback(null, response);
        });
};

module.exports.get = (event, context, callback) => {
    getFriend(event.pathParameters.id)
        .then((res) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'OK',
                    output: res
                }),
            });
        })
        .catch(err => {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Fail to get friend',
                    output: err
                }),
            });
        });
};


module.exports.edit = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'User Edit',
            input: event,
        }),
    };

    callback(null, response);
};

module.exports.delete = (event, context, callback) => {
    deleteFriend(event.pathParameters.id)
        .then((res) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'OK',
                    output: res
                }),
            });
        })
        .catch(err => {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Fail to get friend',
                    output: err
                }),
            });
        });
};
