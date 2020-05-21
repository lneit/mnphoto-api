import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.albumsTableName,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'category': album category, partitioning key
    // 'ExpressionAttributeValues' defines the value in the condition
    KeyConditionExpression: "category = :category",
    ExpressionAttributeValues: {
      ":category": process.env.category
    }
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});