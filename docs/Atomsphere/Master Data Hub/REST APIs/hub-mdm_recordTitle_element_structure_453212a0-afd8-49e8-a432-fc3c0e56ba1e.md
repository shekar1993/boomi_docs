# `<mdm:recordTitle> element structure` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-453212a0-afd8-49e8-a432-fc3c0e56ba1e"/>
</head>


The `<mdm:recordTitle>` element represents the model’s record title format and corresponds to the [**Record Title Field** tab](/docs/Atomsphere/Master%20Data%20Hub/Menu/hub-Record_Title_Format_tab_1b46aab2-28fe-4f93-9333-8cb0d93a42bf.md) in a Boomi DataHub model page.

Example:

```xml
<mdm:recordTitle>
   <mdm:titleParameters>
      <mdm:parameter uniqueId="ACCOUNT_NAME"/>
      <mdm:parameter staticConstant=" - "/>
      <mdm:parameter uniqueId="WEBSITE"/>
   </mdm:titleParameters>
</mdm:recordTitle>
```

`<mdm:recordTitle>` has a child `<mdm:titleParameters>` element, which has one or more empty child `<mdm:parameter>` elements. A `<mdm:parameter>` element has one but not both of these attributes:

-   The *uniqueId* attribute corresponds to a selection in the field list in the **Record Title Format** tab. The attribute value specifies a field in the record title format by its unique ID.

-   The *staticConstant* attribute value corresponds to static content entered in the **Record Title Format** field between two field representations.

:::note

You cannot publish models with masked fields in the record title.

:::