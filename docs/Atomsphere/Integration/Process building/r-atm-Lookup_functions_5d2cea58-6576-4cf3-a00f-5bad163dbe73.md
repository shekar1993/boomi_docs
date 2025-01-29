# Lookup functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5d2cea58-6576-4cf3-a00f-5bad163dbe73"/>
</head>


Lookup functions are a type of map function.

|Name|Parameters/Fields|Description|
|------|-------------------|-------------|
|SQL Lookup|-   **Connection**: Database Connection to query.<br />-   **Type**: Standard or Stored Procedure.<br />-   **SQL Statement to Execute**: Query statement to execute.<br />-   **Inputs**: One for each dynamic parameter in the query.<br />-   **Outputs**: One for each column in the result set.|Execute a static or dynamic SELECT query against a database. Typically used to perform cross-reference lookups or obtain supplemental data. **Note:** The Atom Map Extension object and Environmental Map Extension object of the AtomSphere API do not support this function.|
|Cross Reference Lookup|-   **Cross Reference Table**: Used to select a cross reference component.<br />-   **Lookup References**: Cross reference inputs from source.<br />-   **Values**: Cross reference outputs to destination.|Perform static cross reference translations against a specific Cross Reference Table component.|
|Document Cache Lookup|-   **Choose Document Cache**: Document Cache component to query.<br />-   **Cache Index**: Document Cache component's index to use.<br />-   **Outputs**: Choose one or more elements from the Document Cache component's profile to be used as outputs.|Perform a dynamic lookup against a Document Cache component and retrieve particular fields from a document.<br />If the lookup returns more than one document, you will receive an error message.|
|Simple Lookup|-   **Add Row**: Used to add a key/value pair.<br />-   **Delete Row\(s\)**: Used to delete the selected key/value pair\(s\).<br />-   Selection check box — Used to select one or more key/value pairs.<br />-   **Key**: Column for entering keys.<br />-   **Value**: Column for entering values.|Basically the same as the cross reference lookup, but limited to one key returning a single value. There is no component associated with this function, therefore it cannot be shared or reused. The table of key/value pairs is embedded within the function.<br />These lookup functions can be set up in maps or in data map extensions.|