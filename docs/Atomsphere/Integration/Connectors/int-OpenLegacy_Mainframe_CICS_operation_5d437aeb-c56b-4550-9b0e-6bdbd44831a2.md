# OpenLegacy Mainframe CICS - Partner operation \(Tech Preview\)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5d437aeb-c56b-4550-9b0e-6bdbd44831a2"/>
</head>


An OpenLegacy Mainframe CICS - Partner connector's \(Tech Preview\) operation defines how to interact with the OpenLegacy Mainframe CICS - Partner connection. The operation is specific to an Object Type as defined in the OpenLegacy Hub Project.

Create a separate operation component for each action/object combination that your integration requires. The connector supports Execute action only.

## Options tab

Click **Import Operation**, then use the Import wizard to select the object to integrate. When you configure an action, the following fields appear on the **Options** tab.



Connector Action
:   The **Connector Action** field is set to Execute and is not configurable.

Project
:   The name of the applicable OpenLegacy Hub Project.

Method name
:   The name of the project method to execute one or more Mainframe CICS programs. The Method’s request and response profiles are automatically created and you can name them based on your requirements.

## Execute

The OpenLegacy Mainframe CICS - Partner Connector \(Tech Preview\) implements EXECUTE action to perform specific tasks on APIs or operations. EXECUTE is the only connector action supported by the connector. You can use the EXECUTE method to send and receive data.