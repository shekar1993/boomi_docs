# Using the NetSuite connector for searches 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a43961b4-c761-4fe3-99c5-e6be62497b21"/>
</head>


The NetSuite connector uses NetSuite’s Basic and Advanced searches.

Advanced Searches may reference existing saved searches, may use filters, and may override existing search return columns. We differentiate the connector’s searches by using the terms Advanced Search and Saved Search.

-   Basic Searches return a copy of any objects that meet the filter criteria. Field selection is not available. Search joins, which are part of a basic search object, let you include criteria from a related object.
-   Advanced Searches expose the same search criteria as the Basic Search but include an optional filter to specify a saved search ID, which can be used to run Saved Searches. You can also specify columns to be returned from the target object and from related objects.

-   Saved Searches are searches built and saved in Netsuite. These searches can be invoked using an Advanced Search with a filter that references the saved search by script id \(recommended\) or internal ID. Unless you add this filter, you are not referencing a Saved Search. You can configure fields to include return columns in the response. These selected fields override the return columns defined in the NetSuite Advanced Search. You can also configure additional filters that augment the search criteria defined in the NetSuite Advanced Search.


NetSuite custom fields within Advanced Search browse NetSuite’s user interface then list all of the defined fields. This browse function in Advanced Search works for all NetSuite versions supported in the connector. Within each profile, an element is generated for every object that supports custom fields and holds the field definition. Profiles work as they did previously, but you should re-import them to use custom fields through the process.

For step-by-step directions, see the topic “Performing a Saved or Advanced Search in NetSuite.”