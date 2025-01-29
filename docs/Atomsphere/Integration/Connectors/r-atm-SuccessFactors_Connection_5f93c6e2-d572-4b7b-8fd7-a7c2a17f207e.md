# SuccessFactors – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5f93c6e2-d572-4b7b-8fd7-a7c2a17f207e"/>
</head>

The SuccessFactors – Partner connection represents a single data center instance, including login credentials.

In the SuccessFactors – Partner connection, you specify the data center, Company ID, and credentials for executing SFAPI transactions. Connecting to an existing Company ID requires both the endpoint URL to the data center and the Company ID specifying a specific instance in the data center. See the SuccessFactors reference material for more information on configuring SFAPI connections.

## Connection tab

**Endpoint** - 
  The endpoint to the SFAPI servers. The endpoint is specific to the global datacenter where the BizX Company ID instance is deployed. The endpoint URL specifies where to send the SOAP XML request payloads. If your URL is not listed, select **Other** and manually enter the URL in the Other Endpoint field. There is an endpoint and accompanying WSDL for each data center.

**Other Endpoint** - 
 \(Available only if Other is selected as the endpoint.\) The custom URL endpoint.

**SFAPI endpoint suffix** - 
  Edit to override the URL suffix for the SFAPI endpoint. Do not use the SOAP version 1.2 endpoint (`/sfapi/v1/soap12`)

**Enable SF OData Entity Import** - 
  (Import only) Enables access to the SF OData API in addition to the SFAPI. OData entities will appear on the object list as `SFOData.[entityname]`.

**SF OData endpoint suffix** - 
  Edit to override the default URL suffix of the SF OData endpoint (`/odata/v2/`). Due to the size of the SuccessFactors OData API metadata, you should limit the entity types returned by adding them explicitly in the URL using this endpoint suffix override. For example, the following entry will limit to a subset of the Employee Central Entities:

  ```shell
  /odata/v2/EmpEmployment,EmpJob,PerPersonal,PerPerson,EmpCompensation,User,PerPhone,FOLocation,FOPaygrade,PicklistOption,FOEventReason,PerEmail,Position,FOBusinessUnit,FOCostCenter,EmpPayCompRecurring,FOPayComponent,PerAddressDEFLT,PerNationalId/
  ```

**Company ID** -
  The instance for the connection. In combination with the endpoint, Company ID specifies a unique instance in a specific global data center. You must provide the SFAPI provision for this specific Company ID for SFAPI transactions to execute.

**Username** - 
  The user name for a valid user in the specified client instance. The user should have the SFAPI Login Permission and permissions to access any desired data objects and Read or Write actions.

 Prefix this user name in the form `sfapi-<vendor or module use>` in lower case. For example: `sfapi-ec`, `sfapi-rcm`, `sfapi-saperp`, `sfapi-sapbyd`, etc. This indicates to administrators that this user is used for integration and not to disable the user, which would disable SFAPI access and break scheduled integration processes.

**Password** - 
 The password associated with the user name. Configure this password so that it does not expire. Also, add the IP address of any Boomi Atoms or Clouds that access the SFAPI to the trusted list. You can set this in **SuccessFactors** \> **Admin Tools** \> **Set Password Policy**.

 It is a good idea to expose the endpoint, user name, and password connection attributes as process extensions so they can be specified for different Integration environments. For example, the values specified can reflect development values. Extensions can be specified for a "Test" environment so the connector connects to a Test instance. Different values can be specified for a "Production" environment. An added security benefit is that the product credentials is stored only on the Production Cloud \(password strongly encrypted of course!\) and not in the Integration Development Cloud. These credentials can be controlled only by Integration users with privileges to access the Production Cloud for the account.

**Default Batch Size** - 
 The default page size to use for data manipulation or Write actions \(Create, Delete, Update or Upsert\). This can be a value from 1 to 800. The default value is 200. It should be set to a reasonably large number to limit the number of individual SOAP transactions, but not so large that slower SOAP transactions exceed 1-2 minutes and risk timing out.

 This value is shared for all operations that reference the connection but can be overridden on a per-operation basis. See the SuccessFactors Operation topic.

**Default Query Page Size** - 
 The default result page size for Query actions. It is similar to the Batch Size parameter but it controls the batch size for returned query results. It should be set to a reasonably large number to limit the number of individual SOAP transactions. The maximum value supported by the SFAPI is 800. Note: This value is shared for all operations that reference the connection but can be overridden on a per-operation basis.

**Default Timeout Time** - 
 \(Available only for asynchronous queries.\) The time the system waits for the completion of an “Asynchronous Query” job for an Ad Hoc Report.

 Set this value high enough to allow for slow-running queries and long scheduler queues.

 This value is shared for all operations that reference the connection but can be overridden on a per-operation basis.

**Default Sleep/Wait Time** - 
 \(Available only for asynchronous queries.\) The frequency at which the connector checks the status of an “Asynchronous Query” job of an Ad Hoc Report. A longer sleep/wait time limits the number of "get job status" transactions.

For long time-out times, set this value to a relatively high value to limit the number of "get job status" transactions that occur while waiting for the query to complete.

This value is shared for all operations that reference the connection but can be overridden on a per-operation basis.

**Object ID Type List**    
  The setting of Form type IDs from a connection’s environment extension. Specifies list of Form IDs to use in the format `PMForm=PMForm$1;JobRequisition=JobRequesition$13;`. In this example, all PMForm type IDs are set to `PMForm$1` in order to function for a specific SuccessFactors tenant. Only one Form type ID is allowed per process.