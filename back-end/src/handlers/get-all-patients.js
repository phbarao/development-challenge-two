const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET',
  };

  try {
    body = await dynamo.scan({ TableName: 'med-challenge-patients' }).promise();
  } catch (error) {
    statusCode = error.statusCode;
    body = error.message;
  }

  return {
    statusCode,
    headers,
    body,
  };
};
