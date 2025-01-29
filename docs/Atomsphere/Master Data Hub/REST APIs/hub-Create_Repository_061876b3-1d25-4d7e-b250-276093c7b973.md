# Create Repository 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-061876b3-1d25-4d7e-b250-276093c7b973"/>
</head>


The Create Repository operation requests the creation of a repository on a specified Hub Cloud under an account accessible to the authenticated user. You can obtain the creation status with a Get Repository Creation Status request.

To perform this operation, send an HTTP POST request with an empty request body to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/clouds/<cloudID>/repositories/<repositoryName>/create`

:::note

This operation requires the authenticating user to have the MDM - Repository Management privilege in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**
ID of the account

**cloudID**  
ID of the Hub Cloud on which to create the repository. You obtain this ID from the response to a Get Hub Clouds request.

**repositoryName**  
Name of the repository to create.

## Responses 
-   200 \(OK\) Received the repository creation request. The response body contains the system ID assigned to the repository upon its successful creation. You can use this ID in a Get Repository Creation Status request. Sample response body:

    ```
    23456789-abcd-ef01-2345-6789abcdef01
    ```

- 400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Repository Management** privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

-   400 \(Bad Request\) The repository creation request is invalid due to reaching the account's repository limit for the Hub Cloud identified by cloudID. Sample response body:

    ```xml
    <error>
        <message>Cannot attach to the cloud as it would exceed the attachment quota for this account</message>
    </error>
    ```

    :::note
    
    Contact your Boomi account representative if you are interested in licensing additional repositories for the specified Hub Cloud.

    :::

- 403 (Forbidden) Authentication failure. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

- 403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:
  
    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```