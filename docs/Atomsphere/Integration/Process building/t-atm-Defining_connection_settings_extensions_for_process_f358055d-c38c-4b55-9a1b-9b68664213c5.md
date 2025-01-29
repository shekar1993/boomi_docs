# Defining connection settings extensions for a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f358055d-c38c-4b55-9a1b-9b68664213c5"/>
</head>


Select properties that vary between deployments.

## About this task

Connection settings extensions are the most common extension type.

## Procedure

1.  Open the process and click the **Extensions** link above the process canvas.

    The Extensions dialog opens.

2.  On the **Connection Settings** tab, select a Connection component from the **Connection** list.

    This is a list of all the unique Connection components referenced in this process *or any child processes*.

3.  Select the check box next to each property to extend.

    You need to select only the properties that vary between deployments. For example, if you know you need to connect to "Test" and "Production" instances of a database server, you would probably extend Host, User, and Password as those would vary between instances, but other properties like Database Type and DB Name is likely the same across both instances. In this case, you should define the Database Type and DB Name in the Database Connection component and not extend those properties.

4.  Repeat steps 2-3 for each connection.

5.  When you are finished defining extensions, click **OK**.

6.  Click **Save**.

    If you add a new Connection component to your process, revisit the extensions and define any extensible properties for that connection.

## Next steps

After defining Connection Settings extensions, you need to set values for them. See the topic [Setting extension values](../Process%20building/t-atm-Setting_extension_values_for_use_in_Test_mode_bab6a984-6687-4fc1-b6f8-daf4d2eda751.md).