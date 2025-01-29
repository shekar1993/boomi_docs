# Function Modules in the Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-27f98a35-aa57-4275-b81a-88d22f1e4dd2"/>
</head>

The ***Boomi for SAP*** Connector is no different from other Boomi Connectors. It makes development easy by importing operations and profiles.

## Building a Boomi Process

Create a new Process and configure the Start step type to ***No Data***.

![](./Images/img-sap_boomi_process.png)

Add a ***Message step*** immediately after the Start step and connect them. In this example process, the Message step contains test data corresponding to the Request Profile created in the next step. When building your processes, map your data to the Request Profiles of the Operations.

## Connection

To configure a **Boomi for SAP Connector**, add a Connector step to the canvas, then double click the connector step and add a *Display Name*. You can select an existing Connector or create a new Connector (see image below) by clicking on the green plus sign icon.

![](./Images/img-sap_new_connector.png)

![](./Images/img-sap_green_plus_icon.png)

Fill in the fields shown on the connection page with the values provided by your SAP team. Then set the Action to ***FUNCTION*** and click the **Save and Close** button to return to the previous screen.

![](./Images/img-sap_function.png)

## Operation

To create a new Connector Operation, click the small **green plus icon** in the Operation field. This opens a pop-up window for you to create your Connector Operation.

![](./Images/img-sap_operation.png)

To quickly find the Operation in the future, add the name of the service you created in Boomi for SAP to the operation name in the upper left corner. In this example, we named the operation *BAPI_BUPA_ADDRESSES_GET*.

![](./Images/img-sap_options.png)

Click the **Import** button to import the Operation and Profiles.

In the *Import Wizard* pop-up window, choose an **Atom** to run and perform the import. The Atom should have network access to the Boomi for SAP instance. In the Connector and Filter fields, choose the appropriate *Connector* and an optional *Filter*, which allows for wildcard filtering.

![](./Images/img-sap_import.png)

After selecting the Atom and the Connection, click the **Next** button to query the objects. Then, choose the *Object Type* from the drop-down menu.

![](./Images/img-sap_object_type%20.png)

Click **Next** and a pop-up window will appear, showing the following:

- **Object Name**: The name of the Function Module.

- **Request Profile**: The format of the data expected by the Operation.

- **Response Profile**: Click **Finish** to return to the Operation view with the newly imported Operation and Profiles. This View will display the format of the data returned from the Operation.

![](./Images/img-sap_response_profile.png)

![](./Images/img-sap_operation_view.png)

Click **Save and Close** to get back to the configuration of the Connector step. Click **Save** to save your operation.

![](./Images/img-sap_conn_shapes.png)

Finalize the configuration by adding a ***Stop step*** and connecting it to the Connector step.

![](./Images/img-sap_stop_shape.png)

Now you can add a test data to the ***Message step*** that conforms to the Request Profile format. To test the process, click on **Test** in the upper right corner and choose Atom to run the test. Click **Run Test**.

![](./Images/img-sap_message_shape.png)

Once the test execution completes, a brief message will pop-up in the lower right corner stating that the "Test execution of BAPI_BUPA_ADDRESSES_GET completed successfully".

![](./Images/img-sap_test_execution.png)

To see the result, click on the **Connector step** on the canvas and then on **Connection Data**.

![](./Images/img-sap_test_execution.png)

Then click the **file icon** right under *View* to see the output.

![](./Images/img-sap_file_icon.png)

## FILTER_RESPONSE PARAMETER

In a Function Module's request profile, there is a parameter called `I_/IXBX/FILTER_RESPONSE` (The same is called `I_1IXBX1FILTER_RESPONSE` in Boomi profiles), which allows for filtering the returned data. For instance, if a function module returns data in a table that is not needed, you should filter away this table before returning the data to the Atom from the backend. You can filter the returned values from *Export* or filter the tables from *Tables*. You can use either the backend names of the parameters or the service exposed names (with `E_` or `T_` in front)

## FORCE_COMMIT_OR_ROLLBACK PARAMETER

The request profile also includes a parameter called `I_/IXBX/FORCE_COMMIT_OR_ROLLBACK` (This is called `I_1IXBX1FORCE_COMMIT_OR_ROLLBACK` in Boomi profiles). The caller can use this parameter to force a commit or rollback after calling a function module. If this flag is set to **X** , the function module will be executed, and then a commit will be performed; or a rollback will be performed if there is an error executing the function module. This is particularly valuable for BAPIs, as they typically refrain from self-committing.