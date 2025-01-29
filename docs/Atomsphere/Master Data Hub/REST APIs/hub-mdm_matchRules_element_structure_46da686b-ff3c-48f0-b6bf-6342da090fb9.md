# mdm:matchRules element structure 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-46da686b-ff3c-48f0-b6bf-6342da090fb9"/>
</head>


The `<mdm:matchRules>` element corresponds to the [**Match Rules** tab](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Match_Rules_tab_0454873e-bfcd-4375-9170-df8312ff97d8.md) in the Boomi DataHub page for the model.

`<mdm:matchRules>` has a child `<mdm:matchRule>` element representing each of the model’s match rules.

This example shows the high-level structure for an `<mdm:matchRules>` element that represents a model’s three match rules:

```xml
<mdm:matchRules>
   <mdm:matchRule topLevelOperator="AND">
   </mdm:matchRule>
   <mdm:matchRule topLevelOperator="OR">
   </mdm:matchRule>
   <mdm:matchRule topLevelOperator="NOT">
   </mdm:matchRule>
</mdm:matchRules>
```

The `<mdm:matchRules>` element’s topLevelOperatorattribute corresponds to **Top Level Operator** in the **Match Rule** dialog in Boomi DataHub. The attribute’s valid values are AND, OR, and NOT.

## `<mdm:matchRule>` 

An `<mdm:matchRule>` element represents a match rule in the model and corresponds to an entry in the **Match Rules** summary list in Boomi DataHub. 

This example shows the high-level structure of an `<mdm:matchRule>` element that represents a match rule having AND as the top-level operator, a simple expression, an advanced expression, and an expression group. The expression group has OR as the operator, a simple expression, and an advanced expression.

``` xml
<mdm:matchRule topLevelOperator="AND">
   <mdm:simpleExpression>
   </mdm:simpleExpression>
   <mdm:advancedExpression>
   </mdm:advancedExpression>
   <mdm:expressionGroup operator="OR">
      <mdm:simpleExpression>
      </mdm:simpleExpression>
      <mdm:advancedExpression>
      </mdm:advancedExpression>
   </mdm:expressionGroup>
</mdm:matchRule>
```

`<mdm:simpleExpression>`

`<mdm:simpleExpression>` represents a simple \(non-advanced\) expression in the match rule.

Example:

``` xml
<mdm:simpleExpression>
   <mdm:fieldUniqueId>NAME</mdm:fieldUniqueId>
</mdm:simpleExpression>
```

The child `<mdm:fieldUniqueId>` element corresponds to the selected **Match on** field in the **Match Rule** dialog in Boomi DataHub. 

`<mdm:advancedExpression>`

`<mdm:advancedExpression>` represents an advanced expression in the match rule.

Example:

``` xml
<mdm:advancedExpression>
   <mdm:ruleOperator>EQUALS</mdm:ruleOperator>
   <mdm:tolerance>0.0</mdm:tolerance>
   <mdm:firstInput>
      <mdm:inputType>INCOMING</mdm:inputType>
      <mdm:fieldUniqueId>NAME</mdm:fieldUniqueId>
   </mdm:firstInput>
   <mdm:secondInput>
      <mdm:inputType>STATIC</mdm:inputType>
      <mdm:value>No Name</mdm:value>
    </mdm:secondInput>
</mdm:advancedExpression>
```

`<mdm:advancedExpression>` has child elements, each of which corresponds to a property set in the **Configure Advanced Expression** dialog in Boomi DataHub:

|Element|Corresponds to|Valid content|
|-------|--------------|-------------|
|`<mdm:ruleOperator>`|**Expression**|IS\_SIMILAR\_TO, STRICT\_EQUALS, EQUALS|
|`<mdm:similarityAlgorithm>` \(applicable only if `<mdm:ruleOperator>` contains IS\_SIMILAR\_TO\)|**Use Similarity Algorithm**|Jaro-Winkler, Levenshtein, Bigram, Trigram, Soundex|
|`<mdm:tolerance>`|**Tolerance**|decimal value in the range 0.0–1.0, except if `<mdm:similarityAlgorithm>` contains Soundex, in which the content is an integer in the range 0–4. This element contains 0.0 if `<mdm:ruleOperator>` does not contain IS\_SIMILAR\_TO.|
|`<mdm:firstInput>`|**First Input**|see below|
|`<mdm:secondInput>`|**Second Input**|see below|

`<mdm:firstInput>` and `<mdm:secondInput>` elements have child elements, each of which corresponds to a property set in the **Configure Advanced Expression** dialog in Boomi DataHub:

|Element|Corresponds to|Valid content|
|-------|--------------|-------------|
|`<mdm:inputType>`|**Input Type**|EXISTING, INCOMING, STATIC|
|`<mdm:fieldUniqueID>`|**Model Field**|unique field ID \(this element is present only if `<mdm:inputType>` contains EXISTING or INCOMING\)|
|`<mdm:value>`|**Value**|static value \(this element is present only if `<mdm:inputType>` contains STATIC\)|

`<mdm:expressionGroup>`

`<mdm:expressionGroup>` represents an expression group in the match rule.

-   The element has a child `<mdm:simpleExpression>` element representing each simple \(non-advanced\) expression in the expression group and a child `<mdm:advancedExpression>` element representing each advanced expression in the expression group. These child elements are described previously in this topic. Additionally, `<mdm:expressionGroup>` has a child `<mdm:expressionGroup>` representing each nested expression group.

-   The `<mdm:expressionGroup>` element’s operator attribute corresponds to **Group Level Operator** in the **Match Rule** dialog in Boomi DataHub. The attribute’s valid values are AND, OR, and NOT.


This example shows the high-level structure for an `<mdm:expressionGroup>` element that represents an expression group with the OR operator, a simple expression, and an advanced expression:

``` xml
<mdm:expressionGroup operator="OR">
   <mdm:simpleExpression>
   </mdm:simpleExpression>
   <mdm:advancedExpression>
   </mdm:advancedExpression>
</mdm:expressionGroup>
```