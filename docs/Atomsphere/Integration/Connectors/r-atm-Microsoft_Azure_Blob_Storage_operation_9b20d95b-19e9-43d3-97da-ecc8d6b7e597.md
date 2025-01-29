import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Microsoft Azure Blob Storage operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9b20d95b-19e9-43d3-97da-ecc8d6b7e597"/>
</head>


The Microsoft Azure Blob Storage operation defines how to operate with blob objects.

The operation supports the following actions:

-   **Delete** — Delete blobs based on ID parameters, as well as snapshots. In Azure, you can mark blobs for deletion during garbage collection.

-   **Get** — Read blobs \(the only available objects\) by passing the name of the blob as an ID and returning the contents of the blob.

    :::note Attention 
    
    Several document properties are available for output documents, enabling you to return system properties, and key-value pairs for user-defined metadata, contained in retrieved blobs. To learn more, see the topic [Microsoft Azure Blob Storage connector](r-atm-Microsoft_Azure_Blob_Storage_connector_216ef744-e76e-4764-848c-a421af79d469.md).

    :::

-   **Create** — When you import blobs, you can assign a name to a blob utilizing two methods:
    -   Use the **Blob Name** field.

    -   Use a dynamic document property. When setting the dynamic document property, create a property for the `azureBlobName` and set the parameter to a static value of the desired blob name. If you do not enter a blob name as a dynamic document property, then the operation generates a name.


## **Options** tab

When you configure an action, the following fields appear on the **Options** tab:


<TrackingDir />


**Request Profile** - 
  The profile component that represents the content structure sent by the connector.

<ReturnErrRes />

**Container Name** \(Create, Delete, Get\) - 
 Enter the name of the container that stores your BLOBs.

**Blob Name** \(Create\) - 
 Enter the name of the blob to create. You can override this value using the `Blob Name` dynamic operation property.

 -   If left blank, it uses the value from the azureBlobName dynamic document property.

  -   If you use the `Blob Name` value, and if you set the azureBlobName dynamic document property, this value takes precedence to create the blob. It ignores the dynamic document property.

 -   If you use the `Blob Name` value, and you leave the azureBlobName dynamic document property blank, the connector automatically generates the name of the blob. The name begins with `GENERATED`.

 -   If there are existing processes where you did not set this value, continue to use the azureBlobName dynamic document property to create the blob name. If the dynamic document property does not have a value, the connector automatically generates the name beginning with `GENERATED`.


**BLOB Naming Options** \(Create\) -    
 Select whether to cancel, rename, or overwrite a BLOB when the **Create Operation** finds a BLOB with a name that already exists. Choose one the following options:

-   Cancel if the BLOB exists  — Preserves the original blob but causes the connector step to fail.

 -   Create a unique name if the BLOB exists — Creates a new blob with the date appended to the name.

 -   Overwrite if the BLOB exists — Writes over the existing blob and replaces it.


**Cache-Control** \(Create\) - 


 -   If set, it sends the value in the `x-ms-blob-cache-control` PUT request header. Subsequent calls to download the blob include this property in the `Cache-Control` GET response header.

 -   If left blank, it does not set the corresponding request header, and clears the property in the blob.


You can override this property using the `Cache-Control` dynamic operation property.

**Content-Disposition** \(Create\) -

 -   If set, it sends the value in the `x-ms-blob-content-disposition` PUT request header. Subsequent calls to download the blob include this property in the `Content-Disposition` GET response header.

 -   If left blank, it does not set the corresponding request header, and clears the property in the blob.


 You can override this property using the `Content-Disposition` dynamic operation property.

**Content-Encoding** \(Create\) -

-   If set, it sends the value in the `x-ms-blob-content-encoding` PUT request header. Subsequent calls to download the blob include this property in the `Content-Encoding` GET response header.

 -   If left blank, it does not set the corresponding request header, and clears the property in the blob.

You can override this property using the `Content-Encoding` dynamic operation property.

**Content-Language** \(Create\) - 
  -   If set, it sends the value in the `x-ms-blob-content-language` PUT request header. Subsequent calls to download the blob include this property in the `Content-Language` GET response header.

 -   If left blank, it does not set the corresponding request header, and clears the property in the blob.

You can override this property using the `Content-Language` dynamic operation property.

**Content-Type** \(Create\) - 
If set, it sends the value n the `x-ms-blob-content-type` PUT request header. Creating a blob without this value does not set the `x-ms-blob-content-type` request header, and creates the blob in the service with the default application/octet-stream. You can override this property using the `Content-Type` dynamic operation property.

**User-defined Metadata**  \(Create\) - 
 Add the key-value pairs to set as PUT request headers representing additional metadata to send with the created blob. You can override these properties using the `User-defined Metadata` dynamic operation property.


<OperationEnd />