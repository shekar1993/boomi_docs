# If/Else - multiple conditions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0be93f04-ef1c-429f-9b6d-6604e6421037"/>
</head>


This sample JavaScript or Groovy custom scripting function illustrates the handling of multiple conditions using an If/Else block.

If the order amount is $10,000 or more or if the order is from a "Premier" customer and the amount is $5,000 or more, map the shipping method as "PRIORITY". Otherwise map whatever shipping method was specified on the order. Note that because `shipMethod` is defined as both an input and output, the output will be populated with the original input value even if the condition is false and no value is explicitly assigned to `shipMethod` in the script.

| | |
| ---- | --- |
|**Inputs**|-   amount \(Float\)<br />-   custStatus \(Character\)<br />-   shipMethod \(Character\)|
|**Outputs**|-   shipMethod|

**Script**

```java
if (amount >= 10000 || (custStatus == "Premier" && amount >= 5000) ) {
shipMethod = "PRIORITY";
}
```