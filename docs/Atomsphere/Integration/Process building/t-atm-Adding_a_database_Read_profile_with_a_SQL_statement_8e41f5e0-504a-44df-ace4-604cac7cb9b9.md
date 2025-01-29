# Adding a database (legacy) Read profile with a SQL Statement

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8e41f5e0-504a-44df-ace4-604cac7cb9b9"/>
</head>

:::note

The Database (Legacy) Profile and Database (Legacy) connector are no longer actively maintained. We encourage you to migrate to the updated [Database V2 connector](../Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

:::

For Read profiles, the Data Elements tab is where you define the SQL statement to extract data and the columns returned by that query.

## Procedure

1.  Create a database profile.

2.  On the Options tab, set the Execution Type field to **Read**.

3.  On the Data Elements tab, click the **Statement** node.

4.  On the right side, make sure the Type field is set to **Select**.

5.  To define the SQL statement, do one of the following:

    -   Click **Import** to launch the Import Wizard to automatically generate the statement and output fields.

    -   Leave the Type field set to **Select** and type or cut and paste your SQL statement in the **SQL Script** field or the code editor. To open the code editor, click **Edit**.

6.  You can modify the automatically generated query created by the Import Wizard to include additional logic such as JOINs and WHERE clauses.

    SQL allows you to perform relatively complex logic when extracting data. As a best practice, use the SQL query to perform the necessary joining, filtering, sorting, grouping, and even minor formatting before the data is sent into the process. This can simplify the logic required in the process and can execute more efficiently because it is handled by the driver on the database server.

7.  If you choose not to use the Import Wizard and want to enter your own query, you must manually create output fields to match the number of columns returned by the query. You can also manually add input parameters. See the topics below for more information.

    You can execute any valid SQL statement supported by the database application you are connecting to. The query may be as simple or as complex \(with JOINs, subqueries, WHERE clauses, GROUP BY, ORDER BY, UNIONs, etc.\) as required.

8.  Click **Save**.