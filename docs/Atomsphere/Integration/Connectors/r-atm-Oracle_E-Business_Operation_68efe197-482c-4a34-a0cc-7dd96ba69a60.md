import TrackedProperties from './_TrackedProperties.md'
import OperationEnd from './_operationEnd.md'

# Oracle E-Business \(EBS\) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-68efe197-482c-4a34-a0cc-7dd96ba69a60"/>
</head>


The Oracle E-Business \(EBS\) connector supports the Execute and Query operations that use JDBC to run database calls against the Oracle E-Business Suite instance. The Execute action runs Oracle E-Business-specific stored procedures contained within modules.

## Query 

Query, an inbound operation, performs SQL SELECT queries against the database schema, allowing to look up a single object record based on specific search criteria. This operation requires static or dynamic request parameters \(filters\) to control the selected object record.

After import, use the **Fields**, **Filters**, and **Sorts** tabs to define the properties to build the SQL query.

-   Use the **Fields** tab to select the database columns returned from the query.

-   The **Filters** tab contains the expressions used to produce the WHERE clause. The filter can contain one or multiple expressions linked by a logical operator \(AND or OR\) to produce a more complex WHERE condition. Filters also support nested expressions.

-   The **Sorts** tab contains a list of zero or more fields to define the ORDER BY clause of the SQL query.


## Execute 

The following description covers advanced functionality that requires experience using Oracle PL/SQL stored procedures.

Execute adds the initialValue attribute to the PL/SQL Record elements in the generated XML request and response profiles. The initialValue attribute is on the `P_HEADER_REC` element. You might need to initialize the default values for all arguments within a PL/SQL Record object within the Oracle E-Business Suite API. To accomplish this, the API can contain a procedure or global variable. For example, it must initialize the `process_order` API, which contains many record objects. In PL/SQL, it can run as follows:

```
v_header_rec oe_order_pub.header_rec_type;
v_header_rec:=oe_order_pub.g_miss_header_rec; (Header Rec is initialized by g_miss_header_rec proc)
v_header_rec.operation:= OE_GLOBALS.G_OPR_CREATE;
v_header_rec.order_type_id :=1437;
```

Here is a portion of the request XML sent to the PROCESS\_ORDER connector to show how to accomplish the same functionality in .

```
<P_HEADER_REC initialValue="oe_order_pub.g_miss_header_rec">
   <ORDER_TYPE_ID>1437</ORDER_TYPE_ID>
   <OPERATION>CREATE</OPERATION>
```

Oracle E-Business Suite uses internal values to represent NULL within the database for Character, Date, and Numeric types. The Oracle API and documentation defines these values as:

-   FND\_API.G\_MISS\_NUM;

-   FND\_API.G\_MISS\_DATE;

-   FND\_API.G\_MISS\_CHAR;


To set a procedure parameter or record argument with these NULL representations within , the request XML must have an empty element or element with no text content for that particular field. The connector then sets the appropriate NULL value for its data type when sending the data to Oracle E-Business Suite. If the element is missing from the XML, it sends a NULL value.

For example:

```
<REQUEST_DATE/> OR <REQUEST_DATE></REQUEST_DATE> -- Value set as FND_API.G_MISS_DATE
```

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following fields appear on the **Options** tab:

 
  

**Object** - 
 Displays the object type that was selected in the **Import Wizard**.

For the Execute action, this is the Oracle package and procedure name for the PL/SQL stored procedure.

 For the Query action, this is the Oracle table name.

:::note

As of the July 2018 release, you can reuse BOD and BODT TYPE definitions across runs. It requires reimporting the object to reuse BOD and BODT TYPE definitions with existing integrations.

:::

**Tracking Direction** - 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting**. Start steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Request Profile** \(Execute only\)  
The XML Profile definition that represents the XML structure sent by the connector.

**Response Profile** - 
The XML Profile definition that represents the XML structure received by the connector.

**Return Application Error Responses** - 
Defines whether to forward responses through the process or fail at the connector level. If selected, it does not report failed operations on the **Manage** menu, allowing you to act on them in your process.

**Maintain Session** \(Execute only\)     
If selected, any database session used when running the operation is not closed upon completion. This action allows multiple *initialization* operations to run as a series of connector steps. For example, if other procedures need to run prior to an operation, it can use the existing database session initialized in the prior steps.

You cannot use the **Maintain Session** setting with the **Flow Control** step’s parallel processing option, with asynchronous subprocesses, or with the **Try/Catch** step or other cases where it generates a separate execution thread. This check box is clear by default.

**Exclude missing parameters from the procedure** \(Execute only\)    
 Determines if parameters missing from the input document are not included in the procedure call or are included and set to NULL.

 -   When selected, parameters missing from the input document are not included in the procedure call.
  -   When cleared, it sets missing parameters to NULL and passed to the procedure call.

 Stored procedure example

 You have a procedure

    ```
    my_procedure(x1 VARCHAR IN , x2 VARCHAR IN, x3 VARCHAR IN DEFAULT 'Hi')
    ```

 with the following input document:

    ```
    <my_procedure>
    <x1>hello</x1>
    <x2>hey</x2>
    <my_procedure>
    ```

 As shown, the third default variable from the procedure, `X3`, is missing from the input document. You want to use the default value Hi instead of NULL, so you select **Exclude missing parameters from the procedure**. As a result, the procedure call is similar to the following:

 ```
 my_procedure(x1=>'hello', x2=>'hey');
 ```

 The procedure assigns the default value of Hi to the X3 variable.

**Module** \(Execute only\) - 
 Select a module that contains a specific Oracle E-Business Suite stored procedure.

**Schema** \(Query only\) - 
 Select a database schema. The connector queries the `ALL_PROCEDURES` table.

**Name Filter \(Query and Execute\)** - 
 You can use Execute, to search by procedure name or by part of a procedure name. The search filter is case-sensitive and all names are in uppercase. You can filter to limit the number of PL/SQL procedures for a module. This allows you to browse for global functions with common procedure names such as INITIALIZE or INIT.

You can also search by package and procedure name. To add a package name to the search, you must set the **Module** field to **Any Module**. The search term syntax is `<PACKAGE_NAME>.<PROCEDURE_NAME>`. For example, `HR_EMPLOYEE_API.CREATE_EMPLOYEE` or `MO_GLOBAL.INIT`.

 You can use Query to limit the number of tables for a schema. You can enter one table name.

**Fail on database errors** \(Query only\) -  
 Determines how to handle database errors when the process runs \(for example, invalid connection settings\).

 -   When selected, an application error occurs and the process stops at the **Connector** step.
 -   When cleared, the process containing the operation runs successfully, stops at the **Connector** step, and does not continue.

   In both cases, a message appears in the process log.

<OperationEnd />