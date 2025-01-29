# OData API support for Salesforce Lightning Connect

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2a66a690-332c-4b21-8624-8787d9158f4a"/>
</head>


Configure the API for OData when you want to integrate data across system boundaries so you can view, search, and modify data stored outside your Salesforce organization.

Here are some things to be aware of when setting up the APIs OData tab for Lightning Connect:

-   Lightning Connect supports OData complex types.

-   External data of complex type is flattened into a string that contains field names and values. For example, an address is flattened into the string `Street: 55 East 5th Street, City: New York, State: NY, Zip:10003`

-   An external object custom field associated with an OData complex type on the external system is always read-only, even if the external object is writable.

-   The OData service returns Salesforce filtering logic, which is useful to reduce the number of items returned.


To learn how to configure Salesforce Connect, go to the [Salesforce Success Community](https://help.salesforce.com/HTViewHelpDoc?id=platform_connect_about.htm).

To learn more about OData 2.0 Complex Types, go to [OData 2.0 Type Mapping](https://help.salesforce.com/apex/HTViewHelpDoc?id=odata_type_mapping_v2.htm&language=en_US). 