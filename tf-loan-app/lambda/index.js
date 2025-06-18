const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

// Helper to return consistent CORS responses
const response = (statusCode, body) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,DELETE',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const method = event.requestContext.http.method;
  const path = event.rawPath;
  const pathParams = event.pathParameters;
  const loanID = pathParams?.proxy || '';
  const body = event.body ? JSON.parse(event.body) : null;

  try {
    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return response(200, { message: 'CORS preflight OK' });
    }

    if (method === 'POST') {
      if (!body || !body.borrowerName || !loanID) {
        return response(400, { message: 'Invalid request body or missing loan ID' });
      }

      await db.put({
        TableName: TABLE_NAME,
        Item: {
          loanID,
          borrowerName: body.borrowerName,
        },
      }).promise();

      return response(200, { message: 'Loan added' });
    }

    if (method === 'GET' && loanID === 'all') {
      const result = await db.scan({ TableName: TABLE_NAME }).promise();
      return response(200, result.Items || []);
    }

    if (method === 'GET') {
      const result = await db.get({
        TableName: TABLE_NAME,
        Key: { loanID },
      }).promise();

      if (!result.Item) {
        return response(404, { message: 'Loan not found' });
      }

      return response(200, result.Item);
    }

    if (method === 'DELETE') {
      await db.delete({
        TableName: TABLE_NAME,
        Key: { loanID },
      }).promise();

      return response(200, { message: 'Loan deleted' });
    }

    return response(405, { message: `Unsupported method: ${method}` });
  } catch (err) {
    console.error('Error processing request:', err);
    return response(500, { message: 'Internal server error' });
  }
};
