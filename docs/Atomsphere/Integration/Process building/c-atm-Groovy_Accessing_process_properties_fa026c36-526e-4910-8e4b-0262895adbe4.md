# Groovy: Accessing process properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fa026c36-526e-4910-8e4b-0262895adbe4"/>
</head>


You can access Process Property components and dynamic process properties within your map function script. This sample Groovy custom scripting function accesses a dynamic process property that serves as a counter to track the number of “priority” orders being mapped.

-   Process Property components use `getProcessProperty` and `setProcessProperty`.

-   Dynamic process properties use `getDynamicProcessProperty` and `setDynamicProcessProperty`.


Although you can usually achieve the same result using individual Get Process Property and Set Process Property function steps, sometimes doing it within the script can be less convoluted, especially if you need to get and set multiple properties.

# JavaScript example

| Category | Details |
| --- | --- |
| **Inputs** | priorityFlag (Character) |
| **Outputs** | `<none>` |
| **Script** | `load("nashorn:mozilla_compat.js");`  <br />`// Import the ExecutionUtil class ` <br />`importClass(com.boomi.execution.ExecutionUtil);`  <br /><br />`propName = "PRIORITY_COUNT";`  <br /><br />`// Retrieve current Process Property value`  <br />`propValue = ExecutionUtil.getDynamicProcessProperty(propName);`  <br /><br />`// Convert string value to int to do math`  <br />`var intValue = parseInt(propValue);`  <br /><br />`// Increment value by 1 if priorityFlag is "true" ` <br />`if (priorityFlag == "true") {  <br /> intValue = intValue + 1; ` <br />`}`  <br /><br />`// Convert int value back to String before storing in property`  <br />`propValue = intValue.toString();`  <br /><br />`// Set the new property value. The 3rd parameter indicates if the property should be persisted (true) or not (false). ` <br />`ExecutionUtil.setDynamicProcessProperty(propName, propValue, false); `|

# Groovy example 

| Category | Details |
| --- | --- |
| **Inputs** | priorityFlag (Character) |
| **Outputs** | `<none>` |
| **Script** | `load("nashorn:mozilla_compat.js");`  <br />`// Import the ExecutionUtil class ` <br />`importClass(com.boomi.execution.ExecutionUtil);`  <br /><br />`propName = "PRIORITY_COUNT";`  <br /><br />`// Retrieve current Process Property value`  <br />`propValue = ExecutionUtil.getDynamicProcessProperty(propName);`  <br /><br />`// Convert string value to int to do math`  <br />`var intValue = parseInt(propValue);`  <br /><br />`// Increment value by 1 if priorityFlag is "true" ` <br />`if (priorityFlag == "true") {  <br /> intValue = intValue + 1; ` <br />`}`  <br /><br />`// Convert int value back to String before storing in property`  <br />`propValue = intValue.toString();`  <br /><br />`// Set the new property value. The 3rd parameter indicates if the property should be persisted (true) or not (false). ` <br />`ExecutionUtil.setDynamicProcessProperty(propName, propValue, false); `|