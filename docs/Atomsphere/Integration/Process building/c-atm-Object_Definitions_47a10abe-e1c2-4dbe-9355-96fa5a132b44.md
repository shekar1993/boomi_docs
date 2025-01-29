# Object definitions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-47a10abe-e1c2-4dbe-9355-96fa5a132b44"/>
</head>


Use object definitions to *merge* profile elements from all the operations for a given object type into a superset of fields.

Object definitions define a logical representation of an object type. \[The object type is listed within the Operation component.\] For example, if your process contains a Salesforce Account Query operation and a Salesforce Account Upsert operation, there are separate profiles for the Account Query response and the Account Upsert request. The object definition creates a generic Salesforce Account object type with fields aggregated from both the Query and Upsert profiles.

When a map component's source and destination profiles are specified in object definitions, that map can be extended with Data map extensions.

For all SDK application connectors and the Salesforce connector, object definitions are generated automatically per connection/object. For non-SDK application connectors, arbitrary XML operations \(e.g., XML over HTTP\) and flat file operations, you must manually define objects. See the topic To Define Object Definitions for a Process.

## Content root

The content root represents the level at which XML profile elements should be merged. This concept does not apply to flat file profiles.

The content root is used to "ignore" header elements not pertinent to the object's fields and to accommodate application profiles that vary between operations. For example, the "Add Customer" and "Modify Customer" request profiles for QuickBooks Online Edition have different top level elements:

```xml
QuickBooks Add Customer Request:

<CustomerAddRq>
<CustomerAdd>    << CONTENT ROOT
<Name>
<IsActive>
...

QuickBooks Mod Customer Request:

<CustomerModRq>
<CustomerMod>    << CONTENT ROOT
<ListID>
<EditSequence>
<Name>
<IsActive>
...
```

In this example, the content root for each profile should be set to `CustomerAdd` and `CustomerMod`, respectively.

:::note

Typically, you do not have to manually set the content root for automatically-generated object definitions.

:::

:::note

If a content root is not manually set, the XML root element is used.

:::

## Aliases

Use aliases to make user-friendly labels for Profile elements. Otherwise, the raw XML profiles may have names that do not make sense to users.