# Simple switch case

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dfa97652-c5fc-4f9a-94e7-143841683c5c"/>
</head>


Depending on the lead type, this sample JavaScript or Groovy custom scripting function sets values for a variety of fields accordingly.

If the mapped values are static, this type of mapping requirement can often be met using a cross reference table. This logic could also be implemented as a series of `if/else` statements.

| | |
| ---- | --- |
|**Inputs**|-   leadType \(Character\)|
|**Outputs**|-   salesRep<br />-   priority|

**Script**

```java
switch (leadType) {
case"Direct":
salesRep = "Kevin";
priority = "High";
break;
case"Referral":
salesRep = "Louisa";
priority = "Low";
break;
case"Reseller":
salesRep = "Sarah";
priority = "Medium";
break;
case"OEM":
salesRep = "Sarah";
priority = "Low";
break;
default:
salesRep = "Adam";
priority = "Medium";
}
```