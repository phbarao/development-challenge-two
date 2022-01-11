const AWS = require('aws-sdk');
const { randomUUID } = require('crypto');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;

  const patientInfo = {
    id: randomUUID(),
    name: event.name,
    birthDate: event.birthDate,
    email: event.email,
    phone: event.phone,
    address: {
      street: event.address.street,
      number: event.address.number,
      city: event.address.city,
      state: event.address.state,
    },
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    if (!patientInfo.name || !patientInfo.birthDate) {
      statusCode = 400;

      throw new Error('Name and birth date are required fields.');
    }

    if (typeof patientInfo.name !== 'string') {
      statusCode = 400;

      throw new Error('Name must be a string value');
    }

    await dynamo
      .put({
        TableName: 'med-challenge-patients',
        Item: patientInfo,
      })
      .promise();

    body = patientInfo;
  } catch (error) {
    statusCode = statusCode;
    body = error.message;
  }

  return {
    statusCode,
    body,
    headers,
  };
};
