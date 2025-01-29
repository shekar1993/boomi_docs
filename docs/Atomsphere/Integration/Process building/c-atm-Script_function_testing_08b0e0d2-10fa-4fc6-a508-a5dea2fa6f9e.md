# Script function testing

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-08b0e0d2-10fa-4fc6-a508-a5dea2fa6f9e"/>
</head>


Once you are comfortable with scripting basics, for simple functions it may be sufficient to simply execute the process, passing a document through the map and then inspecting the document data afterward.

For more complex functions, you can use an external console to test the script and then copy and paste it back into the function. For more information see [Script development and testing](/docs/Atomsphere/Integration/Process%20building/c-atm-Script_development_and_testing_3cebf06a-d6ae-48ee-893b-94c447c92a8e.md).

If you are using Groovy, within the script you can access process execution information including process properties, the current execution ID, and a handle to the process logger.

-   Process execution information can be accessed through the Scripting API.

-   See [Process properties access with scripting](/docs/Atomsphere/Integration/Process%20building/c-atm-Process_properties_access_with_scripting_1be3a8ea-c6c8-40a2-bf93-4adf6b8ee15f.md) for how to set and retrieve process properties.

-   The process logger allows you to write your own messages to the process log and can be very useful for development and troubleshooting. For more information see [Script development and testing](/docs/Atomsphere/Integration/Process%20building/c-atm-Script_development_and_testing_3cebf06a-d6ae-48ee-893b-94c447c92a8e.md).

-   Document properties \(standard and dynamic\) are *not* accessible through scripting in a map function. Use a standard Get Document Property or Set Document Property function step instead.