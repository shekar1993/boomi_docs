# Microsoft Azure Blob Storage connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1ed59645-1cc0-4a78-bb9d-9815f8999ac7"/>
</head>


The Microsoft Azure Blob Storage connector makes it easy to build integrations by simplifying construction to your Azure Storage objects.


## Connector configuration 

To configure a connector to communicate with Azure, set up two components:

-   Microsoft Azure Blob Storage connection

-   Microsoft Azure Blob Storage operation

This approach creates reusable components that contain connection settings (such as URL, User, Password, Account) and operation settings (such as container). After building your connection and operation, set up your Microsoft Azure Blob Storage connector within a process. When you define the process correctly, Integration can map to and from virtually any system using the Microsoft Azure Blob Storage connector to retrieve data from or send data to the Microsoft Azure Blob Storage application.



## Prerequisites 

To implement a connection to your Microsoft Azure account from Integration, do the following:

-   Have your storage account name and access key to access Microsoft Azure Blob Storage.

-   Deploy an Atom on your local machine or hosted with Integration.

-   Check the size of your BLOB. The Azure SDK prevents processing BLOBs larger than 64 MB on an Atom Cloud. If your BLOB is larger than 64 MB, do your processing on a local Atom.


## Document properties \(input\) 

This connector has no predefined properties for input documents. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom field.

## Document properties \(output\) 

This connector has the following properties \(\(Getoperation only\) for output documents that you can set or reference in various step parameters. Each property with possible values has an unspecified additional value and is assigned automatically by the connector if it cannot parse the response header value from the service into any possible values.




**Blob-Type** - 
  Identifies the type of blob:

 -   **BLOCK\_BLOB** — Store text and binary data. Block blobs are composed of blocks of data that you can manage individually.

 -   **PAGE\_BLOB** — Store random access files. Page blobs store virtual hard drive \(VHD\) files and serve as disks for Azure virtual machines.

 -   **APPEND\_BLOB** — Composed of blocks like block blobs and optimized for append operations. Append blobs are suitable for situations such as logging data from virtual machines.

 
**Cache-Control** - 
  Contains the value specified for this property when the blob was created \(if set\). To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).

**Content-Disposition** - 
 Contains the value specified for this property when you created the blob \(if set\). To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).

**ontent-Encoding** - 
 Contains the specified value for this property when you created the blob \(if set\). To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).

**Content-Language** - 
 Contains the value specified for this property when you created the blob \(if set\). To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).

**Content-MD5** - 
 The MD5 hash value based on the blob’s contents. This value is useful for checking the message content integrity. Depending on how you create the blob, this value may or may not be set.

**Content-Type** - 
  Contains the value specified for this property when you created the blob \(if set\). To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).

**E-Tag** - 
 A unique identifier that updates when performing a write operation against the container.

**Last-Modified** - 
 Time stamp from when you last modified the blob, using the format *yyyy-MM-dd'T'HH:mm:ss.SSS'Z'*.

**Lease-Duration** - 
  When leasing a blob, this property specifies if the lease has an INFINITE or a FIXED duration.

**Lease-State** - 
  When leasing a blob, this property specifies the state, which can be one of the following:

-   AVAILABLE

 -   LEASED

 -   EXPIRING

 -   BREAKING

-   BROKEN


**Lease-Status** - 
 When leasing a blob, this property specifies the status, which can be LOCKED or UNLOCKED.

**Length** - 
 Contains the size of the blob in bytes.

**User-defined Metadata** - 
 Add the property key for the value, representing additional metadata to read from the created blob. To learn more, see the topic [Microsoft Azure Blob Storage operation](r-atm-Microsoft_Azure_Blob_Storage_operation_9b20d95b-19e9-43d3-97da-ecc8d6b7e597.md).