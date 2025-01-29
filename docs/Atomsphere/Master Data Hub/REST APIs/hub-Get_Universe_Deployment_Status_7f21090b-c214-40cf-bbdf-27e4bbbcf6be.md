# Get Universe Deployment Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-7f21090b-c214-40cf-bbdf-27e4bbbcf6be"/>
</head>


The Get Universe Deployment Status operation retrieves by deploymentID the status of the deployment of the model underlying a universe (domain) deployment in an account accessible to the authenticated user.



To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/universe/<universeID>/deployments/<deploymentID>`

:::note

This operation requires the authenticating user to have the **MDM - Model Deployment** and the **API Access** privileges.

:::

## Path parameters 

**accountID**  
ID of the account

**universeID**  
ID of the model

**deploymentID**  
ID of the deployment. You can obtain this ID from the response to a Deploy Universe request.

## Responses 

-   200 \(OK\) The body of the response is XML. The root `<mdm:UniverseDeployment>` element has the following child elements:

    -   `<mdm:id>` — ID of the deployment

    -   `<mdm:universeId>` — ID of the model

    -   `<mdm:universeVersion>` — model version number

    -   `<mdm:status>` — SUCCESS indicates the deployment was successfully completed. PENDING indicates the deployment is in progress. CANCELED indicates the deployment was canceled. Cancellation occurs if one of the following occurs:

        -   A request to undeploy the model was made by a user on the repository page in while the deployment was in progress
        -   The Boomi Enterprise Platform cannot communicate with the repository
    -   `<mdm:deployDate>` — date and time of the deployment request

    -   `<mdm:completionDate>` — if the `<mdm:status>` is SUCCESS, this is the date and time of the completion of deployment. If `<mdm:status>` is PENDING, it omits this element. If `<mdm:status>` is CANCELED, this is the date and time of the cancellation of deployment.

    -   `<mdm:url>` — a request for this URL is equivalent to a Get Universe Deployment Status request specifying the deploymentID returned in `<mdm:id>` from either a Get Universe Deployment Status or Deploy Universe operation.

    Sample response body:

    ```xml
    <mdm:UniverseDeployment xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:id>456789ab-cdef-0123-4567-89abcdef0123</mdm:id>
        <mdm:universeId>01234567-89ab-cdef-0123-456789abcdef</mdm:universeId>
        <mdm:universeVersion>2</mdm:universeVersion>
        <mdm:status>SUCCESS</mdm:status>
        <mdm:deployDate>2020-02-08T16:36:16Z</mdm:deployDate>
        <mdm:completionDate>2020-02-08T16:36:19Z</mdm:deployDate>
        <mdm:url>https://platform.boomi.com/mdm/api/rest/v1/account-123456/universe/01234567-89ab-cdef-0123-456789abcdef/deployments/456789ab-cdef-0123-4567-89abcdef0123</mdm:url>
    </mdm:UniverseDeployment>
    ```

-   400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Model Deployment** privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) The combination of *deploymentID* and *universeID* does not identify a deployment. Sample response body:

    ```xml
    <error>
        <message>Deployment dca3c753-bebd-465a-9d96-197bc41719aa does not exist for universe ac11cc59-c77a-4afe-8c92-ed86a7daabec.</message>
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