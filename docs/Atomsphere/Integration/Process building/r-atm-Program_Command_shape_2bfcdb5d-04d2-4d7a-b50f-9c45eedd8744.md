# Program Command step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-93705913-0153-4A4B-97F9-FAB79233E845"/>
</head>


The Program Command step enables database and system-level commands to be executed as part of the process flow. There are three types of commands available: SQL statements, stored procedures, and system commands.

![Program Command icon](../Images/step-ic-program-command-32_7e1581f0-d7be-457a-84cb-125dcf175910.jpg)

Often, commands use dynamic runtime values in their calls. In these cases you can use parameters to provide values such as data from a document field, the current system date/time, a static value, the results of a database query, or several other types of values. You can use multiple parameters when creating a Program Command step. The placeholder number or position corresponds to the order of the parameters defined at the bottom of the dialog.

:::note

For security reasons, you cannot use the Program Command step in processes deployed to a Boomi Atom Cloud.

:::

## Program Command step dialog

- **Display Name** - \(Optional\) User-defined name to describe the step. If one is entered, it appears in addition to the label determined by how you set the Type field.

- **Type** - Used to choose a Program Command step type. All Program Command step types display unique properties.

  - SQL Statement — Execute a database SQL action \(INSERT, UPDATE, DELETE\). Queries are not supported in the Program Command step because there is no database profile to identify the response's record structure. Use the Database Connector in mid-process to perform a database read.

  - Stored Procedure — Execute a database stored procedure. The Program Command step will not be able to process any stored procedure returns as structured data through the process flow.

  - System Command — Execute a command line program or script \(e.g., \*.exe, \*.bat, \*.jar, \*.java files\) that does not require user interaction. See the Command field below for more information.

- **Run once per execution** - If selected, prevents executions with more than one document from repeatedly calling the defined command. It should only be used in scenarios where you do not need to reference inbound document data to execute the command.

- **Connection** - Used to choose an existing Database Connection component or to create a new one against which you will execute the SQL statement or stored procedure.

- **SQL** - The actual SQL statement to execute. You can use placeholders \("?"\) to insert variables. See the Parameter Values topic for more information.

- **Procedure Name** - The name of the database stored procedure to invoke. Use the variables at the bottom to provide the appropriate input variables as defined by the stored procedure definition.

- **Command** - The name of the command line program or script to invoke, including the full path to its location.

  No matter where the program or script is located, its runtime execution context is the Atom’s root directory. If your program or script contains relative file or directory references, you need to add a `“cd”` command within the program or script to reset the execution context.

  You can use the following syntax to create a placeholder, starting at 1.  This allows you to dynamically set the path or script input variables, e.g., **C:\\test\\example\\example.bat\{1\}\{2\}**.

- **Variables** - Provide one or more values to insert into the command. For more information, refer to [Parameter Values](./c-atm-Parameter_Values_23a1eb13-d83b-423e-adf1-d78db4a1fbbd.md).
