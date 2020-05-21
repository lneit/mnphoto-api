import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.albumsTableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'category': album category, partitioning key
    // - 'albumId': path parameter
    Key: {
      category: process.env.category,
      albumId: event.pathParameters.id
    }
  };

  const result = await dynamoDb.get(params);
  if ( ! result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;
});
