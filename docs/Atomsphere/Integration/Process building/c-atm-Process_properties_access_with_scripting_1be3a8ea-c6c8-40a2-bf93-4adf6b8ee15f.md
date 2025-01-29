# Process properties access with scripting

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1be3a8ea-c6c8-40a2-bf93-4adf6b8ee15f"/>
</head>


You can set and retrieve Process Property component values within custom scripting by using the `getProcessProperty()` and `setProcessProperty()` methods available within the `ExecutionUtil` class.

:::note

To find the propertyKey, open the Process Property component. The Key field on the Process Property tab displays the value.

:::

You can set and retrieve dynamic process property values within custom scripting by using the `getDynamicProcessProperty()` and `setDynamicProcessProperty()` methods available within the `ExecutionUtil` class.

This can be done within a custom scripting step or custom scripting map function.

```java
// Import the ExecutionUtil class
import com.boomi.execution.ExecutionUtil;

// Set a Process Property component value
ExecutionUtil.setProcessProperty("ComponentID", "PropertyKey", "PropertyValue");

// Retrieve a Process Property component value
String myValue = ExecutionUtil.getProcessProperty("ComponentID", "PropertyKey");

// Set a Dynamic Process Property value and persist the dynamic property by setting the Boolean to "true"
ExecutionUtil.setDynamicProcessProperty("PropertyName", PropertyValue, true);

// Retrieve a Dynamic Process Property value
String myValue = ExecutionUtil.getDynamicProcessProperty("PropertyName");
```