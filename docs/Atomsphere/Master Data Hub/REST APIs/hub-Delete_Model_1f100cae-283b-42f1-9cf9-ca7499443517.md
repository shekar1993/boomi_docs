# Delete Model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1f100cae-283b-42f1-9cf9-ca7499443517"/>
</head>

The Delete Model operation requests deletion of a specified model under an account accessible to the authenticated user. It is possible to delete a model only while it is not deployed to a repository.

To perform this operation, send an HTTP DELETE request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/models/<modelID>`

:::note

This operation requires the authenticating user to have the MDM - Edit Models privilege in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**modelID**  
ID of the model

## Responses 
-   200 \(OK\) If you deleted the specified model successfully, the response body contains `true`.

-   400 \(Bad Request\) You cannot delete the model identified by modelID because it is currently deployed to a repository. Sample response body:

    ``` xml
    <error>
       <message>Model is in use by one or more repositories. Please undeploy this model before attempting to delete it.</message>
    </error>
    ```
- 400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Edit Models** privileges required for this operation. Sample response body:

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

- 400 (Bad Request) You cannot delete the model identified by modelID because it is currently deployed to a repository. Sample response body:

   ```xml
   <error>
      <message>Model is in use by one or more repositories. Please undeploy this model before attempting to delete it.</message>
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