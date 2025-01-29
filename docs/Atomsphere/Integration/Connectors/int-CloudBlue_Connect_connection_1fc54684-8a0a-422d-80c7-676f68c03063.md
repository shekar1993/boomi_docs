# CloudBlue Connect - Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1fc54684-8a0a-422d-80c7-676f68c03063"/>
</head>


The CloudBlue Connect - Partner connection represents and contains all of the information that is needed to connect your account to the .

If you have multiple Connect accounts, use a separate connection for each and configure the token accordingly. You can pair a single connection with different CloudBlue Connect operations to perform a unique action against a CloudBlue Connect account.

## Connection tab

The CloudBlue Connect connection uses access keys, which consist of an endpoint and a secret token key. Create these tokens using the Integrations section in the CloudBlue Connect portal. When you create the token, assign the proper permissions for that integration will work. Once you’ve created the token, configure the connection in the using the endpoint and token.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.


:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::

## Test Connection troubleshooting

To ensure that Test Connection and browsing are successful, verify that you have proper permissions. For more information about the permissions necessary for object operations, see the [linked resource](https://connect.cloudblue.com/community/developers/api/).


