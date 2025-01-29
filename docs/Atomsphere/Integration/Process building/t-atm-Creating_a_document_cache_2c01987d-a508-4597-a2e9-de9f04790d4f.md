# Creating a document cache

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2c01987d-a508-4597-a2e9-de9f04790d4f"/>
</head>


When you create a Document Cache component, you must select a profile type and add indexes and keys for organizing the data in the cached documents.

1.  On the **Build** page, do one of the following:

    -   Click **Create New** and select **Document Cache** in the drop-down list.

    -   In the Component Explorer, click the ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) blue arrow icon next to the desired folder, select **New Component**, and select **Document Cache**.

2.  In the **Profile Type** drop-down list, do one of the following:

    -   To cache documents based on a profile, select a profile type: **XML**, **EDI**, **Database**, **Flat File**, or **JSON**.

    -   To cache document that are not based on a profile, select a profile type of **None**.

3.  **Optional**: If you selected a specific profile type, choose or create a profile of the appropriate type.

4.  **Optional**: If you do not require a one-to-one relationship between index keys and documents, you can clear the **Enforce one index entry per document** option.

    If you clear this option, you cannot perform the following actions when you use the Document Cache component in a process:

    -   Retrieve all documents from the document cache.

    -   Remove specific documents from the document cache by index name.

5.  Click **Add Index**.

6.  Type an index name and click **OK**.

    If you do not type an index name, it appears as “Unnamed”.

    If you selected a specific profile type, you can add profile element keys or document property keys. If you selected a profile type of **None**, you can add only document property or dynamic document property keys.

7.  To add a profile element key:

    1.  Click **Add Profile Element Key**.

    2.  Type a name for the key.

        If you do not type a key name, this field populates when you select an element.

    3.  Click the **Browse** icon, select the key's element and click **OK**.

    4.  Click **Save**.

8.  To add a document property key:

    1.  Click **Add Document Property Key**.

    2.  Type a name for the key.

        If you do not type a key name, this field populates when you select an element.

    3.  Click the **Browse** icon.

        The Choose Property dialog opens.

    4.  Select **Document Property**, expand the sections as needed to find the property, select the document property, and then click **OK**.

    5.  Click **Save**.

9.  To add a dynamic document property key:

    1.  Click **Add Document Property Key**.

    2.  Type a name for the key.

        If you do not type a key name, this field populates when you select an element.

    3.  Click the **Browse** icon.

        The Choose Property dialog opens.

    4.  Select **Dynamic Document Property**, enter the property name, enter the default value, and then click **OK**.

    5.  Click **Save**.

10. To add a MIME property key:

    1.  Click **Add Document Property Key**.

    2.  Type a name for the key.

        If you do not type a key name, this field populates when you select an element.

    3.  Click the **Browse** icon.

        The Choose Property dialog opens.

    4.  Select **MIME Property**, select the property name, and then click **OK**. Enter a custom property value when you select a custom property name.

    5.  Click **Save**.

11. **Optional**: To add more keys to the index, repeat steps 7, 8, 9, and 10.

12. To add more indexes and keys, repeat steps 6–10.

13. Click **Save** or **Save and Close**.