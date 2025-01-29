# Parameter values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-23a1eb13-d83b-423e-adf1-d78db4a1fbbd"/>
</head>


Many process steps and components can use parameters to allow for dynamic configuration.

Parameter values can represent data from a document field, the current system date/time, a static value, the result of a connector call or database query, or a variety of other values.

Some common uses of parameter values are:

-   Connector \(including the Start step\) — Provide values for parameters defined in the operation or request profile to use as selection criteria

-   Message step — Insert dynamic content in email alerts.

-   Exception step — Insert dynamic content in custom error messages.

-   Program Command step — Use document values as query parameters in SQL calls.

-   Set Properties step — Incorporate the current date and document values in file names or email subjects. To concatenate a dynamic file name, add multiple parameter values. For example, you could combine Profile Element \(order number\) + Static + Current Date + Static to create a file name like `ORD12345_20071029.txt`. See the Set Properties step for more details.

-   Decision step — To determine how to route documents, compare two values. Query a database or connector to determine if a record exists before performing an insert or update.

-   Map Function — Specify inputs and outputs for database lookup, connector, and custom scripting functions.

-   Route step — Compare a document value or property against a list of conditions to determine how to route documents.

-   Process Route step — Specify document values or properties that are combined to form the route key in the referenced Process Route component. The route key determines the subprocess to which to route documents.


The list of available parameter value types and configuration options vary from step to step, however they all share these core concepts:

-   Add Parameter icon ![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) to add a parameter.

-   Edit Parameter icon ![](../Images/main-ic-pencil-yellow-12_12e3e7dc-22a8-42cf-8b3b-705c477344df.jpg) to modify the selected parameter.

-   Delete Parameter icon ![](../Images/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) to remove the selected parameter.