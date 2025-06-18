const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const method = event.requestContext.http.method;
  const id = event.pathParameters?.proxy;
  const body = event.body ? JSON.parse(event.body) : null;

  if (method === "POST") {
    await db.put({ TableName: TABLE_NAME, Item: body }).promise();
    return { statusCode: 200, body: JSON.stringify({ message: "Loan added." }) };
  }

  if (method === "GET") {
    const result = await db.get({ TableName: TABLE_NAME, Key: { loanID: id } }).promise();
    return { statusCode: 200, body: JSON.stringify(result.Item) };
  }

  if (method === "DELETE") {
    await db.delete({ TableName: TABLE_NAME, Key: { loanID: id } }).promise();
    return { statusCode: 200, body: JSON.stringify({ message: "Loan deleted." }) };
  }

  return { statusCode: 400, body: "Unsupported operation" };
};
