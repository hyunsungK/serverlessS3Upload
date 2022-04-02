'use strict';

const {
    insertAlarm,
    editAlarm,
    getAlarm,
    deleteAlarm,
    queryAlarm,
} = require('./crud/alarmDao');

module.exports.insert = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    insertAlarm(requestBody)
        .then((res) => {
            const response = {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'Alarm insert',
                    output: res
                }),
            };
            callback(null, response);
        })
        .catch(err => {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Fail to insert alarm',
                    output: err
                }),
            };
            callback(null, response);
        });
};

module.exports.get = (event, context, callback) => {
    queryAlarm(event.pathParameters.id)
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
                    message: 'Fail to get alarm',
                    output: err
                }),
            });
        });
};


module.exports.edit = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'edit Alarm',
            input: event,
        }),
    };

    callback(null, response);
};

module.exports.delete = (event, context, callback) => {
    deleteAlarm(event.pathParameters.id)
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
                    message: 'Fail to delete alarm',
                    output: err
                }),
            });
        });
};
