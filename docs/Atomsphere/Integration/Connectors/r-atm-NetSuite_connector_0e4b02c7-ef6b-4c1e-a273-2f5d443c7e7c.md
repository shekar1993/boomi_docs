import TrackedProperties from './_TrackedProperties.md'

# NetSuite connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d0c7e257-1e77-4b64-a2c1-635da784f54b"/>
</head>


NetSuite is a financial management solution allowing you to manage IT costs, optimize accounting efficiency, streamline order management and procurement processes.

Using the NetSuite connector, you can use a Boomi Integration process to insert, retrieve, look up, delete, and update data in your NetSuite account \(NetSuite On-Demand Application Suite, and NetSuite OneWorld Global ERP\). You can integrate on-premise and legacy solutions with NetSuite, and also integrate with On-Demand and SaaS-based solutions such as Salesforce and SAP. Integrating with NetSuite consists of web service calls using an XML request and response made over an HTTPS connection.

#### SuiteTalk SOAP-based web services API

The NetSuite connector uses the SuiteTalk SOAP-based web services API to move data into and out of your NetSuite account, and simplifies working with the API by:

-   Making it easy to work with custom fields. When using the Query action, you can use NetSuite's search criteria for objects \(including multi-select customizations\) by referencing custom fields. Query filters for **RecordRef** or **List** fields include **CustomLists** and **Multiselect** fields. You also have options to disable mandatory custom field validation and system notes for custom fields.
-   Retrieving and providing the text values for list-type fields and internal IDs when querying. For example, it is easier to add query filters to retrieve a custom list of items from inventory.
-   Streamlining the handling of multi-select and select references to objects by using comma-delimited values. When defining **Parameter Values**, you can enter a comma-delimited list in the **Static Value** field.
-   Improving performance when inserting or updating large sets of documents by grouping them into batches.

#### Standard and Custom Record Types

The NetSuite connector exposes all standard and custom record types available in your NetSuite account. You can browse the list and import the records you want to work with to automatically generate the request and response XML profiles, including all standard and custom fields \(except custom segments\). However, if you later modify the record type in NetSuite, such as adding or renaming a custom field, you must reimport the record to update the connector operation. The reimport is required because the operation component caches the NetSuite internal metadata about the record type, such as NetSuite data types and custom field script IDs, to facilitate the interaction.

When reading and writing, the NetSuite connector manipulates the raw XML data for custom fields to simplify working with Integration profiles and mapping. It can make the document data within Integration differ slightly when viewed within the NetSuite Web Services Usage Logs. Specifically, during imports the NetSuite connector uses NetSuite’s **Description** field as the element name and caches the custom field script ID within the operation component. This produces a more strongly-typed XML and avoids the need to use qualifiers in the XML profile to access a specific custom field.

Here is an example snippet from NetSuite:

```
<ns2:customField xsi:type="ns2:StringCustomFieldRef" internalId="CUSTENTITYMYCUSTOMFIELD123">
<ns2:value>My Value</ns2:value>
</ns2:customField>
```

Here is the corresponding document data in Integration:

```
<ns2:My_Custom_Field_123 xsi:type="ns2:StringCustomFieldRef" internalId="CUSTENTITYMYCUSTOMFIELD123">
<ns2:value>My Value</ns2:value>
</ns2: My_Custom_Field_123>
```

#### Error Processing

The NetSuite connector handles processing errors in different ways depending on the error type.

-   If records in NetSuite are damaged, such as having a dropped bit, it activates a process-level exception and processing stops.
-   If a connection or authorization error occurs, Integration retries the connector run based on the **Number of Retries** setting in the connection.
-   If a document error occurs, such as an invalid ID or damaged data in a document, processing does not stop.

#### Connection Pooling

The NetSuite connector automatically manages connection pooling behind the scenes to avoid exceeding the maximum number of allowed concurrent connections when multiple processes attempt to call NetSuite. For example, when two processes try to query NetSuite simultaneously, the second process waits to make the call until the first process is complete.

:::note

Connection pooling does not span across JVMs \(Molecule nodes or Atom Cloud forked executions\). When scheduling NetSuite processes to a Molecule or Atom Cloud, either stagger runs or run them sequentially.

:::

## Connector configuration 

To configure a connector to communicate with NetSuite, set up two components:

-   NetSuite connection
-   NetSuite operation

This approach creates reusable components that contain connection settings \(such as URL, User, Password, Account\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your NetSuite connector step within a process. With the profiles generated during the operation configuration, a Boomi Integration process can map to and from virtually any system using the NetSuite connector to retrieve data from or send data to the NetSuite application.

## Prerequisites 

To implement a connection to your NetSuite account from Integration, do the following:

-   For user credentials authentication, have your user name, password, NetSuite account number to access the NetSuite web service, and application ID.
-   For token-based authentication \(recommended\), have your NetSuite account number, consumer key and secret, token Id and secret, and application ID. In NetSuite, you must also enable token-based authentication for your NetSuite account, create a custom role, assign the role to the appropriate user, create a new integration record for Boomi Integration, and create an access token. For complete details to configure the NetSuite connection with token-based authentication, see the [How to configure the NetSuite Connection with Token Based Authentication](https://community.boomi.com/s/article/howtoconfigurethenetsuiteconnectionwithtokenbasedauthentication) article in the Boomi Community.
-   For both user credentials and token-based authentication, confirm that your NetSuite account includes privileges to connect to the NetSuite API.
-   Deploy an Atom on your local machine or hosted with Boomi Integration.
-   Know which interface\(s\) from a business process perspective you are going to integrate. For example, you may want to upload sales orders from a flat file into NetSuite.

## Supported editions 

At any time the six latest endpoints are supported by NetSuite.  Change notes for the supported NetSuite editions are located in the [NetSuite change notes](r-atm-NetSuite_change_notes_2a04b240-e20f-413c-9e14-5ab25312b008.md#) topic.

With 2023.2, the supported WSDL versions are: 
- 2023.2 
- 2023.1 
- 2022.2 
- 2022.1 
- 2021.2 
- 2021.1.

The following endpoints are available but not supported by NetSuite: 
- 2020.1 
- 2019.2 
- 2019.1 
- 2018.2 
- 2018.1 
- 2017.2 
- 2017.1  

Updating these endpoints to one of the supported WSDL versions is recommended.

NetSuite has sunset for 2016.1 and 2016.2 or older endpoints. If you are connecting to these endpoints, upgrading to the supported WSDL endpoints is imperative.

For more information, [refer to NetSuite documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N3418621.html#Support-for-Existing-WSDL-Versions).


:::note

When creating a NetSuite connection, you may not see the version of the NetSuite API you are using or upgrading to in the **Version** field. For example, if you upgrade your NetSuite application instance to NetSuite 2022.1 but you cannot select version 2022.1 in the connection. New and existing integration processes that access previous API versions work with the latest NetSuite interface version. You only need to use the 2022.1 API to access version-specific features.

:::


<TrackedProperties />