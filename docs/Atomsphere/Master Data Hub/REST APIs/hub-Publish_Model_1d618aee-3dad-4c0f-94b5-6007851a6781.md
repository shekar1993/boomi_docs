# Publish Model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1d618aee-3dad-4c0f-94b5-6007851a6781"/>
</head>


The Publish Model operation requests publication of a specified model under an account accessible to the authenticated user.

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/models/<modelID>/publish`

:::note

This operation requires the authenticating user to have the **MDM - Edit Models** and the **API Access** privileges.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

The body of the request must conform to the following structure:

``` xml
<mdm:PublishModelRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
    <mdm:notes></mdm:notes>
</mdm:PublishModelRequest>
```

where

-   `<mdm:notes>` specifies a note documenting the changes to the model, or, in the case of the initial publication, describing the model. This element is optional.

For example:

``` xml
<mdm:PublishModelRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
    <mdm:notes>Notes Initial publication of master contact data.</mdm:notes>
</mdm:PublishModelRequest>
```

## Path parameters

**accountID**  
ID of the account

**modelID**  
ID of the model


## Responses 

-   200 \(OK\) The model was successfully published. The body of the response is XML. The root `<mdm:PublishModelResponse>` element has the following child elements:

    -   `<mdm:version>` — newly published model version

    -   `<mdm:lastModifiedDate>` — date and time of the Publish Model request

    -   `<mdm:user>` — authenticated user’s email address

    Sample response body:

    ``` xml
    <mdm:PublishModelResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:version>1</mdm:version>
        <mdm:lastModifiedDate>2022-03-12T16:14:47.208Z</mdm:lastModifiedDate>
        <mdm:user>user@domain.tld</mdm:user>
    </mdm:PublishModelResponse>
    ```

-   400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Edit Models** privileges required for this operation. Sample response body:

    ```xml
    <error>
    <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) *modelID* is not a valid GUID and is therefore an invalid component ID. Sample response body:

    ```xml
    <error>
    <message>1 is not a valid component ID.</message>
    </error>
    ```

- 400 (Bad Request) *modelID* does not identify a model in the specified account. Sample response body:

    ```xml
    <error>
    <message>A model with ID 851a6a64-6a88-4916-a5b7-d6a974d54318 does not exist.</message>
    </error>
    ```

-   400 \(Bad Request\) Did not publish the model because it is identical to the most recently published model version. Sample response body:

    ``` xml
    <error>
        <message>There are no changes. A new version will not be published.</message>
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