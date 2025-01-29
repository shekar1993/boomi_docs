# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-59c6ec57-cc88-448c-80fa-71b8175b4ff8"/>
</head>

## Amazon S3 REST connector

**We fixed this issue:**

- Necessary runtime packages are now packaged with the connector. (CONC-5305)

To learn more, see the topic [Amazon S3 REST connector](../../Integration/Connectors/r-atm-Amazon_S3_REST_connector_bc37d2c7-9ea6-41b7-931b-9eb0c2a80640.md).

## Amazon SQS connector

**We added this feature:**

- The Queue Name can now be imported dynamically across all operations, allowing you to import queues that you may not have a connection to browse. (CON-2942)

To learn more, see the topic [Amazon SQS connector](../../Integration/Connectors/r-atm-Amazon_SQS_connector_a018e9b9-7d51-4f2b-9b6f-8ada84475f6c.md).

## Eyer - Partner connector

**We are releasing this new connector:**

- The new Eyer - Partner connector supports integration between Boomi and Eyer (AI-powered observability platform). (CON-8948) 

This connector will be released after the Platform release. To learn more, see the topic [Eyer - Partner connector](../../Integration/Connectors/int-Eyer_connector.md).

## Google Ad Manager connector

**We added this feature:**

- The connector is upgraded to support the API versions v202308 and v202311. (CONC-5090)

- The Google Ad Manager API version v202305 has been deprecated. (CONC-5136) 

To learn more, see the topic [Google Ad Manager connector](../../Integration/Connectors/r-atm-Google_DFP_connector_fe51c7d3-a860-4de6-9aed-218ac04c2dfe.md).

## Google BigQuery connector

**We fixed these issues:**

- The Browse functionality for Run Job, Update and Upsert actions import the request and response profiles successfully and has Custom and Default options available in the dropdown. (CONC-5809)

- The Upsert operation populates the location ID field with the value available in the Google BigQuery table metadata. (CONC-5082)

- Support for nested and repeated columns, while using the Upsert action in JSON format with the Google BigQuery connector. (CONC-5222)

To learn more, see the topic [Google BigQuery connector](../../Integration/Connectors/r-atm-Google_BigQuery_connector_e68dae37-25d8-4653-8cf8-14406617cd01.md).

## JMS V2 connector

**We added these features:**

- The GET, SEND, and LISTEN operations now support IBM Websphere MQ. (CONC-5692, CONC-5693, CONC-6276)

- You can now test your connection with an IBM Websphere server type. (CONC-5694)
 
To learn more, see the topic [JMS V2 connector](../../Integration/Connectors/JMS_V2_connector_c8117b18-8913-4263-8ffa-c0ab9433c9da.md).

## Mind-Mercatis AWS – Partner connector

**We are releasing this new connector:**

- The new Mind-Mercatis AWS – Partner connector supports integration between Boomi and multiple AWS services. (CON-8826) 

This connector will be released after the Platform release. To learn more, see the topic [Mind-Mercatis AWS - Partner connector](../../Integration/Connectors/int-Mind_MercatisAWS_connector.md).

## MQTT connector

**We are releasing this new connector:**

- The new MQTT connector is built with additional enhancements along with retaining the same functional parity as the MQTT (Deprecated) connector. The MQTT (Deprecated) connector is no longer actively maintained except for critical fixes. The deprecated connector will be retired on 10/12/2024. Boomi encourages you to migrate to the new MQTT connector for continued support and innovation. (CONC-2949)

- Enable the MQTT connector to run in a molecule. (CONC-5819)

This connector will be released after the Platform release. To learn more, see the topic [MQTT connector](../../Integration/Connectors/int-MQTT_connector.md).

## Netsuite connector

**We deprecated these versions:**

- Versions 2016.1 and 2016.2 have been deprecated and removed from the connection settings. (CONC-5526)

To learn more, see the topic [Netsuite connector](../../Integration/Connectors/r-atm-NetSuite_connector_0e4b02c7-ef6b-4c1e-a273-2f5d443c7e7c.md).

## Oracle E-Business (EBS) V2 connector

**We fixed these issues:**

- Enhanced the connector to use the Oracle REST Service call to generate the profile. (CONC-3472)

- You can now use the Atom container properties to determine how large a payload to process, thus allowing for input file sizes greater than 1 MB. (CONC-2483)

To learn more, see the topic [Oracle E-Business (EBS) V2 connector](../../Integration/Connectors/r-atm-Oracle_E-Business_connector_983bcd7f-d885-47de-afed-7504c8961d9d.md).

## Platform API and Partner API connector

**We added this feature:**

- Added **recordedDate** field for the Query filter to the Boomi AtomSphere API connector and Partner API connector. You can now query an execution record's end date and time from the Boomi Enterprise Platform. (INT-10247)

To learn more, see the following topics: [Boomi Atomsphere API connector](../../Integration/Connectors/r-atm-AtomSphere_API_connector_c575ca80-7ae4-4221-abe1-5dcdc0055f20.md) and [Boomi Atomsphere Partner API connector](../../Integration/Connectors/r-atm-AtomSphere_Partner_API_connector_868916ed-6d6d-4854-88c2-ad51a03bc018.md).

## Salesforce Platform Events connector

**We added this feature:**

- Upgraded the CometD library from version 3.1.2 to 5.0.0 for security improvements. (CON-8788)

To learn more, see the topic [Salesforce Platform Events connector](../../Integration/Connectors/r-atm-Salesforce_Platform_Events_Connector_5be03def-3af7-4861-af94-b21d9ee79dfa.md).

## Salesforce REST (Tech Preview) connector

**We fixed this issue:**

- The Create, Delete, Update, and Upsert operations will throw an Application error when operations using the Composite API fail. (CONC-5513)

- The `@Type` attribute is now automatically injected into the records node when executing a Composite API request (API REST, batch size > 1) for the Create, Update, and Upsert operations. (CONC-6067, CONC-6068, CONC-5512)

To learn more, see the topic [Salesforce REST (Tech Preview) connector](../../Integration/Connectors/int-Salesforce_REST_connector_9fe91520-cc0b-451e-93da-870ea9ce9d82.md).

## Snowflake connector

**We fixed these issues:**

- Supports applying multiple filters on the same column, enabling the querying of data within a specified range, based on the column. For example, retrieving data between two dates. (CONC-656)

- The document Tracking Direction option for the Bulk Unload is updated to Output Documents by default. (CONC-6121)

**We added these features:**

- The Snowflake connector supports the key pair authentication mechanism using OpenSSL for generating public/private keys. Backward compatibility is also ensured to support the following older OpenSSL versions:

  - OpenSSL 0.9.8h
  - OpenSSL 1.1.1v
  - OpenSSL v3.x. (CONC-5379)

- The Snowflake connector can connect using the key pair authentication mechanism and generates private/public keys using the python cryptography "RSA" function within the asymmetric library. (CONC-5180)

To learn more, see the topic [Snowflake connector](../../Integration/Connectors/int-Snowflake_Connector_f551004c-1429-4fe1-85c1-b345d37ab73c.md).

## Solace PubSub + - Partner connector

**We added these features:**

- A new tracked property, **ReplyToAsString**, which displays the decoded format of the **replyTo** tracked property to improve readability. (CON-8946)

- Enhanced the logging functionality of our listener. Upon startup, the listener logs its configuration, which will significantly aid our support team during debugging processes. (CON-8946)

To learn more, see the topic [Solace PubSub + - Partner connector](../../Integration/Connectors/int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Veeva (Tech Preview) connector

**We added these features:**

- You can update the names and locations of folders and files in the Veeva Vault File Staging Server with the Update operation. (CONC-5238)

- You can delete folders and files in the Veeva Vault File Staging Server with the Delete operation. (CONC-5508)

- You can authenticate your Veeva account using OAuth 2.0 / Open ID Connect token to obtain a Vault Session ID that is used by the Connector to authenticate subsequent API calls. (CON-5241)

- A new optional connection field, **Client ID**, adds headers to Veeva API calls. If the field is empty, the default **ClientID** is `Boomi`. (CONC-5244)

- The Veeva API Server field when authenticating your Veeva account has been replaced by three new connection fields: Vault Subdomain, Vault DNS, and API Version. The default Vault Subdomain and Vault DNS is `{vault_subdomain}.veevavault.com`. The default API version is v.23.3, the current Veeva REST API GA version. (CONC-5240)

- A new operation field and checkbox: **API Version** and **Override API Version**, respectively. When **Override API Version** is selected, the operation field will override any version dictated in the connection field. (CONC-6047)

- When the Vault Authentication API burst limit is exceeded, the connector waits 60 seconds before retrying once. This retry mechanism is only available when you use the **User Credentials** authentication type. (CONC-6236)

To learn more, see the topic [Veeva (Tech Preview) connector](../../Integration/Connectors/int-Veeva_connector_2a2709f7-b72a-4f5a-96cd-c4a1ba89b4ac.md).
