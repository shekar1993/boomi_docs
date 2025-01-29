# Writing to the process log

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6c61f45e-00f4-49de-aca6-732898ce5f18"/>
</head>


When using scripting within a map function or Data Process step, it can be very helpful to view the values of variables at run time to assist with development and debugging. You can do this by writing entries to the process log, as illustrated by these sample JavaScript and Groovy custom scripting functions.

## JavaScript example

| Category | Details |
| --- | --- |
| **Inputs** | customerNumber (Character) |
| **Outputs** | `<none>` |
| **Script** | `load("nashorn:mozilla_compat.js"); // Import the ExecutionUtil class importClass(com.boomi.execution.ExecutionUtil); logger = ExecutionUtil.getBaseLogger(); logger.info("Processing customer: " + customerNumber); // You can also use the info(), warning(), severe() and fine() methods to create entries with different log levels.`|

## Groovy example 

| Category | Details |
| --- | --- |
| **Inputs** | customerNumber (Character) |
| **Outputs** | `<none>` |
| **Script** | `// Import the ExecutionUtil class import com.boomi.execution.ExecutionUtil; logger = ExecutionUtil.getBaseLogger(); logger.info("Processing customer: " + customerNumber); // You can also use the info(), warning(), severe() and fine() methods to create entries with different log levels.`|