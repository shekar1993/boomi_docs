# Create Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-cdd96673-64ff-420e-8c73-bf636e41053d"/>
</head>


The Create Source operation creates a source under an account accessible to the authenticated user.

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/sources/create`

:::note

This operation requires the authenticating user to have the MDM - Source Management privilege in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

The body of the request must conform to the following structure:

```xml
<mdm:CreateSourceRequest xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <mdm:name></mdm:name>
    <mdm:sourceId></mdm:sourceId>
    <mdm:entityIdUrl></mdm:entityIdUrl>
</mdm:CreateSourceRequest>
```

where

-   `<mdm:name>` sets the name for the new source — maximum 255 characters.

-   `<mdm:id>` sets the ID for the new source. The maximum length is 50 characters, and the allowable characters are uppercase and lowercase letters, numbers, underscore \("\_"\) and hyphen \("-"\).

-   `<mdm:entityIdUrl>` sets the URL template uses to construct target URLs for links, rendered in the user interface, to entities in this source system. In the template the string `{id}` serves as placeholder for the source entity ID.


## Path parameters 

**accountID**  
ID of the account

## Responses 

-   200 \(OK\) Created a source with the specified name and ID in the account. Sample response body:

    ```xml
    <true/>
    ```

- 400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Source Management** privileges required for this operation. Sample response body:
    
    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

-   400 \(Bad Request\) The length of the specified source name exceeds 255 characters. Sample response body:

    ```xml
    <error>
       <message>The specified source name is invalid.</message>
    </error>
    ```

-   400 \(Bad Request\) An `<mdm:name>` element was either omitted from the request body or empty. Sample response body:

    ```xml
    <error>
       <message>A source name was not specified.</message>
    </error>
    ```

-   400 \(Bad Request\) The specified account has an existing source with the specified ID. Sample response body:

    ```xml
    <error>
       <message>A source with ID 'SF' already exists in this account.</message>
    </error>
    ```

-   400 \(Bad Request\) The length of the specified source ID exceeds 50 characters and/or contains invalid special characters. Sample response body:

    ```xml
    <error>
       <message>The specified source ID is invalid.</message>
    </error>
    ```

-   400 \(Bad Request\) An `<mdm:sourceId>` element was either omitted from the request body or empty. Sample response body:

    ```xml
    <error>
       <message>A source ID was not specified.</message>
    </error>
    ```

-  403 (Forbidden) Authentication failure. Sample response body:
  
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