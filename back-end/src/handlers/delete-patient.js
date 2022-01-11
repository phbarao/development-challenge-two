const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET',
  };

  let body;
  let statusCode = 200;

  try {
    await dynamo
      .delete({
        TableName: 'med-challenge-patients',
        Key: {
          id: event.pathParameters.id,
        },
      })
      .promise();
    body = 'Success';
  } catch (error) {
    statusCode = error.statusCode;
    body = error.message;
  }

  return {
    statusCode,
    body,
    headers,
  };
};
