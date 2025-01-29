# Standard document property examples

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-eebd7536-635f-4570-98c9-d37eec122c6f"/>
</head>


The following examples show how standard document properties are commonly used.

**Example: Setting an outbound file name**

1.  Use a Set Properties step.

2.  Add a "Property to Set" on the left and select Document Property \> Standard Connectors \> select a connector type \(e.g., Disk or FTP, whatever you are writing to\) \> File Name.

3.  Add one or more parameters to create a simple \(static value\) or complex \(mix of static and dynamic parameters\).

4.  Connect the Set Properties step to the Connector step.

**Example: Maintaining the inbound file name**

-   Follow the previous steps, and for the single parameter, simply choose the appropriate document property/standard connector file name for the connector used in the Start step.


**Example: Setting the Application Status Code and Application Status Message properties for Send operations**

:::note

This example pertains to some application connectors that set these properties as a convenience for process developers. When handling connector responses manually, there is no need to reference and understand the response profile.

:::

1.  Configure the "Send" operation to "Return Application Error Responses".

2.  After the Connector step, add a Decision step to determine whether the response was successful \(assume "true" path\).

3.  Configure the Decision step to compare the Application Status Code document property to some value. This is often blank if successful, but varies by connector.

4.  On the "false" path, representing documents with errors in this example, add a Notify or Exception step.

5.  Configure a formatted message referencing the Application Status Message and Code as replacement parameters.