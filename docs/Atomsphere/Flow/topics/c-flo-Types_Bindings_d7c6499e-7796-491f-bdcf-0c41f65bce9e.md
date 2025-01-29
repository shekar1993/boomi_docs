# Type Bindings

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d7c6499e-7796-491f-bdcf-0c41f65bce9e"/>
</head>


A binding is used to map properties in a type to a data source \(such as database fields\) in a .

For example, an 'Account' type could use a 'Salesforce Account' binding in order to save Account objects into the Salesforce 'Account' database table.

-   The mapping does not need to be directly to database tables in the , however, the binding should provide unique identifier information necessary for the element to insert the provided values back into the correct storage locations.

-   Bindings are typically pre-configured as part of the type installation process.


## Multiple Bindings

It is possible to have multiple bindings for the same , but with subsets of the properties mapped to different fields.

For example, you might have an 'account' type from the Hub , which has a 'quarantine entry' binding with the 'company name', 'created at', and 'quarantined at' properties bound, and another 'golden record' binding with the 'company name', 'created at' and 'source ID' properties bound. The whole type itself would have 'company name', 'created at', 'quarantined at' and 'source ID' properties, but you would only be able to see the appropriate ones for the selected binding at any time.

Another example of multiple binding is if a 'person' type is created that could \(in theory\) have two bindings - one for the SQL , and one for the Salesforce , with each binding's 'property bindings' mapping the field names in each to the correct type property. You should then be able to select either the 'SQL ' or the 'Salesforce ' binding, with the flow loading from the correct place.