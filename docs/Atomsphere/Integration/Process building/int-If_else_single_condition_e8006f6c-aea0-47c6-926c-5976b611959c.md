# If/Else - single condition

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e8006f6c-aea0-47c6-926c-5976b611959c"/>
</head>


This sample JavaScript or Groovy custom scripting function maps the shipping contact if available, otherwise defaults to the billing contact.

| | |
| ---- | --- |
|**Inputs**|-   billToContact \(Character\)<br />-   shipToContact \(Character\)|
|**Outputs**|-   contact|


**Script**

```java
if (shipToContact != "") {
contact = shipToContact;
} else {
contact = billToContact;
}
```