const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  let body;
  let statusCode = 200;

  try {
    switch (event.routeKey) {
      case 'PUT /patients':
        let requestJSON = JSON.parse(event.body);

        await dynamo
          .put({
            TableName: 'med-challenge-patients',
            Item: {
              id: requestJSON.id,
              price: requestJSON.price,
              name: requestJSON.name,
            },
          })
          .promise();
        body = `Put item ${requestJSON.id}`;
        break;

      case 'GET /patients':
        body = await dynamo
          .scan({ TableName: 'med-challenge-patients' })
          .promise();
        break;

      case 'GET /patients/{id}':
        body = await dynamo
          .get({
            TableName: 'med-challenge-patients',
            Key: {
              id: event.pathParameters.id,
            },
          })
          .promise();
        break;

      case 'DELETE /patients/{id}':
        await dynamo
          .delete({
            TableName: 'med-challenge-patients',
            Key: {
              id: event.pathParameters.id,
            },
          })
          .promise();
        body = `Successful deletion.`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (error) {
    statusCode = 400;
    body = error.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
