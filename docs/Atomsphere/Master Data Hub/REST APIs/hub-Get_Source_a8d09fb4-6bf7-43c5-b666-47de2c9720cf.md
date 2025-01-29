# Get Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a8d09fb4-6bf7-43c5-b666-47de2c9720cf"/>
</head>


The Get Source operation retrieves, by source ID, the name, properties, and universe \(domain\) attachments of a source under an account accessible to the authenticated user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/sources/<sourceID>`

:::note

This operation requires the authenticating user to have the **MDM - Source Management** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**sourceID**  
ID of the source



## Responses 

-   200 \(OK\) The body of the response is XML. The root `<mdm:AccountSource>` element has the following child elements:

    -   `<mdm:name>` — name of the source

    -   `<mdm:sourceId>` — ID of the source

    -   `<mdm:lastModifieedDate>` — date and time at which the source was last modified

    An additional child element, `<mdm:entityIdUrl>`, is present if you configure the source with the property which appears in the user interface with the label **Entity ID URL**. The property value is a URL template, which uses to construct target URLs for links, rendered in the user interface, to entities in the source system.

    An additional child element, `<mdm:sourceAttachment>` is present for each universe \(domain\) to which the source is attached. `<mdm:sourceAttachment>` has the following child elements:

    -   `<mdm:repositoryName>` — name of the repository to which the universe is deployed

    -   `<mdm:repositoryId>` — ID of the repository to which the universe is deployed

    -   `<mdm:universeName>` — name of the universe

    -   `<mdm:universeId>` — ID of the universe

    -   `<mdm:status>` — status of the attachment, indicated as one of the following:

        -   SOURCE\_ATTACHMENT\_REQUESTED

        -   SOURCE\_ATTACHED

        -   ENABLE\_INITIAL\_LOAD\_REQUESTED

        -   INITIAL\_LOAD\_ENABLED

        -   FINISH\_INITIAL\_LOAD\_REQUESTED

        -   INITIAL\_LOAD\_FINISHED

        -   SOURCE\_REMOVAL\_REQUESTED

        -   SOURCE\_REMOVED — this status is momentary upon removal of a source from the universe.

        -   SOURCE\_ERRORED — the source was not successfully attached to or removed from the universe.

    Sample response body:

    ``` xml
    <mdm:AccountSource xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:name>Salesforce</mdm:name>
        <mdm:sourceId>SF</mdm:sourceId>
        <mdm:entityIdUrl>https://na2.salesforce.com/{id}</mdm:entityIdUrl>
        <mdm:lastModifiedDate>2021-09-21 21:41:51.0</mdm:lastModifiedDate>
        <mdm:sourceAttachment>
            <mdm:repositoryName>MyCompany Master</mdm:repositoryName>
            <mdm:repositoryId>01234567-89ab-cdef-0123-456789abcdef</mdm:repositoryId>
            <mdm:universeName>Account</mdm:universeName>
            <mdm:universeId>502a38c3-51d6-45b4-a679-36e6a35207cc</mdm:universeId>
            <mdm:status>INITIAL_LOAD_FINISHED</mdm:status>
        </mdm:sourceAttachment>
        <mdm:sourceAttachment>
            <mdm:repositoryName>MyCompany Master</mdm:repositoryName>
            <mdm:repositoryId>01234567-89ab-cdef-0123-456789abcdef</mdm:repositoryId>
            <mdm:universeName>Employee</mdm:universeName>
            <mdm:universeId>12345678-9abc-def0-1234-56789abcdef</mdm:universeId>
            <mdm:status>SOURCE_ATTACHED</mdm:status>
        </mdm:sourceAttachment>
    </mdm:AccountSource>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Management privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) *sourceID* does not identify a source that exists in the specified account. Sample response body:

    ```xml
    <error>
        <message>A source with ID 'WD' does not exist in this account.</message>
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