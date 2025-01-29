# Scripting context

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b8489290-b3cd-4029-ae28-04961b23f3aa"/>
</head>


Your script needs to work within the custom scripting framework to properly read and write documents in the process.

A key object to understand is the `dataContext` object. This object provides methods to allow your script to access the document data and properties from the process execution.

Conceptually, the custom script will follow this general pattern:

1. (Optional) Perform any "global" or initialization logic.

2. Loop through each document that reached the Data Process step.

3. For each document:

   1. Retrieve the document data from the `dataContext` into an `InputStream` object.

   2. Parse and manipulate the data as required by your use case.

   3. Convert the modified document data back into an `InputStream` and store in the `dataContext` to pass it to the next process step.

When you add a custom scripting step, you will get a skeleton script. Here is a step-by-step explanation of this skeleton script.

```java
import java.util.Properties;
import java.io.InputStream;
// Import any additional external Java or custom classes to be used in the script.
// BEGIN GLOBAL LOGIC //
// Perform any initialization logic. This logic will execute once
// per STEP execution, not per DOCUMENT.
// END GLOBAL LOGIC //
// Loop through the group of Documents that reached the Data Process step.
// Note the getDataCount() method provides the count of the number of Documents
// passed into this step. This may be helpful in initialization logic above.
for( int i = 0; i < dataContext.getDataCount(); i++ ) {

// The logic here will be executed per DOCUMENT.
// Retrieve the Document data as an InputStream object.
InputStream is = dataContext.getStream(i);

// Retrieve the Document's properties a Properties object. This includes
// Connector tracked properties, Meta Information properties, as well as
// User Defined Document Properties.
Properties props = dataContext.getProperties(i);


// BEGIN PER DOCUMENT LOGIC //
// Perform any logic to parse, inspect, manipulate, etc. the Document data
// and properties here. This is the main part of the script.
// END PER DOCUMENT LOGIC //
// After performing your custom logic, you need to convert the data back
// into an InputStream and store it to the dataContext to pass to the next
// Process step. The number of InputStreams you store will be the number of
// Documents passed to the next step.

dataContext.storeStream(is, props);

} // End for-each-Document For loop
```

Within the script you can access process execution information including process properties, the current Execution ID, and a handle to the process logger, as well as document properties.

- Process execution information can be accessed through the Scripting API.

- See [Process properties Properties with Scripting](./c-atm-Process_properties_access_with_scripting_1be3a8ea-c6c8-40a2-bf93-4adf6b8ee15f.md) for how to set and retrieve process properties.

- The process logger allows you to write your own messages to the process log and can be very useful for development and troubleshooting. See the [Script development and testing](./c-atm-Script_development_and_testing_3cebf06a-d6ae-48ee-893b-94c447c92a8e.md) topic for an example.

- You can also retrieve, modify and create document properties within the script. See [Process properties Properties with Scripting](./c-atm-Process_properties_access_with_scripting_1be3a8ea-c6c8-40a2-bf93-4adf6b8ee15f.md) for more information.

- Also see the Custom Scripting Step Examples topic.
