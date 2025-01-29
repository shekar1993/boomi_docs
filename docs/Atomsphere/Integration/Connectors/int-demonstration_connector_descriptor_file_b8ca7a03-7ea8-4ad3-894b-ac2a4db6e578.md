# Demonstration connector descriptor file 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b8ca7a03-7ea8-4ad3-894b-ac2a4db6e578"/>
</head>

The demonstration \(demo\) connector descriptor file \(`connector-descriptor.xml`\) is an XML file that describes the capabilities of the demo connector. The descriptor is provided in the `connector-sdk-demo-source.jar` file in the Connector SDK artifacts and contains the source code for the demo connector.

## Demonstration connector descriptor examples 
The demo connector descriptor is intended to illustrate and showcase certain features that you can build into a custom connector, including:

-   Shared operation configuration applying to multiple operation types.
-   Query filter configuration.
-   Custom operation configuration, including the `@trackedDocument="user"` attribute allowing users to select the tracking direction for an operation, and various field type declarations.

## Shared operation descriptor configuration 

The demo connector descriptor allows configurations to be applied to multiple operations. Here is a simple configuration for multiple operations:

```java

<operation types="GET|CREATE|DELETE"/>
<operation types="UPDATE">
     <field id="replace" label="Replace" type="boolean">
         <helpText>Whether the new content is a partial update (false) or a complete replacement (true)</helpText>
            <defaultValue>false</defaultValue>
     </field>
</operation>
```

## Query filter descriptor configuration 

The demo connector descriptor allows the configuration of Query filters. Here is a simple configuration for a Query operation:

```java

<operation types="QUERY">
     <queryFilter grouping="noNestingImplicitAnd">
          <operator id="EQUALS" label="Equal To"/>
          <operator id="NOT_EQUALS" label="Not Equal To"/>
          <operator id="GREATER_THAN" label="Greater Than"/>
          <operator id="LESS_THAN" label="Less Than"/>
          <operator id="GREATER_THAN_OR_EQUALS" label="Greater Than Or Equal"/>
          <operator id="LESS_THAN_OR_EQUALS" label="Less Than Or Equal"/>
          <operator id="IN_LIST" label="In">
               <helpText>Comma separated list of values</helpText>
          </operator>
     </queryFilter>
</operation>
```

## Custom operation descriptor configuration 

The demo connector descriptor allows the configuration of custom operations, utilization of the `@trackedDocument="user"` attribute allowing users to select the tracking direction for the operation, and the configuration of various field type declarations. Here is a simple custom configuration for an Execute operation:

```java

<operation types="EXECUTE" customTypeId="ECHO" customTypeLabel="Echo Fields" trackedDocument="user">
     <field id="integerField" label="Integer Field" type="integer">
          <helpText>This field will only accept integer values</helpText>
     </field>
     <field id="stringField" label="String Field" type="string">
          <helpText>This field will accept any string value</helpText>
     </field>
     <field id="passwordField" label="Password Field" type="password">
          <helpText>This field will accept any string value and save it encrypted throughout the system</helpText>
     </field>
     <field id="listField" label="List Field" type="string" displayType="list">
          <helpText>This field allows you to specify a list of allowed values and provides a drop down for selecting a value</helpText>
          <allowedValue><value>Hello</value></allowedValue>
          <allowedValue><value>Hi</value></allowedValue>
          <allowedValue><value>Greetings</value></allowedValue>
     </field>
     <field id="radioField" label="Radio Field" type="integer" displayType="radio">
          <helpText>This field allows you to specify a list of allowed values and provides radio buttons for selecting a value</helpText>
          <defaultValue>2</defaultValue>
          <allowedValue label="One"><value>1</value></allowedValue>
          <allowedValue label="Two"><value>2</value></allowedValue>
          <allowedValue label="Three"><value>3</value></allowedValue>
     </field>
     <field id="booleanField" label="Boolean Field" type="boolean">
          <helpText>This field stores a boolean value</helpText>
     </field>
</operation>
```