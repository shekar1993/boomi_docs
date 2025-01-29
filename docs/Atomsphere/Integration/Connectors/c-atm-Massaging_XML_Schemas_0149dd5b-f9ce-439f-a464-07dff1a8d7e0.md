# XML schemas massaged

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0149dd5b-f9ce-439f-a464-07dff1a8d7e0"/>
</head>


You may need to manipulate an XML schema for a SOAP web service before returning it in the `ObjectDefinition`. Typically, the more complete the XML schema definition that is returned, the better for the user.

## Handling "choice", "any", or abstract types 

A schema can use "choice", "any", or abstract types to define a common container type that holds other object types. During a connector browse operation, the user may want only a single concrete object type used as the content of "choice", "any", or abstract type constructs.

For these browse operations, re-write the definition in the schema before returning it in the `ObjectDefinition`.

```xml
<xs:schema>
  <xs:complexType name="ObjectList">
    <xs:sequence>
      <xs:any minOccurs="0" maxOccurs="unbounded"/>
    </xs:sequence>
  <xs:complexType>
  <xs:complexType name="Contact">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
    </xs:sequence>
  <xs:complexType>
<xs:schema>
```

If the resulting type for the `ObjectDefinition` includes an `ObjectList` that only contains Contact instances, enhance the schema before it is returned in the `ObjectDefinition`.

1.  Extend the `WSBrowser` class and override the `getObjectDefinitions()` method. Assume that this method is used to generate the `ObjectDefinitions` for the custom connector.

    ```java
    @Override
        protected ObjectDefinitions getObjectDefinitions(WebServiceOperation op, Collection<ObjectDefinitionRole> roles,
                                                         SchemaMap schemaDocMap)
            throws SchemaModelException
        {
            // find the appropriate schema from the schemaDocMap
            Document schemaDoc = ...;
    
            // find the "sequence" element on the "ObjectList" type
            Element sequenceEl = ...;
    
            // find the "any" construct and change it to a typed element
            Element anyEl = sequenceEl.getChild("any", xmlSchemaNS);
            anyEl.setName("element");
            contactEl.setAttribute("name", "contact");
            contactEl.setAttribute("type", "Contact");
    
            return super.getObjectDefinitions(op, roles, schemaDocMap);
        }
    ```


Your final schema looks like this:

```xml
<xs:schema>
  <xs:complexType name="ObjectList">
    <xs:sequence>
      <xs:element name="contact" type="Contact" minOccurs="0" maxOccurs="unbounded"/>
    </xs:sequence>
  <xs:complexType>
  <xs:complexType name="Contact">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
    </xs:sequence>
  <xs:complexType>
<xs:schema>
```