# Dynamically overriding the Hadoop File Name and HDFS Directory 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-30c620b5-e8e9-4b54-bd1e-0a2d8c1af570"/>
</head>


You can dynamically override and update the Hadoop **File Name** and **HDFS directory** values set in the operation utilizing dynamic operation properties.

## Before you begin

-   Creates an Hadoop Create, Get, and Delete operation.

## About this task

Dynamic operation properties are document-level overrides you define values for, and pass into the Connector step to modify and update the default values set in the operation for the **File Name** and **HDFS directory** fields. These values only affect the Hadoop's Create, Get, and Delete operations.

## Procedure

1.  Click the Hadoop Connector step in a process and select **Configure**.

    The **Connector step** dialog appears.

2.  Select a Create, Get, or Delete operation and click the **Dynamic Operation Properties** tab.

3.  Click **Add Dynamic Operation Property**.

    The **Parameter Value** dialog appears.

4.  Choose one of the following:

    |Parameter Value|Description|
    |---------------|-----------|
    |**Create operation**|    •  **Input** – **Select File Name**, or **HDFS** directory.<br />•   **Type** – Select **Static** and provide a static value in the **Static Value** field. It uses the value provided instead of the value set in the operation. Alternatively, select **Document Property** and browse for the document property. It uses the selected property instead of the value set in the operation.|
    |**Get and Delete operations**|    •  **Input** – Select **HDFS directory**.<br />•   **Type** – Select **Static** and provide a static value in the **Static Value** field. It uses the provided value instead of the value set in the operation. Alternatively, select **Document Property** and browse for the document property. It uses the selected property instead of the value set in the operation.|

    Example: You want to dynamically pass the **File Name** from the Disk V2 connector's output documents to the corresponding field in Hadoop. Select **File Name** in the **Input** drop-down list, choose **Document Property** for **Type**, and browse for the Disk V2 connector's **File Name** document property.
2.  Click **OK** and return to the process.

## Next steps

After setting and saving the properties, and upon the process run, the dynamic operation properties take precedence over the values set in the operation.