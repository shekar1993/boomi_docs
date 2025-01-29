# Using a component's Import Operation feature

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-06a221cf-becb-485b-8067-fae1f8aeeed0"/>
</head>


Use the Import Operation feature to define the object you are integrating based on the action you specified. Click the **Import Operation** button and fill out the screens to successfully configure an operation and automatically generate the response XML or JSON profile that can include all required base and custom fields.

## Procedure

1.  Create or open the connector's operation component.

2.  If this is a new operation, you may see a Getting Started screen. Otherwise, you will see the Operation page. In either case, click **Import Operation**. 

    :::note

    If you have turned off the display of the Getting Started screen on the User Preferences page, you will go directly to the Import wizard and will not have to click **Import Operation**.

    :::

3.  Enter the appropriate information for the operation.

4.  Some operation components require you to select a Cloud or Atom.

5.  For **Atoms**, select from the list.

6.  Select or create a **Connection** component and click **Next**.

7.  Some connectors require additional options.

8.  Click **Next**.

    The selected Atom opens the connection and browses the available object types.

9.  If there is an existing profile for this operation component and the object from which the profile was generated is of one of the available types, do one of the following:

    -   To re-import the same object, select **Import the same Object**.

    -   To import a new object, select **Import new Object**, and select the desired object type from the **Object Type** list.

    Otherwise, simply select the desired object type from the **Object Type** list.

10. Click **Next**.

11. Review the results and click **Finish**.

12. Save the operation component.