# Creating a cross reference table

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-caf276fd-6d5b-4d39-afa0-6b75d96ee5fc"/>
</head>


You must create a Cross Reference Table component before you can add its rows and columns.

## Procedure

1.  Go to the **Build** page.

2.  Do one of the following:

    -   On the **Create New** tab, scroll down and click **Cross Reference Table**.

    -   In the Component Explorer, click the gray arrow icon next to the desired folder, select **New Component**, select **Cross Reference Table**, type a name, and click **Create**.

    The Cross Reference Table page opens.

3.  Type a name for the cross-reference table, if you have not already.

    The maximum length is 255 characters.

4.  From the **Data Match** drop-down list, select the type of data matching to be performed against the cross-reference table:

    -   Exact Match – Table entries must match the input values exactly.

    -   Matches Regular Expression – Table entries can include syntax for complex pattern matching.

    -   Matches Wildcard – Table entries can include the wildcard characters \* \(for multiple characters\) and ? \(for a single character\).

5.  Click **Save**.


To make a new cross-reference table component usable in processes, you must configure and populate the table. You can do this by:

-   Manually adding rows and columns

-   Importing a CSV file


:::note

You cannot populate cross reference tables or update dynamically. If you need a data structure that you can update dynamically, consider using a document cache or an external database table.

:::