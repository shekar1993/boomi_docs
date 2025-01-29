# Undeploy Universe 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2f33215c-5d89-46ec-bceb-999e643007e3"/>
</head>


The Undeploy Universe operation undeploys the model underlying a universe hosted in a repository in an account accessible to the authenticated user. Undeploying the model removes the domain and with it the data and attached sources.

To perform this operation, send an HTTP DELETE request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universe/<universeID>`

:::note

This operation requires the authenticating user to have the **MDM - Model Removal** and the **API Access** privileges.

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the model



## Responses 

-   200 \(OK\) The body of the response is XML. Response body for a successful operation:

    ```xml
    <true/>
    ```

-   400 \(Bad Request\) The authenticating user does not have the **API Access** and **MDM - Model Removal** privileges required for this operation. Sample response body:

    ```xml
    <error>
       <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
    <message>The given universe id is blank.</message>
    </error> 
    ```


- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:

    ```xml
    <error>
    <message>Could not find containerAccount for container id 
    dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
    </error>
    ```

-   400 \(Bad Request\) *universeID* does not identify a model deployed to the repository identified by repositoryID. Sample response body:

    ```xml
    <error>
        <message>Model with id ac11cc59-c77a-4afe-8c92-ed86a7daabec is not deployed to repository MyCompany Master.</message>
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
    