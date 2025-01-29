# Microsoft Azure Blob Storage connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f3c99dd0-b0e5-4e0d-95f6-5b2761141eaf"/>
</head>


The Micosoft Azure Blob Storage connection represents a single Microsoft Azure Blob Storage instance including sign-in credentials.


## **Settings** tab 


  
  
**Storage Account** - 
  Enter the name of your Microsoft Azure storage account.

**Endpoint Suffix** - 
  Specify the Azure storage endpoint suffix for the region or instance with which connection interacts. Provide a valid value to ensure a successful process run. The connection uses the **Storage Account** and this value to build the fully-qualified storage endpoint in the format `https://<storageAccount>.blob.<endpointSuffix>` and run requests.

 -   New connections, or if you leave **Endpoint Suffix** blank, automatically populate with core.windows.net.

 -   Existing connections utilize core.windows.net, until you change this value and save the connection.


**Authentication Type** - 
 Choose how you want to protect the connection, either with an account access key, or a SAS token.

**Access Key** - 
  Enter or copy either the primary or secondary access key from your Microsoft Azure account. If you use the secondary key, you can lose access if the owner of the primary key regenerates the secondary key.

 **Attention:** An access key is similar to a root password for a storage account, and is therefore considered a less secure authentication method, as compared to a SAS token. Existing connections using a storage account and access key to secure the connection continue to work. However, we encourage you to update your connections and secure them with a SAS token.

**SAS Token**   
  Specify the SAS token from your Azure account resource for improved security over an access key. The token enables you to limit access to Azure storage resources \(containers and blobs\) in a storage account. When creating the token, specify its constraints, including the resources it can access, the permissions, and for how long the token is valid.

 After updating the connection to use a SAS token, save it and reimport the operations to ensure protection with the improved security provided by the SAS token.

 -   SAS tokens having access to containers verify the existence of the container as follows:

      -   If the container does not exist, or the request to verify its existence fails, the operation fails.

        -   If the container exists, the operation attempts to interact with the blob.

       SAS tokens that do not have access to containers do not attempt to verify the existence of the container. Instead, they try to interact directly with the blob and include all tokens not having permission to perform the validation:

        -   Account SAS tokens with no access to containers.

        -   Service SAS tokens.

        -   User Delegation SAS tokens.

        Additionally, if you use a SAS token that does not have access to containers in the Get operation, providing either an incorrect container name or blob name, it returns an empty success.