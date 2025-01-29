# `<mdm:businessRule>` element structure 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-6eb50aa0-411a-4767-9813-b8d11625c4e6"/>
</head>


The `<mdm:businessRule>` element represents a business rule in a source definition, data quality step, or tag definition. The element is common to the `<mdm:sources>`, `<mdm:dataQualitySteps>`, and `<mdm:tags>` element structures.

High-level structure example:

``` xml
<mdm:businessRule name="">
   <mdm:inputs>
   </mdm:inputs>
   <mdm:conditions topLevelOperator="">
   </mdm:conditions>
   <mdm:errorMessage></mdm:errorMessage>
</mdm:businessRule>
```

:::note

The `<mdm:businessRule>` element’s name attribute does not correspond to a user interface control in . By default, the Create Model operation sets the value of this attribute to the value of the name attribute of a `<mdm:step>` of type BUSINESS\_RULE in `<mdm:dataQualitySteps>`.

:::

:::note

An empty `<mdm:businessRule>` element is valid in a Create Model operation. Note, though, that the presence of an empty `<mdm:businessRule>` element is meaningful in `<mdm:sources>` in the context of a source’s configuration for handling its entity contributions \(`<mdm:source>` element’s child `<mdm:inbound>` element\).

:::

## `<mdm:inputs\>`

The `<mdm:inputs>` element corresponds to the Inputs section of the **Configure Business Rule** dialog or screen in .

High-level structure example:

``` xml
<mdm:inputs>
   <mdm:input key="" alias="" fieldUniqueId="" type="Field"/>
   .
   .
   .
   <mdm:input key="" alias="" type="Function"/>
   .
   .
   .
</mdm:inputs>
```

`<mdm:inputs>` has a child `<mdm:input>` element representing each of the business rule’s inputs. `<mdm:input>` has a type attribute, the value of which is Field, if the input represents a field, or Function, if the input represents a function. The type attribute corresponds to the **Add**menu selection in the **Inputs** section of the **Configure Business Rule** dialog in .

For an input of either type, `<mdm:input>` has a key attribute, the value of which is an integer that uniquely identifies the input for use in the business rule’s conditions and, in the case of a business rule data quality step, the error message. The key attribute does not correspond to a user interface control in .

`<mdm:input type="Field"\>`

Example:

``` xml
<mdm:input key="1" alias="aliasName" fieldUniqueId="NAME" type="Field" />
```

An `<mdm:input>` element of type Field, in addition to the type and key attributes, has these attributes, each of which corresponds to an input property set in the **Add a Field** dialog in :

|Attribute|Corresponds to|Valid values|
|---------|--------------|------------|
|*alias*|**Alias**|Any string|
|*fieldUniqueId*|**Field**|Any value specified as the value of a uniqueId attribute of an [`<mdm:field>` element](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_element_structure_6df92ffb-2902-4df7-ae06-2062dfdd8b95.md)|

`<mdm:input type="Function"\>`

Example:

``` xml
<mdm:input key="1" alias="LeftTrim" fieldUniqueId="EMAIL" type="Function">
<mdm:function type="LeftTrim">
    <mdm:inputs>
        <mdm:input name="Original String" uniqueId="NAME" default=""/>
        <mdm:input name="Fix to Length" uniqueId="EMAIL" default=""/>
    </mdm:inputs>
</mdm:function>
```

An `<mdm:input>` element of type Function, in addition to the type and key attributes, has these attributes, each of which corresponds to an input property in an **Add a Function** dialog:

| Attribute      | Corresponds to                                                                                       | Valid values                                                                                                                                                                                                                      |
|----------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *alias*          | **Alias**                                                                                            | Any string, but typically the same as the value of the child `<mdm:function>` element’s type attribute. The value of the child `<mdm:function>` element’s type attribute is assigned as the alias value by default when creating the model. |
| *fieldUniqueId*  | **Field**                                                                                            | Any value specified as the value of a uniqueId attribute of an [`<mdm:field>` element](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_element_structure_6df92ffb-2902-4df7-ae06-2062dfdd8b95.md)                                                               |


`<mdm:input>` of type Function has a child `<mdm:function>` element. `<mdm:function>` has a type attribute, the value of which identifies the function type and corresponds to the **Functions** selection in the initial **Add a Function** dialog in .

`<mdm:function>` has a child `<mdm:inputs>` element. `<mdm:inputs>` has a child `<mdm:input>` representing each of the function’s inputs.

If `<mdm:function>` has the type attribute value StringSplit, the element also has a child `<mdm:outputs>` element.

`<mdm:outputs>` has a child `<mdm:output>` representing each of the StringSplit function’s outputs.

The lower-level structure of `<mdm:function>` is specific to its [type attribute value](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_functions_d4a6b576-3e5e-4cbc-8cfd-6ec22afa0a46.md).

## `<mdm:conditions>` 

The `<mdm:conditions>` element represents the business rule’s conditions and corresponds to the **Conditions** section of the **Configure Business Rule** dialog or screen in .

High-level structure:

``` xml
<mdm:conditions topLevelOperator="">
   <mdm:condition operator=""/>
   .
   .
   .
   <mdm:conditionGroup operator=""/>
   .
   .
   .
</mdm:conditions>

```

The `<mdm:conditions>` element’s *topLevelOperator* attribute corresponds to **Top Level Operator** in the **Conditions** section of the **Configure Business Rule** dialog or screen. The attribute’s valid values are AND and OR.

`<mdm:conditions>` has one or more child `<mdm:condition>` elements and zero, one, or more `<mdm:conditionGroup>` elements.

`<mdm:condition\>`

An `<mdm:condition>` element represents a condition in the business rule and corresponds to a list entry for the condition in the **Conditions** section of the **Configure Business Rule**dialog or screen in .

Example:

``` xml
<mdm:condition operator="EQUALS">
   <mdm:firstInput type="Field" key="1" value=""/>
   <mdm:secondInput type="Static" value="staticValue"/>
</mdm:condition>

```

`<mdm:condition>` has an operator attribute that corresponds to the operator list selection for the condition in the **Conditions** section of the **Configure Business Rule** dialog or screen. This table shows the correspondence between the operator attribute’s valid values and the operator selections in the dialog:

|operator attribute value|operator selection|
|------------------------|------------------|
|EQUAL|`=`|
|NOT_EQUAL|`!=`|
|LESS_THAN|`<`|
|GREATER_THAN|`>`|
|LESS_OR_EQUAL|`<=`|
|GREATER_OR_EQUAL|`>=`|
|CONTAINS|contains|
|NOT_CONTAINS|does not contain|
|STARTS_WITH|starts with|
|IS_EMPTY|is empty|
|IS_NOT_EMPTY|is not empty|

`<mdm:condition>` has empty child `<mdm:firstInput>` and `<mdm:secondInput>` elements.

`<mdm:firstInput>` and `<mdm:secondInput>` each have a type attribute. The valid values are Field, Function, and Static.

-   For `<mdm:firstInput>`, the type attribute corresponds to the first list selection for the condition in the **Conditions** section of the **Configure Business Rule** dialog.

-   For `<mdm:secondInput>`, the type attribute corresponds to the selection from the list immediately to the right of the operator list for the condition in the **Conditions** section of the **Configure Business Rule** dialog.


An `<mdm:firstInput>` or `<mdm:secondInput>` element of type Fieldor Function has a key attribute, the value of which is the same as the value of the corresponding `<mdm:input>` element’s key attribute. For either `<mdm:firstInput>` or `<mdm:secondInput>` of type Function, if the function type is StringSplit, the element has an additional outputfieldname attribute. This value is the same as the one of the name attribute for the corresponding `<mdm:output>` element in `<mdm:function>`.

An `<mdm:firstInput>` or `<mdm:secondInput>` element of type Static has a value attribute, of which it is a static value.

`<mdm:conditionGroup>`

An `<mdm:conditionGroup>` element represents a condition group in the business rule and corresponds to a list entry for the condition group in the **Conditions** section of the **Configure Business Rule** dialog or screen in .

Example:

``` xml
<mdm:conditionGroup operator="AND">
   <mdm:condition operator="NOT_EQUAL">
      <mdm:firstInput type="Function" key="2"/>
      <mdm:secondInput type="Field" value="1"/>
   </mdm:condition>
   <mdm:conditionGroup operator="OR"></mdm:conditionGroup>
</mdm:conditionGroup>

```

The `<mdm:conditionGroup>` element’s operator attribute corresponds to **Group Level Operator** in the **Conditions** section of the **Configure Business Rule** dialog or screen. The attribute’s valid values are AND and OR.

`<mdm:conditionGroup>` has one or more child `<mdm:condition>` elements and zero, one, or more child `<mdm:conditionGroup>` elements.

## `<mdm:errorMessage>`

The `<mdm:errorMessage>` element corresponds to the **Error Message** section of the **Configure Business Rule** screen in the **Data Quality Step** wizard for a business rule data quality step in Boomi DataHub.

Example:

``` xml
<mdm:errorMessage>
   Invalid Name field value
</mdm:errorMessage>
```

:::note

Dynamic content in the error message is specified within braces — for example, `{1}`. However, you cannot specify dynamic content in a Create Model request.

:::