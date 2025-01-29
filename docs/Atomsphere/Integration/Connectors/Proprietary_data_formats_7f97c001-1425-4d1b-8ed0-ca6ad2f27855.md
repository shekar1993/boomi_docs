# Proprietary data formats 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7f97c001-1425-4d1b-8ed0-ca6ad2f27855"/>
</head>


When using the Connector SDK to build a connector, use these techniques for operations with data sources in proprietary formats. Some of the “standard”  connectors \(for example, the FTP, HTTP, and Disk connectors\) implement operations on data in proprietary formats.

## Introduction 

Commercial web service APIs are typically XML-based, either SOAP or REST. The Connector SDK is typically used to develop connectors where the operations use XML input and output data profiles. JSON \(JavaScript Object Notation\) is often used as an alternative to XML, and you can use the Connector SDK to develop connectors where the operations use JSON v4-compliant or v3-compliant input and output data profiles.

:::note

The Connector SDK has a limitation and does not currently support certain keywords \(for example, allOf\) of the JSON v4 schema specification.

:::

## Operation design considerations \(browsing required/not required?\) 

When designing a connector to implement operations with data sources in proprietary format, ask yourself the following:

1.  Does the operation need to support browsing by the user \(**Import Wizard**\) to import an object profile?
2.  Does each operation require input data or create output data?

### Browsing is required

For operations where browsing is required, set the `inputType` and `outputType` fields in the `ObjectDefinition` in the connector browser implementation to specify whether the operation requires input data in a proprietary format, or creates output data in a proprietary format.

###### Code samples

**Input data in a proprietary format**   
```java
ObjectDefinition def = new ObjectDefinition();
def.setInputType(ContentType.BINARY);

```

**No input data**   
```java
ObjectDefinition def = new ObjectDefinition();
def.setInputType(ContentType.NONE);
```

**Output data in a proprietary format**
```java
ObjectDefinition def = new ObjectDefinition();
def.setOutputType(ContentType.BINARY);
```

**No output data**
```java
ObjectDefinition def = new ObjectDefinition();
def.setOutputType(ContentType.NONE);
```

### Browsing is not required

For operations where browsing is not required, edit the operation definition in the connector descriptor.

#### Descriptor samples

**Input data in a proprietary format**
```java
<operation types="QUERY" supportsBrowse="false" inputType="binary" outputType="none"></operation>
```

**Output data in a proprietary format**
```java
<operation types="UPDATE" supportsBrowse="false" inputType="none" outputType="binary"></operation>
```
