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
--username='luda-dev@mnphoto.com' \
--password='Passw0rd!' \
--user-pool-id='us-west-2_JdmZBtBRE' \
--app-client-id='4ih8qhev705kqqm27c95r69hou' \
--cognito-region='us-west-2' \
--identity-pool-id='us-west-2:558b9429-1bf6-4648-896e-087a7c66ffe1' \
--invoke-url='https://4ourrdry69.execute-api.us-west-2.amazonaws.com/prod' \
--api-gateway-region='us-west-2' \
--path-template='/albums' \
--method='POST' \
--body='{"title":"Promised Land","description":"Promised Land"}'
```
