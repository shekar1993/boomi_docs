# Get Hub Clouds 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9c9e4211-ad15-413c-999f-047a7db878c4"/>
</head>


The Get Hub Clouds operation retrieves a list of the Hub Clouds that a specified account accessible to the authenticating user is authorized to use.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/clouds`

:::note

This operation requires the authenticating user to have the **MDM - Repository Management** privilege and the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account


## Responses 
-   200 \(OK\) The body of the response is XML. The root `<mdm:Clouds>` element contains an `<mdm:Cloud>` element for each of the Hub Clouds accessible to the account. The `<mdm:Cloud>` elements are ordered alphabetically by Hub Cloud name. Each `<mdm:Cloud>` element contains the following attributes:

    -   *cloudId* — system ID of the Hub Cloud

    -   *containerId* — system ID of the Atom Cloud that serves as the Hub Cloud container

    -   *name* — name of the Hub Cloud

    Sample response body:

    ```xml
    <mdm:Clouds xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:Cloud cloudId="01234567-89ab-cdef-0123-456789abcdef" containerId="fedcba98-7654-3210-fedc-ba9876543210" name="Canada Hub Cloud"/>
        <mdm:Cloud cloudId="12345678-9abc-def0-1234-56789abcdef0" containerId="edcba987-6543-210f-edc-ba9876543210f" name="USA East Hub Cloud"/>
    </mdm:MdmClouds>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Repository Management privileges required for this operation. Sample response body:

    ```xml
    <error>
    <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 403 (Forbidden) Authentication failure. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

- 403 (Forbidden) accountID does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```