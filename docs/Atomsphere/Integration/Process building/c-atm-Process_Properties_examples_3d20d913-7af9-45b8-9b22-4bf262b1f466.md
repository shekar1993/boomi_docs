# Process Properties examples

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3d20d913-7af9-45b8-9b22-4bf262b1f466"/>
</head>


The examples here describe several scenarios in which process properties are commonly used.

Single global value:

-   The simplest use of a process property is to generate or capture a single global value so it can be referenced later in the process. For example, when processing a number of documents you could capture the current time stamp once in a process property at the beginning of the process and then reference it later when setting a file name or generating a "batch number". This enables each document to reference the same value. If the current time stamp was retrieved per document it is possible each document could get a slightly different value if second-, millisecond-, or even minute-precision is required.


Incremental record extraction:

-   The most common scenario for using process properties is to capture and persist the most recent record date value from the actual records being processed to use as criteria for extracting records during the subsequent execution.


Summary values or flags:

-   You can use process properties to capture the results of one part of the process work flow and then reference them in another part to conditionally execute certain steps.

-   Suppose you need to import a batch of transactions from a order management system into an accounting system and you want to send a notification when the process completes with the total amount of dollars imported. The order management system has a web service API that returns a separate XML document for each record so you cannot use the basic Sum or Increment Map functions to capture the sum. \(Also, the summary values from those standard functions only exist during the Map step execution and would not be available later in the process to use in the notification message.\)

-   To accommodate this requirement, you can use a process property to maintain your own sum total. This is typically done with two Branch steps. When mapping to the accounting system request in path 1, use a user-defined map function with a single input for the current order's total amount. The steps inside the function would be: 1\) Get Process Property, 2\) Math add \(taking in the function input and the property value\), then 3\) Set Process Property with the result of the add step. Then in path 2 at the end of the process, use a Notify or Message step to retrieve the property and construct an appropriate message around it.

-   To take this example one step further, suppose you wanted to send a different notification if there were any import errors. Assuming the accounting system returns a response with some status indicator, you could use a Decision step to check for failures and if found, set a process property value \(e.g., "HAS\_ERRORS" = "true"\). Then later at the end of the process, use another Decision step to check whether that property is populated. If populated, you know there was at least one error and you can construct an appropriate notification; if not, all the records were imported successfully.


Environment-specific configurations:

-   When using environments, sometimes there can be environment-specific values that will vary between "test" and "production for example. Instead of hard coding these values in the process configuration, use process properties and define process property extensions whose values will be set at deploy-time. Remember you can reference process property values in map functions to map an environment-specific default value or as a parameter value in a Decision step \(or a variety of other steps\) to perform other steps conditionally, such as additional logging or debugging steps, for example.

-   For Connection component configuration that will vary between environments \(e.g., user name, password, server, etc.\) you will use connection setting extensions.


Conditional processing, one-time-only steps:

-   These scenarios often come into play when designing processes to be delivered as an integration pack. To provide end customers with flexible integration options, you can implement multiple execution paths and use process properties and process property extensions to effect client-specific "preferences" that can dictate which steps are actually executed.

-   Similarly, if certain one-time initialization steps or child processes should execute only once, you can set and *persist* a process property "flag" upon their successful completion. Then for subsequent executions, use a Decision step to check whether the flag has been set and skip the initialization steps.