# `<mdm:fields> element structure` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-6df92ffb-2902-4df7-ae06-2062dfdd8b95"/>
</head>


The `<mdm:fields>` element corresponds to the [**Fields tab**](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Fields_tab_9e5fde15-a465-47ec-a587-06319c089ece.md) in a model page.

-   `<mdm:fields>` has a child `<mdm:field>` element representing each of the model’s fields.

-   `<mdm:fields>` has a child `<mdm:fieldGroup>` element representing each of the model’s field groups.


This example shows the high-level structure of the `<mdm:fields>` element:

``` xml
<mdm:fields>
   <!-- text field -->
   <mdm:field name="" repeatable="false" required="" type="STRING" uniqueId="" minLength="" maxLength="" regex=""/>
   <!-- collection field -->
   <mdm:field name="" repeatable="true" required="" type="STRING" uniqueId="" identifyBy="" collectionTag="" collectionUniqueId=""/>
   <!-- reference field -->
   <mdm:field name="" repeatable="false" required="" type="REFERENCE" uniqueId="" incomingReferenceIntegrity="" outgoingReferenceIntegrity="" referenceUniverseId=""/>
   <!-- collection reference Field -->
   <mdm:field name="" repeatable="true" required="" type="REFERENCE" uniqueId="" identifyBy="" collectionTag="" collectionUniqueId="" incomingReferenceIntegrity="" outgoingReferenceIntegrity="" referenceUniverseId=""/>
   <!-- enumeration field -->
   <mdm:field name="" repeatable="" required="" type="ENUMERATION" uniqueId="">
      <mdm:value></mdm:value>
      .
      .
      .
      <mdm:value></mdm:value>
   </mdm:field>

   <!-- non-repeatable field group -->
   <mdm:fieldGroup name="" repeatable="false" required="" uniqueId="">
      <mdm:field name="" repeatable="false" required="" type="STRING" uniqueId="" minLength="" maxLength="" regex=""/>
      <mdm:field name="" repeatable="true" required="" type="STRING" uniqueId="" identifyBy="" collectionTag="" collectionUniqueId=""/>
      <mdm:field name="" repeatable="false" required="" type="REFERENCE" uniqueId="" incomingReferenceIntegrity="" outgoingReferenceIntegrity="" referenceUniverseId=""/>
      <mdm:field name="" repeatable="true" required="" type="REFERENCE" uniqueId="" identifyBy="" collectionTag="" collectionUniqueId="" incomingReferenceIntegrity="" outgoingReferenceIntegrity="" referenceUniverseId=""/>
   </mdm:fieldGroup>
   <!-- collection (repeatable field group) -->
   <mdm:fieldGroup name="" repeatable="true" required="" uniqueId="" collectionKeys="" identifyBy="" collectionTag="" collectionUniqueId="">
      <mdm:field name="" repeatable="false" required="" type="STRING" uniqueId="NAME" minLength="" maxLength="" regex=""/>
      <mdm:field name="" repeatable="true" required="" type="STRING" uniqueId="" identifyBy="" collectionTag="" collectionUniqueId=""/>
   </mdm:fieldGroup>
</mdm:fields>

```

## `<mdm:field>` 

Field properties are represented by attributes of `<mdm:field>`.

For a field of any type, `<mdm:field>` has a *uniqueId* attribute, the value of which corresponds to the ID shown in the **Unique ID** column of the fields summary list in the Fields tab in Boomi DataHub. This ID is automatically assigned when creating a field in Boomi DataHub. In a Create Model or Update Model request, the uniqueId attribute is required and must have a unique value. The unique ID value cannot contain spaces, special characters, or lowercase characters. 

For a field of any type, the following are additional `<mdm:field>` attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog and the Modify Field Properties dialog in Boomi DataHub:Field Properties** dialog in :

| Attribute  | Corresponds to | Valid values                                                                                             | Notes |
|------------|----------------|---------------------------------------------------------------------------------------------------------- | --------------                                                                                                |
| *name*       | **Name**       | any string, subject to [length limitations](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Fields_tab_9e5fde15-a465-47ec-a587-06319c089ece.md)   |   |
| *repeatable* | **Can Repeat** | true, false                                                                                              |   |
| *required*   | **Required**   | true, false                                                                                              |      |
| *type*       | **Type**       | <ul><li>BOOLEAN</li><li>CLOB</li><li>DATE</li><li>DATETIME</li><li>ENUMERATION</li><li>FLOAT</li><li>INTEGER</li><li>REFERENCE</li><li>STRING</li><li>TIME</li></ul> |    |
| *masked*     |  **Masked**    | <ul><li>ALL</li><li>PARTIAL MASK</li><li>PARTIAL SHOW</li></ul> | PARTIAL MASK and PARTIAL SHOW are not available for Boolean and Reference field types. ALL is not available for Reference field types. Masked fields set to ALL show five asteriks to represent the masked field, hiding the actual character length.The *masked* attribute has additional attributes to specify the amount of characters to mask and whether to mask the first, last or both portions of the value. One of these attributes is required when using PARTIAL MASK or PARTIAL SHOW. Read [Data masking](#data-masking) to learn more|

`<mdm:field type="STRING">`

Example:

``` xml
<mdm:field name="Web URL" repeatable="false" required="true" type="STRING" uniqueId="WEB_URL" minLength="10" maxLength="100" regex="/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"/>
```

`<mdm:field>` of type STRING \(a Text field\) has additional attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog and the **Modify Field Properties** dialog in Boomi DataHub:

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*minLength*|**Minimum Text Length**|integer|
|*maxLength*|**Maximum Text Length**|integer, maximum 255|
|*regex*|**Regular Expression**|[regular expression](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html)|

`<mdm:field repeatable="true">`

Example:

``` xml
<mdm:field name="Nickname" repeatable="true" required="false" type="STRING" uniqueId="NICKNAMES" identifyBy="KEY" collectionTag="Nicknames" collectionUniqueId="NICKNAMES"/>
```

`<mdm:field>` with a repeatable attribute value of true\(a collection field\) has additional attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog, and the **Modify Field Properties** dialog in Boomi DataHub:

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*identifyBy*|**Identify By**|KEY, OCCURRENCE|
|*collectionTag*|**Collection Tag**|any string|

An additional attribute, *collectionUniqueId*, is automatically assigned to a collection field upon its creation in Boomi DataHub. Its value does not appear in the fields summary list or a properties dialog.

`<mdm:field type="REFERENCE">`

Example:

``` xml
<mdm:field name="manager" repeatable="false" required="false" type="REFERENCE" uniqueId="MANAGER" incomingReferenceIntegrity="true" outgoingReferenceIntegrity="true" referenceUniverseId="a0d2040e-40ac-4d21-97ee-d44f2d72fb22"/>
```

`<mdm:field>` of type REFERENCE \(a Reference field\) has additional attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog and the **Modify Field Properties** dialog in Boomi DataHub:

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*incomingReferenceIntegrity*|**Enforce Incoming**|*true*, *false*|
|*outgoingReferenceIntegrity*|**Enforce Outgoing**|*true*, *false*|
|*referenceUniverseId*|**Refers To Model**|system ID of the referenced model|

`<mdm:field type="ENUMERATION">`

Example:

``` xml
<mdm:field name="state" repeatable="false" required="false" type="ENUMERATION" uniqueId="STATE">
   <mdm:value>Alabama</mdm:value>
   <mdm:value>Alaska</mdm:value>
   <mdm:value>American Samoa</mdm:value>
   . . .
   <mdm:value>Wyoming</mdm:value>
   </mdm:field>

```
## <a name="data_masking"></a>Data masking

`<mdm:field>` attribute PARTIAL MASK has additional attributes, each of which corresponds to a property set in the **Add a Field** or or **Field Group** dialog and the **Modify Field Properties** dialog in Boomi DataHub:

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*firstMaskCharsCount*|**First**|1 through 255. It indicates how many characters to mask starting from the first character.|
|*lastMaskCharsCount*|**Last**|1 through 255. It indicates how many characters to mask starting from the last character.|

`<mdm:field masked="PARTIAL MASK">`

Example: 

```xml
<mdm:fieldGroup name="address" repeatable="false" required="false" uniqueId="ADDRESS">
            <mdm:field name="street" repeatable="false" required="false" type="STRING" uniqueId="STREET" masked="PARTIAL MASK" firstMaskCharsCount="2" lastMaskCharsCount ="3"/>
            <mdm:field name="city" repeatable="false" required="false" type="STRING" uniqueId="CITY"/>
    </mdm:fieldGroup>
```
:::note

To see masked data, the user needs either the **MDM - Reveal Masked Data** privilege or the **Reveal Masked Data** entitlement. Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more.

:::


`<mdm:field>` of type ENUMERATION \(an Enumeration field\) has a child `<mdm:value>` element representing each enumerated value. `<mdm:value>` contains the enumerated value.

## `<mdm:fieldGroup>` 

`<mdm:fieldGroup>` has a child `<mdm:field>` element representing each of the field group’s fields and a child `<mdm:fieldGroup>` element representing each of the field group’s nested field groups.

This example shows the structure of a non-repeatable field group consisting of two fields:

``` xml
<mdm:fieldGroup name="Street Address" repeatable="false" required="true" uniqueId="STREET_ADDRESS">
   <mdm:field name="Address 1" repeatable="false" required="true" type="STRING" uniqueId="ADDRESS_1"/>
   <mdm:field name="Address 2" repeatable="false" required="false" type="STRING" uniqueId="ADDRESS_2"/>
</mdm:fieldGroup>

```

Field group properties are represented by attributes of `<mdm:fieldGroup>`.

`<mdm:fieldGroup>` has a uniqueId attribute, the value of which corresponds to the ID shown in the **Unique ID** column of the fields summary list in the **Fields** tab in Boomi DataHub. When creating a field group in Boomi DataHub, this ID is automatically assigned. In a Create Model or Update Model request, the uniqueId attribute is required and must have a unique value. The unique ID cannot contain spaces, special characters, or lowercase characters.

For a field group, the following are additional `<mdm:fieldGroup>` attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog and the **Modify Field Group Properties** dialog in Boomi DataHub: 

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*name*|**Name**|any string, subject to [length limitations](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Fields_tab_9e5fde15-a465-47ec-a587-06319c089ece.md)|
|*repeatable*|**Can Repeat**|true, false|
|*required*|**Required**|true, false|

`<mdm:fieldGroup repeatable="true">`

Example:

``` xml
<mdm:fieldGroup name="website" repeatable="true" required="false" uniqueId="WEBSITES" identifyBy="KEY" collectionTag="websites" collectionUniqueId="WEBSITES" collectionKeys="SITEURL">
   <mdm:field name="sitename" repeatable="false" required="false" type="STRING" uniqueId="SITENAME"/>
   <mdm:field name="siteurl" repeatable="false" required="false" type="REFERENCE" uniqueId="SITEURL" incomingReferenceIntegrity="false" outgoingReferenceIntegrity="false" referenceUniverseId="502a38c3-51d6-45b4-a679-36e6a35207cc"/>
</mdm:fieldGroup>
```

`<mdm:fieldGroup>` with a repeatable attribute value of true \(a collection\) has additional attributes, each of which corresponds to a property set in the **Add a Field** or **Field Group** dialog and the **Modify Field Group Properties** dialog in Boomi DataHub:

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*identifyBy*|**Identify By**|KEY, OCCURRENCE|
|*collectionTag*|**Collection Tag**|any string|
|*collectionKeys*|**Collection Keys**|Comma-delimited `<mdm:field>` *uniqueId* attribute values|

An additional attribute, *collectionUniqueId*, is automatically assigned to a collection upon its creation in Boomi DataHub. Its value does not appear in the fields summary list or a properties dialog.