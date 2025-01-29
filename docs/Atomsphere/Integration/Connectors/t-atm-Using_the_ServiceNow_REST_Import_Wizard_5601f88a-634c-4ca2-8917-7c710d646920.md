# Using the ServiceNow REST Import Wizard 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5601f88a-634c-4ca2-8917-7c710d646920"/>
</head>


By using the ServiceNow REST Import Wizard, you browse your object definitions in real time, based on the action you specified, to get any fields you have defined.

## Procedure

1.  Create or open a ServiceNow REST operation.

2.  In the **Connector Action** field select **Get**, **Create**, **Update**, **Delete**, or **Advanced Query**.

3.  Click the **Import** button.

    The ServiceNow REST Import Wizard opens.

4.  Choose the Atom and ServiceNow REST connection that connects to the ServiceNow account instance.

    An Atom must be deployed to browse the object definitions.

5.  Complete one of the follow options that corresponds to the connector action selected.

6.  If you selected **Get**:

    1.  Select a value in the **Display Value** drop-down list.

        Display Value determines what value the database returns for fields \(the Display Value, the Actual Value, or Both\). For example, a field may represent the task status as Not Started, In Progress, or Done. The database, however, represents the task status as 1, 2, and 3.

    2.  Select *Display Value* to have the database return the display value for all fields. In this example, the database returns the task status as Not Started.

    3.  Select *Actual Value* to have the database return the actual value for all fields. In this example, the database returns the task status as 1.

    4.  Select *Both* to have the database return both the display value and actual value for all fields. In this example, the database returns task status as both 1 and Not Started.

    5.  In the **View** field, optionally enter the UI view to determine the fields that the response returns. This field is optional, and if you do not enter a view, all fields are returned.

    6.  In the **Filter** field, enter a filter to reduce the number of returned fields by entering the introduced text contained in the display name for tables.

    7.  Click **Next**.

    8.  Select an object type in the **Object Type** drop-down list.

    9.  When the operation has loaded, review the information and click **Finish**.

        Once the import of the JSON profiles and the setup of the connector operation has completed, your imported JSON profiles are populated in the Options tab.

7.  If you selected **Create**:

    1.  Select a value in the **Display Value** drop-down list.

        Display Value determines what value is inserted into the database for fields \(the Value, the Display value, or Both\). For example, a field may represent the task status as Not Started, In Progress, or Done. The database, however, represents the task status as 1, 2, and 3.

    2.  Select *Value* to have the database store the actual value for all fields. In this example, the database stores the task status as 1.

    3.  Select *Display value* to have the database store the display value for all fields. In this example, the database stores the task status as Not Started.

    4.  Select *Both* to have the database store both the display value and actual value for all fields. In this example, the database stores the task status as both 1 and Not Started.

        We recommend that you choose *Value*, instead of *Display value*, so the database treats the values as actual values and stores them in the database without manipulation. This setting only applies when you clear **No response body**. If **No response body** is selected, ServiceNow does not provide a response to the connector.

    5.  In the **View** field, enter the UI view to determine the fields that the response returns. This field is optional, and if you do not enter a view, all fields are returned.

    6.  Select **No response body** to suppress the response body content from ServiceNow and not include information about the new record.

    7.  Select **Input display value** to treat input values as display values and manipulate them so they can be stored properly in the database. Clear this check box to treat input values as actual values and store them in the database without manipulation.

    8.  In the **Filter** field, enter a filter to reduce the number of returned fields by entering the introduced text contained in the display name for tables.

    9.  Click **Next**.

    10. Select an object type in the **Object Type** drop-down list.

    11. When the operation has loaded, review the information and click **Finish**.

        Once the import of the JSON profiles and the setup of the connector operation has completed, your imported JSON profiles are populated in the Options tab.

8.  If you selected **Update**:

    1.  Select a value in the **Display Value** drop-down list.

        Display Value determines what value is updated in the database for fields \(the Value, the Display value, or Both\). For example, a field may represent the task status as Not Started, In Progress, or Done. The database, however, represents the task status as 1, 2, and 3.

    2.  Select *Value* to have the database update the actual value for all fields. In this example, the database updates the task status as 1.

    3.  Select *Display value* to have the database update the display value for all fields. In this example, the database updates the task status as Not Started.

    4.  Select *Both* to have the database update both the display value and actual value for all fields. In this example, the database updates the task status as both 1 and Not Started.

        We recommend that you choose *Value*, instead of *Display value*, so the database treats the values as actual values and stores them in the database without manipulation. This setting only applies when you clear **No response body**. If **No response body** is selected, ServiceNow does not provide a response to the connector.

    5.  In the **View** field, enter the UI view to determine the fields that the response returns. This field is optional, and if you do not enter a view, all fields are returned.

    6.  Select **No response body** to suppress the response body content from ServiceNow and not include information about the new record.

    7.  Select **Input display value** to treat input values as display values and manipulate them so they can be stored properly in the database. Clear this check box to treat input values as actual values and store them in the database without manipulation.

    8.  In the **Filter** field, enter a filter to reduce the number of returned fields by entering the introduced text contained in the display name for tables.

    9.  Click **Next**.

    10. Select an object type in the **Object Type** drop-down list.

    11. When the operation has loaded, review the information and click **Finish**.

        Once the import of the JSON profiles and the setup of the connector operation has completed, your imported JSON profiles are populated in the Options tab.

9.  If you selected **Delete**:

    1.  In the **Filter** field, enter a filter to reduce the number of returned fields by entering the introduced text contained in the display name for tables.

    2.  Click **Next**.

    3.  Select an object type in the **Object Type** drop-down list.

    4.  When the operation has loaded, review the information and click **Finish**.

        Once the import of the JSON profiles and the setup of the connector operation has completed, your imported JSON profiles are populated in the Options tab.

10. If you selected **Query** or **Advanced Query**:

    1.  Select a value in the **Display Value** drop-down list.

        Display Value determines what value the database returns for fields \(the Display Value, the Actual Value, or Both\). For example, a field may represent the task status as Not Started, In Progress, or Done. The database, however, represents the task status as 1, 2, and 3.

    2.  Select *Display value* to have the database return the display value for all fields. In this example, the database returns the task status as Not Started.

    3.  Select *Actual Value* to have the database return the actual value for all fields. In this example, the database returns the task status as 1.

    4.  Select *Both* to have the database return both the display value and actual value for all fields. In this example, the database returns task status as both 1 and Not Started.

    5.  In the **View** field, enter the UI view to determine the fields that the response returns. This field is optional, and if you do not enter a view, all fields are returned.

    6.  In the **Filter** field, enter a filter to reduce the number of returned fields by entering the introduced text contained in the display name for tables.

    7.  Click **Next**.

    8.  Select an object type in the **Object Type** drop-down list.

    9.  When the operation has loaded, review the information and click **Finish**.

        Once the import of the JSON profiles and the setup of the connector operation has completed, your imported JSON profiles are populated in the Options tab.

11. Click **Save**.