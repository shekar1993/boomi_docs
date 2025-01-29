# mdm:dataQualitySteps element structure 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-15808dce-d6e1-4139-bf7f-d9572777e5e4"/>
</head>


The `<mdm:dataQualitySteps>` element corresponds to the [**Data Quality Steps** tab](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Data_Quality_tab_0c91da81-d521-4a6f-8fd3-a3f9c49151b3.md) in a Boomi DataHub model page.

`<mdm:dataQualitySteps>` has a child `<mdm:step>` element for each of the model’s data quality steps.

This example shows the high-level structure for an `<mdm:dataQualitySteps>` element that represents a business rule data quality step and a process call data quality step:

``` xml
<mdm:dataQualitySteps>
   <mdm:step name="" type="BUSINESS_RULE">
   </mdm:step>
   <mdm:step processId="" name="" type="PROCESS" sourceCondition="" fieldCondition="">
   </mdm:step>
</mdm:dataQualitySteps>
```

Data quality step properties are represented by attributes of `<mdm:step>`, each of which corresponds to a column in the **Data Quality Steps** summary list in the **Data Quality Steps** tab in Boomi DataHub:

| Attribute | Corresponds to  | Valid values                                                                                                                                                          |
|-----------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *name*      | **Name** column | any string                                                                                                                                                           |
| *type*      | **Type** column | BUSINESS\_RULE, PROCESS <br /> The model APIs do not support the type of data quality step that uses the Loqate or D&B data quality service connector. |


## `<mdm:step type="BUSINESS_RULE">` 
An `<mdm:step>` element of type BUSINESS\_RULE represents a business rule data quality step.

High-level example:

```xml
<mdm:step name="Validate Email Address" type="BUSINESS_RULE">
   <mdm:businessRule></mdm:businessRule>
</mdm:step>

```

`<mdm:step>` of type BUSINESS\_RULE has a single child element: [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md), which corresponds to the **Configure Business Rule** screen in the **Data Quality Step** wizard in Boomi DataHub.

## `<mdm:step type="PROCESS">` 
An `<mdm:step>` element of type PROCESS represents a process call data quality step.

Example:

``` xml
   <mdm:step processId="66bcc431-6568-4cc4-a4b4-a9ae6403d243" name="Custom Validation/Enrichment" type="PROCESS" sourceCondition="true" fieldCondition="true">
      <mdm:businessRule></mdm:businessRule>
      <mdm:fields>
         <mdm:field uniqueId="ACCOUNT_NAME"/>
         <mdm:field uniqueId="CONTACT"/>
      </mdm:fields>
      <mdm:sources>
         <mdm:source sourceId="SF"/>
      </mdm:sources>
   </mdm:step>
```

`<mdm:step>` of type PROCESS has the following attributes in addition to the name and type attribuites. Each of these additional attributes corresponds to or is set in a screen in the **Data Quality Step** wizard in .

|Attribute|Corresponds to|Valid values or content|
|---------|--------------|-----------------------|
|*processId*|**Process Call** screen, **Process**|Integration *process ID*|
|*sourceCondition*|**Set Step Condition -Contributing Source**|*true*, *false*|
|*fieldCondition*|**Set Step Condition - Field Changes**|*true*, *false*|

-   The *sourceCondition* attribute value true corresponds to the **Only apply this step if the record is contributed by selected sources** option in the **Set Step Condition - Contributing Source** screen in the **Data Quality Step** wizard in . In this case, `<mdm:step>` has a child `<mdm:sources>` element with one or more child `<mdm:source>` elements, each of which corresponds to a source selection in the wizard. Each `<mdm:source>` element has a sourceId attribute, the value of which specifies the subject source by its unique ID.

-   The *fieldCondition* attribute value true corresponds to either the **Only apply this step if any fields changed** or the **Only apply this step if selected fields changed** option in the **Set Step Condition - Field Changes** screen in the **Data Quality Step** wizard in . In this case, if the correspondence is to the **Only apply this step if selected fields changed** option, `<mdm:step>` has a child `<mdm:fields>` element with one or more child `<mdm:field>` elements, each of which corresponds to a field selection in the wizard screen. Each `<mdm:field>` element has a *uniqueId* attribute, the value of which specifies the subject field by its unique ID.


`<mdm:step>` of type PROCESS has an additional child [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md) element, which is optional and corresponds to the **Set Step Condition - Custom Business Rule** \(optional\) screen in the **Data Quality Step** wizard in .