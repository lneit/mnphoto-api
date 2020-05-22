## Manual Deployment

```
serverless deploy
```

## TESTS

### Command line testing of lambda functions

```
serverless invoke local --function create-album --path mocks/album/create.json

serverless invoke local --function get-album --path mocks/album/get.json

serverless invoke local --function update-album --path mocks/album/update.json

serverless invoke local --function list-album --path mocks/album/list.json

serverless invoke local --function delete-album --path mocks/album/delete.json
```

### CLI Test

- Deploy first

```
npx aws-api-gateway-cli-test \
--username='<USER_NAME>' \
--password='<PASSWORD>' \
--user-pool-id='<USER_POOL_ID>' \
--app-client-id='<APP_CLIENT_ID>' \
--cognito-region='<COGNITO_REGION>' \
--identity-pool-id='<IDENTITY_POOL_ID>' \
--invoke-url='<API_INVOKE_URL>' \
--api-gateway-region='<API_GW_REGION>' \
--path-template='/albums' \
--method='POST' \
--body='{"title":"Promised Land","description":"Promised Land"}'
```
