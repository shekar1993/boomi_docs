# HubSpot CRM (Tech Preview) operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dcba095d-bf9e-4f70-ac44-1ffd2921982e"/>
</head>

The HubSpot CRM Connector defines how to interact with your HubSpot CRM account and enables specific actions such as **Create**, **Retrieve**, **Update**, **Search** and **Archive**. These actions are performed against specific HubSpot CRM object types, including **Contacts** and **Companies**.

- For each object required for your integration, create a separate operation component.
- The set of supported operations may vary depending on the selected object type.
- **Supported Actions**: Create, Retrieve, Update, Search amd Archive.

The following fields are available for all operations during browse:
- API Version - API version is available for selection in all the objects right now. 

    :::note 

    The connector currently supports only V3 of the HubSpot CRM API.

    :::

This setup ensures seamless integration with HubSpot CRM, offering flexibility and precise control over HubSpot CRM data management.

## Create Operation

The Create action is an outbound operation that uses JSON input to create new HubSpot CRM objects. Upon successful execution, it returns a JSON response containing details of the newly created object, including its unique ID.

**Key Features**:

- Supports creating associations between objects, depending on the object type, using the Boomi connector.
- The response for each execution contains the ID of the created object in case of a successful API call or an error message in case of API exceptions.

## Archive Operation
The Archive action is an outbound operation used to archive the HubSpot CRM objects to the recycle bin using the object's ID as input.

**Key Details**:

- The ID can be provided in two ways:
    - As a connector parameter.
    - Through an XML input profile.
- The ID field supports multiple entries, enabling the deletion of multiple objects in a single XML request.
- The response is a JSON object indicating the success or failure of the archive request for each ID provided.

## Update Operation

The Update action is an outbound operation that takes a JSON document as input to modify information for an object on the Hubspot CRM. The input document must include an ID field that specifies the record to be updated. 

Users can clear the properties of any HubSpot CRM object by passing property as empty.

Radio button field to be selected for using Email ID or ID. This property is part of operation properties and it cannot be overridden by Dynamic Operation Properties. 
The ID field will contain the value of Email ID or object ID as per the radio button selected and will be overridable using Dynamic Operation Properties.

**Object-Specific Support**:

- For Contacts, both ID and Email ID are supported.
- For other object types, only ID is supported.


## Retrieve Operation

The Retrieve action is an inbound operation used to fetch a single object from HubSpot CRM based on its ID or Email ID. The response contains the details of the retrieved HubSpot CRM object.

Radio button field to be selected for using Email ID or ID. This property is part of operation properties and it cannot be overridden by Dynamic Operation Properties. 
The ID field will contain the value of  Email ID or object ID as per the radio button selected and will be overridable using Dynamic Operation Properties
Retrieve operations return all the properties as well as default associations of the object being retrieved.

**Object-Specific Support**:

- For Contacts, both ID and Email ID are supported.
- For other object types, only ID is supported.

If no matching record is found in HubSpot CRM, an empty document is generated as the response, ensuring clear feedback in all scenarios.

## Search Operation

The Search action is an outbound operation designed to search for specific Hubspot CRM objects based on complex criteria, enabling the retrieval of objects that meet specified parameters.
This function supports targeted retrieval of Hubspot CRM objects — such as specific Contacts, Company, Deal, Ticket and Goals—that match defined filtering criteria.

The action uses cursor-based pagination to efficiently manage large result sets and supports the following operators for filtering: 

|Operator  | Description   |
|----------|---------------|
|Less Than|Less than the specified value.|
|Less Than or Equal|Less than or equal to the specified value.|
|Greater Than|Greater than the specified value.|
|Greater Than or Equal|Greater than or equal to the specified value.|
|Equal To |Equal to the specified value.|
|Not Equal To|Not equal to the specified value.|
|BETWEEN|Within the specified range. In your request, use key-value pairs to set high value and values.|
|IN|Included within the specified list. Searches by exact match. In your request, include the list values in a values array. When searching a string property with this operator, values must be lowercase.|
|NOT_IN|Not included within the specified list. In your request, include the list values in a values array. When searching a string property with this operator, values must be lowercase.|
|HAS_PROPERTY|Has a value for the specified property.|
|NOT_HAS_PROPERTY|Doesn't have a value for the specified property.|

:::note

Maximum number of documents as a response supported by HubSpot CRM is 10000.

- Pagination approach via the usage of Maximum Documents field as operation property.
    - Use this to specify the Maximum number of documents to be fetched.
    - One record per response document.
    - Value less than 1 will get all the records; by default, it is set to -1.

:::  

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.