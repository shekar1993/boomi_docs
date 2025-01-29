# Get Sources 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-e91f96eb-7302-4171-a4dd-50eb8befd0cb"/>
</head>


The Get Sources operation retrieves a list of the sources for a specified account accessible to the authenticating user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/sources`

:::note

This operation requires the authenticating user to have the **MDM - Source Management** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account


## Responses 

-   200 \(OK\) The body of the response is XML. The root `<mdm:AccountSources>` element contains an `<mdm:AccountSource>` element for each of the account’s sources. The `<mdm:AccountSource>` elements are ordered alphabetically by source name. Each `<mdm:AccountSource>` element has the following child elements:

    -   `<mdm:name>` — name of the source

    -   `<mdm:sourceId>` — ID of the source

    An additional child element, `<mdm:entityIdUrl>`, is present if the source is configured with the property which appears in the user interface with the label **Entity ID URL**. The property value is a URL template, which uses to construct target URLs for links, rendered in the user interface, to entities in the source system.

    Sample response body:

    ``` xml
    <mdm:AccountSources xmlns:mdm="http://mdm.api.platform.boomi.com/" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <mdm:AccountSource>
            <mdm:name>NetSuite</mdm:name>
            <mdm:sourceId>NS</mdm:sourceId>
        </mdm:AccountSource>
        <mdm:AccountSource>
            <mdm:name>Salesforce</mdm:name>
            <mdm:sourceId>SF</mdm:sourceId>
            <mdm:enityIdUrl>https://na2.salesforce.com/{id}</mdm:entityIdUrl>
        </mdm:AccountSource>
        <mdm:AccountSource>
            <mdm:name>Workday</mdm:name>
            <mdm:sourceId>WD</mdm:sourceId>
        </mdm:AccountSource>
    </mdm:AccountSources>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Management privileges required for this operation. Sample response body:

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

- 403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```