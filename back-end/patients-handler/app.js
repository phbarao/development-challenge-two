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
              name: requestJSON.name,
              birthDate: requestJSON.birthDate,
              email: requestJSON.email,
              address: {
                street: requestJSON.address.street,
                number: requestJSON.address.number,
                zipCode: requestJSON.address.zipCode,
                city: requestJSON.address.city,
                state: requestJSON.address.state,
              },
              whatsapp: requestJSON.address.whatsapp,
            },
          })
          .promise();
        body = `Success!`;
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
