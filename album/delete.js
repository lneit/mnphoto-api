import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.albumsTableName,
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'albumId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      albumId: event.pathParameters.id
    }
  };

  await dynamoDb.delete(params);

  return { status: true };
});