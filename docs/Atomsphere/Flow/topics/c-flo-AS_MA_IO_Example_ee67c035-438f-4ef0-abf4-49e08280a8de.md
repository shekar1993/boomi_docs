# An example profile mapping to Message Action Input/Output parameters

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ee67c035-438f-4ef0-abf4-49e08280a8de"/>
</head>

This example shows how a Integration Request Profile maps to Input and Output Message Action parameters in Flow.

![Request Profile mapping example](../Images/img-flo-Integration_MA_Prof_119090df-9c45-4e06-bec8-fdb0d38ec02f.png)

- Simple Character, Number, DateTime and Boolean values in the Integration Request Profile have been mapped respectively to primitive string, number, date/time, and Boolean values in Flow. The date input value has been mapped to the $State/Date Created system value ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- A complex Object value in the Integration Request Profile has been mapped to a complex Object value in Flow, using the type that was automatically created by the connector.  ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)
  
- A complex Array(Repeating) value in the Integration Request Profile has been mapped to a complex List value in Flow, using the type that was automatically created by the connector.. ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

:::note

To learn more about values and types in Flow , see [Understanding Values, Types, Objects, and Lists](c-flo-Values_Understanding_0a938b9f-c1be-45d9-b53f-aa9d0addad86.md).

:::
