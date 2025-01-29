# Profile mapping to Message Action Input/Output parameters

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b755e9fb-cfa3-4680-99d5-72ae0c812fa5"/>
</head>

The Input and Output values passed to and from Message Actions are named and configured using the Request and Response profiles that you have assigned to your process.

- Integration Request profiles map to Input parameters in Flow.

- Integration Response profiles map to Output parameters in Flow.

For example:

![Profile mapping to Message Action Input/Output parameters](../Images/img-flo-Integration_MA_IO_0700a044-4160-4021-aea2-8ace31826999.png)

- A Message Action Operation is set up in Integration and a Request and Response Profile assigned.
The Request Profile contains a simple 'Name' Character' value. When a corresponding Message Action is set up in Flow, the Input parameter is automatically created and available for passing data using the Action. As it is a simple Character value, a string value would then be selected. ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- The Response Profile contains an 'EmployeeReturned' Object value. When a corresponding Message Action is set up in Flow, the Output parameter is automatically created and available for passing data using the Action. As it is an Object value, an object value that uses a type would then be selected. ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

:::note

For an example of how a profile is mapped to Input/Output parameters, see [An example profile mapping to Message Action Input/Output parameters](c-flo-AS_MA_IO_Example_ee67c035-438f-4ef0-abf4-49e08280a8de.md).

:::
