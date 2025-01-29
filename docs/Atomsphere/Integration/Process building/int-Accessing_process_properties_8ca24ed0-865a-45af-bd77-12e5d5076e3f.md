# Accessing process properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8ca24ed0-865a-45af-bd77-12e5d5076e3f"/>
</head>


You can access Process Property components and dynamic process properties within your map function script. These sample JavaScript and Groovy custom scripting functions accesses a dynamic process property that serves as a counter to track the number of “priority” orders being mapped.

-   Process Property components use `getProcessProperty` and `setProcessProperty`.

-   Dynamic process properties use `getDynamicProcessProperty` and `setDynamicProcessProperty`.


Although you can usually achieve the same result using individual Get Process Property and Set Process Property function steps, sometimes doing it within the script can be less convoluted, especially if you need to get and set multiple properties.

## JavaScript example


| | |
| ---- | --- |
|**Inputs**|priorityFlag \(Character\)|
|**Outputs**|`<none>`|

**Script**

```javascript
load("nashorn:mozilla_compat.js");
// Import the ExecutionUtil class
importClass(com.boomi.execution.ExecutionUtil);

propName = "PRIORITY_COUNT";

// Retrieve current Process Property value
propValue = ExecutionUtil.getDynamicProcessProperty(propName);

// Convert string value to int to do math
var intValue = parseInt(propValue);

// Increment value by 1 if priorityFlag is "true"
if (priorityFlag == "true") {
intValue = intValue + 1;
}

// Convert int value back to String before storing in property
propValue = intValue.toString();

// Set the new property value. The 3rd parameter indicates if the property should be persisted (true) or not (false).
ExecutionUtil.setDynamicProcessProperty(propName, propValue, false);
```

## Groovy example


| | |
| ---- | --- |
|**Inputs**|priorityFlag \(Character\)|
|**Outputs**|`<none>`|

**Script**

```java
// Import the ExecutionUtil class
import com.boomi.execution.ExecutionUtil;

propName = "PRIORITY_COUNT";

// Retrieve current Process Property value
propValue = ExecutionUtil.getDynamicProcessProperty(propName);

// Convert string value to int to do math
int intValue = Integer.parseInt(propValue);

// Increment value by 1 if priorityFlag is "true"
if (priorityFlag == "true") {
intValue = intValue + 1;
}

// Convert int value back to String before storing in property
propValue = Integer.toString(intValue);

// Set the new property value. The 3rd parameter indicates if the property should be persisted (true) or not (false).
ExecutionUtil.setDynamicProcessProperty(propName, propValue, false);
```
