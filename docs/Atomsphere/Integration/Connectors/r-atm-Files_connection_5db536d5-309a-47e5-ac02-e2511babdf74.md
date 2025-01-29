
# Files.com - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5db536d5-309a-47e5-ac02-e2511babdf74"/>
</head>


The Files.com connection represents the Files.com user account that will be used to perform the actions on the Files.com platform. The connection will be constrained to the permissions of the Files.com user account and will only be able to access items that the Files.com user account has been given permission to access. If you have multiple Files.com user accounts, use a separate connection for each.

## Connection 

The connection uses a [Files.com API Key](https://www.files.com/docs/features/api-keys) to connect and authenticate with the Files.com user account. Ask your Files.com administrator to provide you with an API Key for the required user account or generate your own API Key within your Files.com user account. The Files.com connection uses a single Files.com API Key.

When creating a new connection, within the Connection tab, select the **Click to Set** button, enter the API Key, and select **Apply**.

Make sure to name the connection clearly, or provide a description, as the API Key does not show any identifying information and will be stored in an encrypted state.

## Troubleshooting

Verify the response document of the Files.com step in your Boomi process.

API Keys that are invalid or revoked will return a response document containing the following error message:

```json
{
  "error": "The API key or Session token provided could not be used to validate this request. Internal Error Code: API1",
  "http-code": 401,
  "instance": "0434fde9-1967-4019-a4db-02ddc2001a1e",
  "title": "Invalid Credentials",
  "type": "not-authenticated/invalid-credentials"
}
```

Update the connector with a valid API Key and re-try the process.

If your API Key does not have permission to access an item on Files.com, the response document will contain the following error:

```json
{
  "error": "Not Found",
  "http-code": 404,
  "instance": "fa8f115b-0ffd-4abd-a37e-dc91a4518c06",
  "title": "Not Found",
  "type": "not-found"
}
```

Make sure that the API Key you are using has permission to access the item on Files.com or update the API Key to a new one that has permission to access the item.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::