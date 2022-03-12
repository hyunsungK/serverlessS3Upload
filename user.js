'use strict';

const {
    registerUser,
    createUserInfo,
    getUser,
    deleteUser
} = require('./dynamo');

module.exports.insert = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    console.warn(requestBody);
    const {
        uuid,
        profileNickname,
        profileThumbnailImage,
        favorite=false
    } = requestBody;

    const userInfo = createUserInfo(
        uuid,
        profileNickname,
        profileThumbnailImage,
        favorite)

    registerUser(userInfo)
        .then((res) => {
            const response = {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'User insert',
                    output: res
                }),
            };
            callback(null, response);
        })
        .catch(err => {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Fail to insert user',
                    output: err
                }),
            };
            callback(null, response);
        });
};

module.exports.get = (event, context, callback) => {
    getUser(event.pathParameters.id)
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
                    message: 'Fail to get user',
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
    deleteUser(event.pathParameters.id)
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
                    message: 'Fail to get user',
                    output: err
                }),
            });
        });
};
