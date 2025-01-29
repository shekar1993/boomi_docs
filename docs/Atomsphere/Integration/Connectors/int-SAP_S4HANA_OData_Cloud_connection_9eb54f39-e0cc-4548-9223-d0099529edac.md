# SAP S/4HANA OData Cloud \(Tech Preview\) connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9eb54f39-e0cc-4548-9223-d0099529edac"/>
</head>


The SAP S/4HANA OData Cloud \(Tech Preview\) connection represents a S/4HANA Cloud tenant and User Credential \(Technical User and Password\).

The SAP S/4HANA OData Cloud \(Tech Preview\) connection contains the connection settings, including login information to the SAP cloud instance and the SAP API Business Hub. If you have multiple systems, you need a separate connection for each. Basic Authentication is used to connect to SAP S/4HANA Cloud.

The SAP connection represents a single account including login credentials. Each SAP S/4HANA Cloud tenant requires a separate connection.

## Connection tab



**Host** - 
:   Enter the name or IP address of SAP S/4HANA Cloud tenant.

**SAP User ID** - 
:   Enter the Technical User ID for SAP S/4HANA Cloud Tenant. The Technical User created for Users for Inbound Communication in the Communication Systems “tile”.

**SAP Password** - 
:   Enter the password associated with the SAP User ID.

    **Note:** Enter the SAP system credentials in the above fields to perform the selected operation.

**API Key** - 
:   Enter the API Key. This is generated in SAP API Business Hub once you have logged in with your SAP API Business User credentials.

**SAP API Business Hub Username** - 
:   Specify the username of SAP API Business Hub \(usually your SAP S-User\)

**SAP API Business Hub Password** - 
:   Provide the password of SAP API Business Hub.

    **Note:** Enter the SAP Business Hub Credentials in the above fields to get Swagger documents to build request/response profiles.