# Parameter value types

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2eaec44b-9772-4d67-9458-eceb191c1760"/>
</head>


This list describes types of parameters that can be used for dynamic configuration.

**Parameter type**   
**Description**

**Connector Call**   
Perform a lookup or query using an application connector to return one or more values. The output parameter represents the field from the operation response to return as the overall parameter value. The input parameters allow you to provide values for the operation's inputs/filters. Refer to [Connector Operation components](../Process%20building/c-atm-Connector_Operation_components_106fbc54-b0eb-45aa-91df-d2a401b5a952.md) for more information. Also see [Connector Operations, filters, and parameter values](../Process%20building/c-atm-Connector_operations_filters_and_parameter_values_34d5ca37-6a21-43b6-a6f0-b2c165f7fd7f.md) for how operation inputs work.

**Cross Reference Lookup**   
Retrieve a value from a Cross Reference Table component given one or more inputs. See [Cross Reference Tables](../Process%20building/c-atm-Cross_Reference_Table_Components_325eacb1-04ac-48fe-b6b2-9b57e0a14c93.md) for more information.

**Current Data**   
Insert the entire current document's data.

**Date/Time**   
Choose a date/time value.

-   Date Mask — Choose or specify the format for the date value.

-   Date Type:

-   Current Date — The current system date/time.

    -   Relative Date — The current system date/time offset by the specified calculation. You can set it plus or minus \(+/-\) *n* seconds, minutes, hours, days, weeks, months or years.

    -   Last Run Date — The date/time when the given process was last executed. This value is updated every time the process executes, whether successfully or not. The value is represented in the local time of the machine where the Atom is installed \(as opposed to GMT/UTC time\). If the process has not been run before, this value defaults to 12/31/1969 19:00:00.

    -   Last Successful Run Date — The date/time when the given process was last executed successfully. This value is only updated when the process finishes execution without an error. The value is represented in the local time of the machine where the Atom is installed \(as opposed to GMT/UTC time\).


**Document Cache Lookup**   
Used to query the selected Document Cache component, by cache index\(es\) and key\(s\). Specify an output parameter and parameter value\(s\) for the key\(s\). You can output a single field from a single document.

This parameter value can be used in the following steps: Connector \(on the Parameters tab\), Decision, Exception, Message, Notify, Program Command and Set Properties.

**Document Property**   
Retrieve the value of a standard or dynamic document property, such as document file name, Cleanse step result message, or application status code. See [Document Properties](../Process%20building/c-atm-Document_Properties_8d6971ff-fcda-49ff-8c3d-e6a5c716c329.md) for more information.

**Dynamic Process Property**   
Retrieve the value of a dynamic process property. Be sure the name matches the name of the property as it was created. See [Dynamic Process Properties](../Process%20building/r-atm-Dynamic_Process_Properties_3fe48a7a-039a-49b2-866f-60c9532c1ff9.md) for more information.

**Execution Property**   
Retrieve the value of an execution property, such as account ID, Atom ID, execution ID, or document count. See [Execution Properties](../Process%20building/c-atm-Execution_Properties_9c338d2a-092c-4d9b-bedf-2d39651ba9b4.md) for more information.

**Process Property**   
Retrieve the value of a process property. Be sure the name matches the name used when setting the property. Optionally enter a default value if the process property does not exist or is blank. See [Process Properties](../Process%20building/c-atm-Process_properties_9cd71992-5281-4c89-8cd4-89914b87ad26.md) for more information.

**MIME Property**   
Retrieve the value of a MIME property, such as Content-Type and Name. Be sure the value name matches the name used when setting a custom MIME property. See [MIME Properties](../Process%20building/c-atm-MIME_properties_a65497f4-4a14-40ce-9204-fb866081c952.md) for more information.

**Profile Element**   
Use a value from a field in the current document. Choose a profile type, then select the profile and element to use.

**Sequential Value**   
Create and reference a counter that automatically increments with every execution.

-   Key Name — An arbitrary, unique name for the counter. If a key name is not specified, a globally unique identifier \(GUID\) is assigned.

-   Fix To Length — The length of the sequential value to be returned. The value will be padded with zeros \(0's\) to the specified length.


Counter values for an Atom, Molecule, or Atom Cloud can be viewed and reset in the Counters panel in **Manage** \> **Atom Management**.

**SQL Statement**   
Return the result of a user-defined database SQL statement, typically a SELECT statement. The statement call itself can use parameters \(from profiles, tracked properties, etc.\) to dynamically specify query criteria.

-   Output Column — The column number of the query results to return as the output parameter.

-   Cache Values? — Store the results of the query in cache \(temporary memory\) for improved performance.


**Static**   
Provide a hard-coded value.

**Stored Procedure**   
Return the result of a database stored procedure. The stored procedure call itself can use parameters \(from profiles, tracked properties, etc.\) to dynamically specify query criteria.

-   Output Column — The column number of the stored procedure results to return as the output parameter.

-   Cache Values? — Store the results in cache \(temporary memory\) for improved performance.


**Unique Value**   
Use a system-generated number to guarantee uniqueness. The length of the number varies.