# Enabling local storage for a Molecule or Atom Cloud 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8861cfb6-79fa-46bc-a957-a4a3cfa45d5f"/>
</head>


You can configure a Molecule or Atom Cloud to use a local directory to store its working data.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task. Properties on the Basic tab be edited only when the Atom is online, but they can be viewed while the Atom is offline. 

## About this task

:::note

To set a different directory for each node in the Molecule or Atom Cloud, specify them in node-specific container.properties files.

:::

## Procedure

1.  On each of your cluster's nodes, create a directory in which to store the local files.

2.  Within Boomi, go to **Manage** \> **Atom Management**.

3.  Select the Molecule or Cloud from the list on the left.

4.  In Settings & Configurations, click **Properties**.

    This opens the **Basic** tab.

5.  Select the **Use Local Storage for Runtime Assets** checkbox to store your runtime assets and    temporary execution artifacts in the local cluster nodes.

6.  In the **Working Data Local Storage Directory** field, add the path of the directory you created in step 1.

    For example:

    -   Windows — `C://Boomi//local`

    -   Linux — `/opt/Boomi/local`

7.  Click **Save**.

    Changes to this property do not take effect until the Molecule or Cloud is restarted. After the runtime is restarted, the runtime starts using the java from the local directory and Java information is updated with the appropriate java path where the java files are occupied. You have the option to restart now or restart later.

### Considerations

It is recommended you select both, the *Use Local Storage for Runtime Assets* and set the *Working Data Local Storage Directory*. However, if only the *Working Data Local Storage Directory* is set, only temporary execution files will be stored on the local nodes; runtime assets, including libraries and the Java runtime, will not be copied to the local nodes.
