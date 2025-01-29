# Connector functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4002e9a2-48ef-40dc-86b8-600476a34659"/>
</head>


Connector functions are a type of map function.

|Name|Parameters/Fields|Description|
|------|-------------------|-------------|
|Connector Call|-   Connector<br />-   Connection<br />-   Operation<br />-   Inputs: One for each filter/input parameter required by the operation<br />-   Outputs: One for each value from the response message to be returned|Perform a call out to any application connector. Typically used to perform cross-reference lookups or obtain supplemental data.|


:::note

The Atom Map Extension object and Environment Map Extension object of the AtomSphere API do not support this function.

:::