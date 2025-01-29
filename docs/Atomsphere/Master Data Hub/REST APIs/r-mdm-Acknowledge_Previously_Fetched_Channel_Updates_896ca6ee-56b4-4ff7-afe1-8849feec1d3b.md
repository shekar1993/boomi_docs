# Acknowledge Previously Fetched Channel Updates 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-896ca6ee-56b4-4ff7-afe1-8849feec1d3b"/>
</head>


The Acknowledge Previously Fetched Channel Updates operation acknowledges a specified previously fetched batch of source record update requests on a specified contributing source’s channel from a specified universe \(domain\) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/updates<updateID>/acknowledge`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

:::note

If you configure the source with multiple channels, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/sourceID/channels/<channelID>/updates/<updateID>/acknowledge`

\(Boomi maintains this form for backward compatibility — you cannot configure your newly attached sources with multiple channels.\)

:::

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth,send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/updates<updateID>/acknowledge?repositoryId=<repository ID>`

:::note

If you configure the source with multiple channels, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/sourceID/channels/<channelID>/updates/<updateID>/acknowledge?repositoryId=<repository ID>`

\(Boomi maintains this form for backward compatibility — you cannot configure your newly attached sources with multiple channels.\)

:::

You must have the following MDM privileges:

- **MDM - Source Management**

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**channelID**  
(multiple-channel sources only) ID of the channel

**updateID**  
ID of the channel update to acknowledge


**updateID**  
ID of the channel update to acknowledge

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 
-   200 \(OK\) Acknowledgment was successful.
-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

  ```xml
  <error>
    <message>The given universe id is blank.</message>
  </error> 
  ```

- 400 (Bad Request) The update identified by *updateID* was already acknowledged. Sample response body:

  ```xml
  <error>
    <message>The update with id '3' in channel with id '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' has already been acknowledged.</message>
  </error> 
  ```

- 400 (Bad Request) *channelID* does not identify a channel for which Initial Load is complete. Sample response body:

  ```xml
  <error>
    <message>The channel '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' for source 'QB' in universe 'a28c2bc9-e6c7-4aa2-8a7e-a2e77ca9b887' is CREATED but needs to be STRAPPED before update requests are allowed.</message>
  </error> 
  ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

  ```xml
  <error>
    <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error>
  ``` 

- 404 (Not Found) *channelID* does not identify a channel for the specified source. Sample response body:

  ```xml
  <error>
    <message>Channel with id '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' for source 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error> 
  ```

- 404 (Not Found) *updateID* does not identify a batch of source record update requests for the specified channel. Sample response body:

  ```xml
  <error>
    <message>A batch with id 'foo' does not exist.</message>
  </error> 
  ```

- 401 (Invalid Credentials) JWT auth token is expired. Sample response body:
   ```xml
   <body>
   <h2>HTTP ERROR 401</h2>
      <p>Problem accessing /mdm/universes. Reason:
      <pre>Invalid credentials.</pre>
   </p>
   </body>
   ```

- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```xml
   <error><message>You do not have permissions to access this resource.</message></error>
   ```
  