import * as uuid from "uuid";
import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.albumsTableName,
    // 'Item' contains the attributes of the item to be created
    // - 'category': album category, partitioning key
    // - 'albumId': a unique uuid
    // - 'title': parsed from request body
    // - 'description': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      category: process.env.category,
      albumId: uuid.v1(),
      title: data.title,
      description: data.description,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});