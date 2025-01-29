# Add Staging Area for Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9c53339e-b146-4f24-b214-5fc11bcdae83"/>
</head>


The Add Staging Area for Source operation requests the addition of a staging area for a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user. The source must be a contributing source for which Initial Load is either enabled or finished. The staging area status is obtainable with a Get Staging Area Status request.

To perform this operation, send an HTTP POST request to

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/sources/<sourceID>/stagingArea/create`

:::note

This operation requires the authenticating user to have the MDM - Source Attachment privilege in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

The body of the request must conform to the following structure:

```xml
<mdm:CreateStagingAreaRequest xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <mdm:name></mdm:name>
    <mdm:id></mdm:id>
</mdm:CreateStagingAreaRequest>
```

where

-   `<mdm:name>` sets the name for the new staging area — maximum 255 characters. Each source attachment's staging area's names must be unique.

-   `<mdm:id>` sets the ID for the new staging area. The maximum length is 50 characters, and the allowable characters are uppercase and lowercase letters, numbers, underscore \(\_\) and hyphen \(-\). Each source attachment's staging areas IDs must be unique.


## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe

**sourceID**  
ID of the source


## Responses 

-   200 \(OK\) Received the staging area creation request. The response body contains the system ID assigned to the staging area upon its successful creation. You can use this system ID in a Get Staging Area Status or Delete Staging Area for Source request. Sample response body:

    ```
    23456789-abcd-ef01-2345-6789abcdef01
    ```
- 400 \(Bad Request\) The authenticating user does not have the **API Access** and **MDM - Source Attachment** privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```
- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:

    ```xml
    <error>
        <message>Could not find containerAccount for container id 
        dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
    </error>
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) The specified source has an existing staging area with the specified name. Sample response body:

    ```xml
    <error>
       <message>A staging area with the name 'Salesforce Staging Area 1' already exists for this source.</message>
    </error>
    ```

-   400 \(Bad Request\) The length of the specified staging area name exceeds 255 characters. Sample response body:

    ```xml
    <error>
       <message>The specified staging area name is invalid.</message>
    </error>
    ```

-   400 \(Bad Request\) An `<mdm:name>` element was either omitted from the request body or empty. Sample response body:

    ```xml
    <error>
       <message>A staging area name was not specified.</message>
    </error>
    ```

-   400 \(Bad Request\) The specified source has an existing staging area with the specified ID. Sample response body:

    ```xml
    <error>
       <message>A staging area with ID 'SF-Staging1' already exists for this source.</message>
    </error>
    ```

-   400 \(Bad Request\) The length of the specified staging area ID exceeds 50 characters or contains invalid special characters. Sample response body:

    ```xml
    <error>
       <message>The specified staging area ID is invalid.</message>
    </error>
    ```

-   400 \(Bad Request\) An `<mdm:id>` element was either omitted from the request body or empty. Sample response body:

    ```xml
    <error>
       <message>A staging area ID was not specified.</message>
    </error>
    ```

-   400 \(Bad Request\) The specified source is not a contributing one. Sample response body:

    ```xml
    <error>
       <message>The source with ID 'DATA-WAREHOUSE' cannot contribute data.</message>
    </error>
    ```

-   400 \(Bad Request\) The specified source is not one for which Initial Load is either enabled or finished. Sample response body:

    ```xml
    <error>
       <message>The source with ID 'SF' is not in a valid state.</message>
    </error>
    ```

-   400 \(Bad Request\) Either a source with the specified ID is not attached to the specified universe or universeID does not identify a universe hosted in the specified repository. Sample response body:

    ```xml
    <error>
       <message>The source with ID 'NS' is not attached to the specified universe.</message>
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